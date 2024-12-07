import React, { FC, useState } from "react";
import Task from "../Task";
import { Pagination } from "antd";
import "./styles.scss";

interface TaskType {
  id: string;
  title: string;
  creator: string;
  status: "NEW" | "DOING" | "DONE";
  description: string;
  createdat: Date;
}

interface MainContentTaskProps {
  tasks: TaskType[];
  totalTasks: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const MainContentTask: FC<MainContentTaskProps> = ({
  tasks,
  totalTasks,
  currentPage,
  onPageChange,
}) => {
  const pageSize = 12;

  const currentTasks = tasks.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const renderTask = (tasks: TaskType[]): JSX.Element[] => {
    return tasks.map((task) => <Task key={task.id} task={task} />);
  };

  return (
    <div className="main-content-task">
      <div className="task-list">{renderTask(currentTasks)}</div>
      <div className="pagination-container">
        <Pagination
          total={totalTasks}
          pageSize={pageSize}
          current={currentPage}
          onChange={onPageChange}
          showSizeChanger={false}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MainContentTask;
