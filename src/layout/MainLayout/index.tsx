import React, { FC } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import SideBarComponent from "../../components/SideBar";
import "./styles.scss";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <div className="main-layout-container">
      <HeaderComponent />
      <div className="main-layout-container__content">
        <SideBarComponent />
        <div className="right-side">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
