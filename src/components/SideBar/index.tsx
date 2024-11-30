import React from "react";
import "./styles.scss";
import {Link} from 'react-router-dom';
import {ROUTE} from '../../constants/routes';

const SideBarComponent = () => {
  return (
    <div className="side-bar-container">
      <ul className="side-bar-container__list">
        <li className="side-bar-container__list-item"><Link to={ROUTE.ALL_TASK}>ALL TASK</Link></li>
        <li className="side-bar-container__list-item"><Link to={ROUTE.NEW_TASK}>NEW TASK</Link></li>
        <li className="side-bar-container__list-item"><Link to={ROUTE.DOING_TASK}>DOING_TASK</Link></li>
        <li className="side-bar-container__list-item"><Link to={ROUTE.DONE_TASK}>DONE_TASK</Link></li>
      </ul>
    </div>
  );
};

export default SideBarComponent;
