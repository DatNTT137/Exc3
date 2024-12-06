import React, { FC, useState } from "react";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../constants/routes";
import "./styles.scss";

const HeaderComponent: FC = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  const handleRedirectAddTask = (): void => {
    navigate(ROUTE.ADD_NEW);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleSearchButton = (): void => {
    const searchTerm = search.trim().toUpperCase();  

    if (searchTerm === "NEW") {
      navigate("/new-task");
    } else if (searchTerm === "DOING") {
      navigate("/doing-task");
    } else if (searchTerm === "DONE") {
      navigate("/done-task");
    } else {
      alert("Invalid status. Please enter 'NEW', 'DOING', or 'DONE'.");
    }
  };

  return (
    <div className="header-container">
      <Button onClick={handleRedirectAddTask}>Create New Task</Button>
      <div className="header-container__search">
        <Input
          value={search}
          onChange={handleSearch}
          placeholder="Search by status (NEW, DOING, DONE)"
        />
        <Button onClick={handleSearchButton}>Search</Button>
      </div>
    </div>
  );
};

export default HeaderComponent;
