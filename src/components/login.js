import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './redux/apiReq'
import styled from 'styled-components'





const Container = styled.div`

background-color: rgb(217, 244, 252);
height: 100vh;
width: 100%;
display: flex;
 justify-content: center;
 align-items: center;

`
const Wrapper = styled.div`

background-color:white;
width: 40%;
border-radius: 15px;
`
const Form = styled.form`
margin: 40px;
display: flex;
flex-direction: column;
`
const Email = styled.input`
width: 60%;
padding: 15px 30px;
margin-top: 15px;
margin-bottom: 35px;
border: none;
border-bottom: 1px solid lightgray;
 `
const Password = styled.input`
width: 60%;
padding: 15px 30px;
margin-top: 15px;
margin-bottom: 35px;

border: none;
border-bottom: 1px solid lightgray;
`
const Btn = styled.button`
width: 50%;
padding: 15px 30px;
border: none;
background-color: darkblue;
color: white;
font-size: 20px;
border-radius: 15px;
margin-top: 40px;
margin-left: auto;
cursor: pointer;

&:hover{
    background-color: blue;
}
`
const Header = styled.h1`
margin-top:40px;
font-size: 30px;
`
const Error = styled.span`
color: red;
margin-top: 15px;
margin-left: auto;
margin-right:30px;
`
 const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch = useDispatch();
const isAdmin = true;
  const {isFetching,error} = useSelector((state)=>state.user);
  const handleClick= (e)=>{
    e.preventDefault();
    login(dispatch,{email,password});
    setTimeout("location.reload(true);", 2000);




  }

  return (
 <Container>
      <Wrapper >
    
<Form >
<Header > Log in</Header>
  <Email type="email" onChange={(e)=>{setEmail(e.target.value)}}   placeholder =" Email"/>

  <Password  type="password" onChange={(e)=>{setPassword(e.target.value)}}  placeholder =" Password"/>


  <Btn  onClick={handleClick}  > Login</Btn>

  {error &&<Error >your email or password is not valid !</Error>} 

</Form>


      </Wrapper>


      </Container>

 
  )
}
export default Login