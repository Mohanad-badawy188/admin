import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;

`;
const FormTitle = styled.h1`
font-weight: bold;
font-size: 40px;
`;
const AddForm = styled.form`

display: flex;
  flex-wrap: wrap;

`;
const FormItem = styled.div`

width: 45%;
margin: 50px 10px;
justify-content: center;
align-items: center;
text-align: center;
`;
const FormName = styled.div`
font-size: 20px;
font-weight: 100;
margin-left: 15px;
text-align: start;
`;
const FormInput = styled.input`
margin: 20px;
padding: 15px;
width: 70%;
border: none;
border-bottom: solid gray 1px ;
`;
const SubmitBtn = styled.button`
padding:15px 50px;
border: none;
background-color: darkblue;
color: white;
border-radius: 15px;
font-size: 16px;
cursor: pointer;
&:hover{
    background-color: blue;
}



`
function NewUser() {
  return (
    <Container>
    <FormTitle>Create User</FormTitle>
      <AddForm>
        <FormItem>
          <FormName>Username</FormName>
          <FormInput placeholder="User"/>
        </FormItem>
        <FormItem>
          <FormName>Full Name</FormName>
          <FormInput placeholder="Full Name"/>
        </FormItem>
        <FormItem>
          <FormName>Email</FormName>
          <FormInput placeholder="Email@gmail.com"/>
        </FormItem>
        <FormItem>
          <FormName>password</FormName>
          <FormInput placeholder="Password"/>
        </FormItem>
        <FormItem>
          <FormName>Phone</FormName>
          <FormInput placeholder="+20 123456789"/>
        </FormItem>
        <FormItem>
          <FormName>Address</FormName>
          <FormInput placeholder="Cairo | Egypt"/>
        </FormItem>
        <FormItem>
        <SubmitBtn>Create User</SubmitBtn>
        </FormItem>

      </AddForm>
    </Container>
  );
}

export default NewUser;
