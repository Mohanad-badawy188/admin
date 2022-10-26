import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Visibility } from "@mui/icons-material";
import axios from 'axios';
import { Link } from 'react-router-dom';

const WidgetSmall = styled.div`
margin: 10px;
padding:10px;
flex: 1;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

`
const Container = styled.div``
const Title = styled.h2`
font-size:30px;
`
const UserList = styled.ul`
display: flex;
flex-direction: column;


`
const List = styled.li`
list-style: none;
display: flex;
margin: 10px 0px;
justify-content: space-between;
align-items: center;
text-align: center;
`
const UserInfo = styled.div``
const Username = styled.div`
font-weight: bold;
margin-bottom: 5px;
`
const UserJob = styled.div`
color: #555;
`
const UserButton = styled.button`
display: flex;
margin: 10px;
padding: 10px 15px;
justify-content: space-between;
align-items: center;
border-radius: 5px;
border:none;
background-color: rgb(228, 228, 260);
cursor: pointer;
color:rgba(0, 0, 0, 0.521);
&:hover{color:black;
}`
const Img = styled.img`
height: 40px;
width: 40px;
border-radius: 50%;
`

const UserIcon = styled.div`
display: flex;
margin-right: 10px ;

`
function WidgetSm() {
  const [users,setUsers]=useState([])

  useEffect(() => {
    
const getUsers = async ()=>{
  const TOKEN =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).user.accessToken; 

  try{
      const res = await axios({
      method: 'get',
      url: 'http://localhost:5000/api/users/?last3=true',
      headers: { token: `Bearer ${TOKEN}` },


  
  
    });
  setUsers(res.data);
  }catch{}

}
getUsers()
},[])
  return (
<WidgetSmall>
<Container>
<Title>New Join Members
</Title> 
<UserList>
{users.map((user) =>
  
  <List key = {user._id}> 
<Img src={user.img ||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAMFBMVEXk5ueutLfGycvn6eqrsbS0ubzV2NqnrbHh4+S/w8bS1dfCxsm7wMO3vL/IzM7N0dMI2KZsAAADPElEQVR4nO2b247jIAxAIQZCLjT//7cLaaftdpJiu7WT1XKklUbahznCNgGbMabRaDQajUaj0Wg0Go3Gfw5A/nf/6XAA4thNc0ppHi4hHuwEJsyuYAvrD104zgnMxd9cHjiXxmOUss4vmyu9PWKVIPh+U2ddptloG0G3r7MGblQ1ApO2o/Wk1CkaQfQ1n2w0qBmhfNZE0hJC+WSjSWeNoJo/dyOVPIIO65ONgrwRhLf1/koUFzKe4iNfanDBB6zQSwctkgKWSbJClIy+IpzXkaiThbykECzUiGUjyUIDso7wfh2pGVTwcj7Umr8tUZATmhk+1l3kYsbxsXYWEwqciGWkfGDkCYkVPn2bvglJbdYwMIWkbiC8IstCy9mEpOoe0tmETrdCp8uh01XZ6fahs+3Up/uWMU7UK4IXD9ZGJHgeggtLSPDEyEsiMR/ercNK3jo4p3zRexmnzkRvrgamk93tGd0PUR36Eon3h6gdNLk72Q/n6zFSgqYQsIJF96mVOufYNFKbdgBue9SbdRQjxDRIvsCejOp5pJY/Pwzvq1/s6rMLhDdDKpfiAVPg2PU7U2k3qs+Ar0qmsxtze78c+JQghtQ/nJzr3RCOWZ2HE4RlmpP3Pg3dcvTbj5vSE4ebmBhDCMvKGEKM8Rit/CuzSTd7f30Uc30isyaTT9MSo+pjovXJ0Gz7naq3Lv9PGko+KTjl3zFO1u28i/m7/t08RuGSyyU1/H4y9MbJpkUudmBCh5d5SM0yO1NenIQ+Kr4oCezdOXMsfbr55HT56tcW3n7acUr2i0o5WB+szkPpS4GDONBTeVvJf+NWBIGXyptGn3f3wDCb5XtK9rNMQj7uIvHJYRvGLyTzK/3A92GN6auwL5AwCazPauRZiUTv3lGMTuVTio28RNxRFNaI+kKFO4nCG9FaNUButtKNaJs2qbPJNCJ82LjDVSJ4H+7kkAa+gwQKAStge7Scp3g8sLNPJR1sXgt9UjdBja60MqiAySLiLOMzMPu10h50A/HZZz4WYIIYoetsinehasyEjx2/qQop1lihr0UMlBeoXviKRV+oHYvyLuR0qf1xTJw6XcZqEilT82k0Go1G41/jD2n0KSSHkfO7AAAAAElFTkSuQmCC"
} />
<UserInfo> <Username>{user.name}</Username>  
<UserJob> new user</UserJob>
</UserInfo>
<Link style={{textDecoration: 'none'}} to ={"/user/"+user._id}> <UserButton> <UserIcon> <Visibility fontSize='small' /></UserIcon>  Display</UserButton></Link>

</List>

  
  )}

</UserList>

</Container>


</WidgetSmall>
  )
}

export default WidgetSm