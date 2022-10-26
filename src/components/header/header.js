import React from "react";
import "./header.css";
import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Header = () => {

  return (
    <div className="header">
      <div className="wrapper">
        <div className="left">
          <span className="logo">Admin</span>
        </div>
        <div className="right">
          {" "}
          <Badge badgeContent={4} color="secondary">
            <div className="header-right-item">
              <NotificationsNone />
            </div>
          </Badge>
          <Badge badgeContent={4} color="secondary">
            <div className="header-right-item">
              <Language />
            </div>
          </Badge>
          <div className="header-right-item">
            <Settings />
          </div>
          <div className="header-right-item">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/p_avatar_de27b20f.jpeg"
              className="avatar "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
