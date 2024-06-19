import React from "react";
import "./Layout.css";
import moment from "moment/moment";
import { BiSearch } from "react-icons/bi";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {

    const {pathname} = useLocation()
  return (
    <div className="l-container">
      <Sidebar />

      {/* making the dashboard as the default route  */}
      {pathname === "/" && <Navigate to="/dashboard"/>}

      <div className="l-dashboard">
        <div className="topBaseGradients">
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>
        <div className="header">
          <span>{moment().format("dddd, Do MMM YYYY")}</span>
          <div className="searchBar">
            <BiSearch size={20} />
            <input type="text" placeholder="search" />
          </div>

          <div className="profile">
            <img src="./profile.png" alt="person image" />
            <div className="detail">
              <span>Ahmad Abuya</span>
              <span>ahmadabuya0@gmail.com</span>
            </div>
          </div>

        </div>
          <div className="content">
            <Outlet/>
          </div>
      </div>
    </div>
  );
};

export default Layout;
