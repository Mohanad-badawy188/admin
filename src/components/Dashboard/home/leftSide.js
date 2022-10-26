import React from "react";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Leftside = styled.div`
  background-color: lightgray;
  height: calc(100vh - 50px);
  flex: 1;
  position: sticky;
  top: 50px;


  z-index: 5;
`;
const Wrapper = styled.div`
width: 250px;
`;
const List = styled.ul``;
const ListItem = styled.li`
  display: flex;
  align-items: center;

  padding: 5px;
  margin-left: 15px;
  padding-left: 30px;
  width: 70%;
  cursor: pointer;
  margin-top: 10px;
  &:active {
    background-color: rgb(228, 228, 260);
    border-radius: 10px;
  }
  &:hover {
    background-color: rgb(228, 228, 260);
    border-radius: 10px;
  }
`;
const ListItemTitle = styled.li`
  display: flex;
  align-items: center;
  color: rgb(130, 125, 125);

  font-size: 15px;
`;
const Icons = styled.div`
  margin-right: 10px;
  text-decoration: none;
  color: black;
`;

function LeftSide() {
  return (
    <Leftside>
      <Wrapper>
        <List>
          <ListItemTitle> Dashboard</ListItemTitle>
          <Link style={{textDecoration: 'none' , color :"black"}} to="/">
          <ListItem>
            {" "}
            <Icons>
              <LineStyle />
            </Icons>{" "}
            Home
          </ListItem> </Link>
          <ListItem>
            {" "}
            <Icons>
              <Timeline />{" "}
            </Icons>{" "}
            Analytics
          </ListItem>
          <ListItem>
            <Icons>
              <TrendingUp />{" "}
            </Icons>{" "}
            Sales{" "}
          </ListItem>
        </List>
        <List>
          <ListItemTitle> Quick Menu</ListItemTitle>
          <Link style={{textDecoration: 'none' , color :"black"}} to="/users">
            <ListItem>
              {" "}
              <Icons>
                <PermIdentity />
              </Icons>{" "}
              
            Users
            </ListItem> {" "}
            </Link>
            <Link style={{textDecoration: 'none' , color :"black"}} to="/ProductList">
          <ListItem>
            {" "}
            <Icons>
              <Storefront />{" "}
            </Icons>{" "}
            Products
          </ListItem></Link>
          <ListItem>
            <Icons>
              <AttachMoney />{" "}
            </Icons>{" "}
            Transactions{" "}
          </ListItem>
          <ListItem>
            <Icons>
              <BarChart />{" "}
            </Icons>{" "}
            Reports{" "}
          </ListItem>
        </List>
        <List>
          <ListItemTitle> Notifications</ListItemTitle>
          <ListItem>
            {" "}
            <Icons>
              <MailOutline />
            </Icons>{" "}
            Mail
          </ListItem>
          <ListItem>
            {" "}
            <Icons>
              <DynamicFeed />{" "}
            </Icons>{" "}
            Feedback
          </ListItem>
          <ListItem>
            <Icons>
              <ChatBubbleOutline />{" "}
            </Icons>{" "}
            Messages{" "}
          </ListItem>
        </List>
        <List>
          <ListItemTitle> Staff</ListItemTitle>
          <ListItem>
            {" "}
            <Icons>
              <WorkOutline />
            </Icons>{" "}
            Manage
          </ListItem>
          <ListItem>
            {" "}
            <Icons>
              <Timeline />{" "}
            </Icons>{" "}
            Analytics
          </ListItem>
          <ListItem>
            <Icons>
              <Report />{" "}
            </Icons>{" "}
            Reports{" "}
          </ListItem>
        </List>
      </Wrapper>
    </Leftside>
  );
}

export default LeftSide;
