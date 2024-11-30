import React, { Children } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import SideBarComponent from "../../components/SideBar";
import './styles.scss';
import {Outlet} from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="main-layout-container">
      <HeaderComponent />
      <div className="main-layout-container__content">
        <SideBarComponent></SideBarComponent>
        <Outlet></Outlet>
      </div>
    </div>
  )
};
export default MainLayout;
