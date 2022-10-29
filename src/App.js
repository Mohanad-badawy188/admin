import React from "react";
import Header from "./components/header/header";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

import LeftSide from "./components/Dashboard/home/leftSide";
import styled from "styled-components";
import Home from "./components/Dashboard/home/home";
import UsersList from "./components/Dashboard/users/UsersList";
import User from "./components/Dashboard/users/user";
import NewUser from "./components/Dashboard/users/NewUser";
import ProductList from "./components/Dashboard/products/productList";
import Product from "./components/Dashboard/products/Product";
import NewProduct from "./components/Dashboard/products/NewProduct";
import Login from "./components/login";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
`;
const Others = styled.div`
  flex: 5;
`;

function  App () {
  let admin = ''
  const user =  useSelector(state => state.user.user)
  console.log(user)
  if  (user){
     admin= JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).user.foundUser.isAdmin;
     console.log(admin)

  }

  const router =  createBrowserRouter( [
    
    {
      path: "/",
      element: (
  <div>
          <Header />
          <Container>
            <LeftSide />
            <Others>
            {admin ? (<Home /> ): (<Navigate to="/login" replace={true} /> )}

            </Others>
          </Container>
          </div>
      
       
        ),
    },
    {
      path: "/users",
      element: admin ? (
        <div>
          <Header />
          <Container>
            <LeftSide />
            <Others>

              <UsersList />

            </Others>
          </Container>
        </div>
        ):<Login /> ,
    },
    {
      path: "/user/:userId",
      element: admin ? (
        <div>
          <Header />
          <Container>
            <LeftSide />
            <Others>
              <User />
            </Others>
          </Container>
        </div>
        ):<Login /> ,
    },
    {
      path: "/newUser",
      element:admin ? (
        <div>
          <Header />
          <Container>
            <LeftSide />
            <Others>
              <NewUser />
            </Others>
          </Container>
        </div>
        ):<Login /> ,
    },
    {
      path: "/ProductList",
      element: admin ?(
        <div>
          <Header />
          <Container>
            <LeftSide />
            <Others>
            <ProductList />
            </Others>
          </Container>
        </div>
        ):<Login /> ,
    },
    {
      path: "/product/:productId",
      element:admin ?   (
        <div>
          <Header />
          <Container>
            <LeftSide />
            <Others>
              <Product />
            </Others>
          </Container>
        </div>
        ):<Login /> ,
    },
    {
      path: "/newProduct/",
      element: admin ? (
        <div>
          <Header />
          <Container>
            <LeftSide />
            <Others>
              <NewProduct />
            </Others>
          </Container>
        </div>
      ):<Login /> ,
    },
    {
      path: "/Login",
      element: (
      
          <Container>

          {admin ? (<Navigate to="/" replace={true} /> ): <Login />} 
      
          </Container>

      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
