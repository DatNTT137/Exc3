import React, { FC } from "react";
import "./styles.scss";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTE } from "../../constants/routes";

interface Task {
  id: string;
  title: string;
  creator: string;
  status: "NEW" | "DOING" | "DONE";
  description: string;
  createdat: Date; 
}

interface TaskProps {
  task: Task;
}

const Task: FC<TaskProps> = ({ task }) => {
  const navigate = useNavigate();

  const handleRedirectToDetailPage = () => {
    navigate(generatePath(ROUTE.UPDATE_TASK, { id: task.id }));
  };

  return (
    <div className="task-container">
      <div
        className="task-container__title"
        onClick={handleRedirectToDetailPage}
      >
        Title: {task.title}
      </div>
      <div className="task-container__author">Created by: {task.creator}</div>
      <div className="task-container__status">Status: {task.status}</div>
      <div className="task-container__divider"></div>
      <div className="task-container__description">
        <div className="task-container__des-title">Description:</div>
        <div className="task-container__des-content">
          {task.description}
        </div>
      </div>
    </div>
  );
};

export default Task;
