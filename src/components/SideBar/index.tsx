import React, { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "../../constants/routes";
import "./styles.scss";

const SideBarComponent: FC = () => {
  return (
    <div className="side-bar-container">
      <ul className="side-bar-container__list">
        <li className="side-bar-container__list-item">
          <Link to={ROUTE.ALL_TASK}>All Task</Link>
        </li>
        <li className="side-bar-container__list-item">
          <Link to={ROUTE.NEW_TASK}>New Task</Link>
        </li>
        <li className="side-bar-container__list-item">
          <Link to={ROUTE.DOING_TASK}>Doing Task</Link>
        </li>
        <li className="side-bar-container__list-item">
          <Link to={ROUTE.DONE_TASK}>Done Task</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarComponent;
