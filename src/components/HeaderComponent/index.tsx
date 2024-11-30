import React from "react";
import "./styles.scss";
import { Button, Input } from "antd";

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <Button>Create New Task</Button>
      <div className="header-container__search">
        <Input></Input>
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default HeaderComponent;
