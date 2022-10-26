
import {React,useEffect,useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';
import  axios  from 'axios';

import {rows} from '../chart/ChartData';



const UserList = styled.div`
display: flex;
align-items: center;


`
const UserImg = styled.img`
width:40px;
height: 40px;
object-fit: cover;
border-radius: 50%;
margin-right: 10px;

`
const User = styled.div `
display: flex;
text-align: center;
align-items: center;

`
const EditButton = styled.button`
height: 35px;
width : 50px;
color: black;
margin-right:20px;
background-color: #e5faf2;
border-radius: 20%;
cursor: pointer;
border: none;
`
const UserDelete = styled.div`
cursor: pointer;
color: #d95087;
margin-left:20px;

`

function Users() { 
const[user,setUser]=useState([])

  useEffect(() => {
    const getUser = async () => {
      const TOKEN = JSON.parse(
        JSON.parse(localStorage.getItem("persist:root")).user
      ).user.accessToken;

      try {
        const res = await axios({
          method: "get",
          url: "http://localhost:5000/api/users",
          headers: { token: `Bearer ${TOKEN}` },
        });
        setUser(res.data);
      } catch {}
    };

    getUser();
  },[]);

  




const handleDelete = async (id) => {
  console.log(id)
    const TOKEN = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    ).user.accessToken;

    try {
      const res = await axios({
        method: "delete",
        url: `http://localhost:5000/api/users/${id}`,
        headers: { token: `Bearer ${TOKEN}` },
      });
    
    } catch {}
const items = user.filter(item => item._id !== id)

setUser(items)
  }; 



   
  const columns = [
    { field: '_id', headerName: 'id', width: 100 },
    { field: 'name', headerName: 'userName', width: 200 ,renderCell: (params) => {
      return (
        <UserList >
          <UserImg  src={params.row.img || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAMFBMVEXk5ueutLfGycvn6eqrsbS0ubzV2NqnrbHh4+S/w8bS1dfCxsm7wMO3vL/IzM7N0dMI2KZsAAADPElEQVR4nO2b247jIAxAIQZCLjT//7cLaaftdpJiu7WT1XKklUbahznCNgGbMabRaDQajUaj0Wg0Go3Gfw5A/nf/6XAA4thNc0ppHi4hHuwEJsyuYAvrD104zgnMxd9cHjiXxmOUss4vmyu9PWKVIPh+U2ddptloG0G3r7MGblQ1ApO2o/Wk1CkaQfQ1n2w0qBmhfNZE0hJC+WSjSWeNoJo/dyOVPIIO65ONgrwRhLf1/koUFzKe4iNfanDBB6zQSwctkgKWSbJClIy+IpzXkaiThbykECzUiGUjyUIDso7wfh2pGVTwcj7Umr8tUZATmhk+1l3kYsbxsXYWEwqciGWkfGDkCYkVPn2bvglJbdYwMIWkbiC8IstCy9mEpOoe0tmETrdCp8uh01XZ6fahs+3Up/uWMU7UK4IXD9ZGJHgeggtLSPDEyEsiMR/ercNK3jo4p3zRexmnzkRvrgamk93tGd0PUR36Eon3h6gdNLk72Q/n6zFSgqYQsIJF96mVOufYNFKbdgBue9SbdRQjxDRIvsCejOp5pJY/Pwzvq1/s6rMLhDdDKpfiAVPg2PU7U2k3qs+Ar0qmsxtze78c+JQghtQ/nJzr3RCOWZ2HE4RlmpP3Pg3dcvTbj5vSE4ebmBhDCMvKGEKM8Rit/CuzSTd7f30Uc30isyaTT9MSo+pjovXJ0Gz7naq3Lv9PGko+KTjl3zFO1u28i/m7/t08RuGSyyU1/H4y9MbJpkUudmBCh5d5SM0yO1NenIQ+Kr4oCezdOXMsfbr55HT56tcW3n7acUr2i0o5WB+szkPpS4GDONBTeVvJf+NWBIGXyptGn3f3wDCb5XtK9rNMQj7uIvHJYRvGLyTzK/3A92GN6auwL5AwCazPauRZiUTv3lGMTuVTio28RNxRFNaI+kKFO4nCG9FaNUButtKNaJs2qbPJNCJ82LjDVSJ4H+7kkAa+gwQKAStge7Scp3g8sLNPJR1sXgt9UjdBja60MqiAySLiLOMzMPu10h50A/HZZz4WYIIYoetsinehasyEjx2/qQop1lihr0UMlBeoXviKRV+oHYvyLuR0qf1xTJw6XcZqEilT82k0Go1G41/jD2n0KSSHkfO7AAAAAElFTkSuQmCC"
        }  alt="" />
          {params.row.name}
        </UserList>
      );
    },},

    {
      field: 'email',
      headerName: 'Email',
      description: 'This column has a value getter and is not sortable.',
   
      width: 140,
    
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <User>
            <Link to={"/user/" + params.row._id}>
              <EditButton >Edit</EditButton>
            </Link>
          <UserDelete><DeleteOutline

              onClick={() => handleDelete(params.row._id)}
            />
            </UserDelete>  
          </User>
        );
      },
    },
  ];
  
  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
    disableSelectionOnClick
    rows={user}
      columns={columns}
      pageSize={5}
      getRowId = {(row)=>row._id}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
  
  )
}

export default Users

