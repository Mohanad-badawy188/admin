import { Upload } from '@mui/icons-material';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";
import ChartData from "../chart/chart"
import {ProductsData} from "../chart/ChartData";

const Container = styled.div`
  padding: 35px;
`;
const EditProduct = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
const EditTitle = styled.div`
  font-size: 45px;
  font-weight: bold;
`;
const EditButton = styled.button`
  padding: 15px 30px;
  border: none;
  background-color: teal;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgb(15, 160, 130);
  }
`;

const ProductPage = styled.div`
  display: flex;
  margin-top: 20px;
`;
const ProductInfo = styled.div`
  flex: 2;

`;
const ProductHeaderInfo = styled.div`
  display: flex;
`;
const ProductData = styled.div`
  flex: 1;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-left: 20px;
`;

const ProductImg = styled.img`
  height: 45px;
  width: 45px;
  padding: 20px;
  border-radius: 50%;
  object-fit: cover;
`;
const ProductDetails = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`;
const ProductName = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
const ProductInfos = styled.div`
display: flex;
justify-content: space-around;
font-size: 20px;
margin-top: 35px;
font-weight: bold;
`
const Info = styled.div`
color: rgba(0,0,0,0.8);
font-weight: 300;

`
const UpdatePage = styled.div`
margin-top: 40px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
const ProductForm = styled.form`
display: flex;
justify-content: space-between;
`
const ProductLeft = styled.div`
margin: 20px;

`
const ProductTitle = styled.div`
font-size:20px;
padding: 20px;
`

const ProductRight = styled.div`

`
const ProductLeftTitle = styled.div`

margin: 20px;
color: rgba(0,0,0,0.7);
`
const ProductLeftInput = styled.input`
margin: 10px 30px;
padding: 15px 30px;
border: none;
border-bottom: 1px solid lightgray;
`
const ProductLeftSelect = styled.select`
margin: 10px 50px;
padding: 5px 60px;

`

const ProductRightContainer = styled.div`
display: flex;
align-items: center;
`;
const ProductBottomImg = styled.img`
height:120px;
margin: 30px;
border-radius: 15px;

`;
const Icon = styled.div`
cursor: pointer;
margin-right:50px;
`;
const LastBtn = styled.button`
padding: 10px 50px;
margin: 30px;
border: none;
background-color: darkblue;
color: white;
cursor:pointer;
border-radius: 10px;
&:hover{
    background-color: blue;
}
`;


function Product() {
  const location = useLocation();
  const productId =location.pathname.split("/")[2];
const product = useSelector((state)=>state.product.product.find((product)=>product._id=== productId))

  return (
    <Container>
    <EditProduct>
      <EditTitle>Edit Product</EditTitle>
      <Link to="/newproduct">
      <EditButton>Create</EditButton>
      </Link>
    </EditProduct>

    <ProductPage>
    <ProductInfo> <ChartData dataKey="Sales" name="month"  title ="Sales preformance" data ={ProductsData}/>
    </ProductInfo>
    <ProductData>
    <ProductHeaderInfo>
    <ProductImg src={product.imgURL} />

    <ProductDetails>
      <ProductName>{product.name}</ProductName>
    </ProductDetails>

  </ProductHeaderInfo>
  <ProductInfos>ID:<Info>{product._id}</Info></ProductInfos>
  <ProductInfos>price:<Info>$ {product.price}</Info></ProductInfos>

    </ProductData>
  
    </ProductPage>
    <UpdatePage>
    <ProductTitle>Update Product</ProductTitle>
    <ProductForm>
    
    
    <ProductLeft>
    <ProductLeftTitle>Product Name</ProductLeftTitle>
    <ProductLeftInput placeholder="plant"/>
    <ProductLeftTitle> in Stock</ProductLeftTitle>
    <ProductLeftSelect>
    <option>yes</option>
    <option>no</option>
    </ProductLeftSelect>




    </ProductLeft>
    <ProductRight>
    <ProductRightContainer>
    <ProductBottomImg src={product.imgURL} />
    <Icon typ><Upload/> </Icon>
    </ProductRightContainer>
    <LastBtn>Update</LastBtn>
    </ProductRight>
    </ProductForm>
    </UpdatePage>
      </Container>
  )
}

export default Product