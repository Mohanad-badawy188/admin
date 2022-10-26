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
const FormImg = styled.input`
margin: 20px;
`
function NewProduct() {
  return (
    <Container>
    <FormTitle>New Product</FormTitle>
      <AddForm>
        <FormItem>
          <FormName>Name </FormName>
          <FormInput placeholder="Name"/>
        </FormItem>
        <FormItem>
          <FormName>Stock </FormName>
          <FormInput placeholder="1234"/>
        </FormItem>
        <FormItem>
          <FormName>Image </FormName>
          <FormImg type="file"/>
        </FormItem>
      
        <FormItem>
        <SubmitBtn>Add Product</SubmitBtn>
        </FormItem>

      </AddForm>
    </Container>
  );
}

export default NewProduct;
