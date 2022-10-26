
import {React,useEffect,useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';

import { useDispatch ,useSelector} from 'react-redux';
import { getProduct,deleteProduct } from '../../redux/apiReq';



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

function ProductList() { 

const dispatch = useDispatch();
const products = useSelector((state)=>state.product.product)



  useEffect(() => {
getProduct(dispatch)
  },[dispatch]);



const handleDelete = (id) => {
   deleteProduct(id, dispatch);
  }; 
  const columns = [
    { field: "_id", headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Product Name', width: 250 ,renderCell: (params) => {
      return (
        <UserList >
          <UserImg  src={params.row.imgURL} alt="" />
          {params.row.name}
        </UserList>
      );
    },},
    
    {
      field: 'inStock',
      headerName: 'in stock',
      type: 'Boolean',
      width: 120,

    },
    {
      field: 'price',
      headerName: 'price',
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
            <Link to={"/product/" + params.row._id}>
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
      rows={products}
      columns={columns}
      getRowId = {(row)=>row._id}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
  
  )
}

export default ProductList

