import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import axios from 'axios';
import {format} from 'timeago.js'
const WidgetLarge = styled.div`
margin: 10px;
padding:10px;
flex: 2;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

`
const Table = styled.div`
width:100%;



`
const TableTr = styled.div`
display: flex;

`
const Title = styled.div`
font-size: 35px;
font-weight: bold;
margin: 15px;

`
const TableTh = styled.div`
text-align: center;
margin: 25px 0px;
flex: 1;

`
const TableTd = styled.div`
flex: 1;
display: flex;
text-align: center;
justify-content: center;
align-items: center;
margin: 5px 0;
font-weight: 300;
color: #555;


`
const TableImg = styled.img`
height:35px;
width: 35px;
border-radius: 50%;
margin-right: 15px;
object-fit: cover;
`
const Name = styled.h5`
font-size: 15px;
color: black;
font-weight: bold;
`
const Status = styled.div` 
padding: 5px;
border-radius: 10px;
background-color : ${props => props.status === "approved" && "#e5faf2"  };
color : ${props => props.status === "approved" && "#3bb077"  };
background-color : ${props => props.status === "pending" && "#ebf1fe"  };
color : ${props => props.status === "pending" && "#2a7ade"  };
background-color : ${props => props.status === "declined" && "#fff0f1"  };
color : ${props => props.status === "declined" && "#d95087"  };

`
function WidgetLg() {

  const [orders,setOrders]=useState([])

  useEffect(() => {
    
const getOrders = async ()=>{
  const TOKEN =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).user.accessToken; 
  try{
      const res = await axios({
      method: 'get',
      url: 'http://localhost:5000/api/order/',
      headers: { token: `Bearer ${TOKEN}` },


  
  
    });
    setOrders(res.data);
  }catch{}
}
getOrders()

},[])


  return (

    <WidgetLarge>
    <Table>
    <Title>Latest Transactions</Title>
  <TableTr>
  <TableTh>Customer</TableTh>
  <TableTh>Date</TableTh>
  <TableTh>Amount</TableTh>
  <TableTh>Status</TableTh>
  </TableTr>

  {orders.map((order)=>

    <TableTr key={order._id}>


    <TableTd><Name>{order.userId} </Name></TableTd>
    <TableTd>{format(order.createdAt)}</TableTd>
    <TableTd>$ {order.amount}</TableTd>
    <TableTd><Status status={order.status}>{order.status}</Status></TableTd>
    </TableTr>
  
  )}
 

    </Table>
  
    </WidgetLarge>
  )
}

export default WidgetLg