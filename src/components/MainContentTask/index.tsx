import React, { FC } from "react";
import Task from "../Task";
import { Pagination } from "antd";

interface Tasks {
  id: string;
  title: string;
  creator: string;
  status: string;
  description: string;
}

interface MainContentTaskProps {
  tasks: Task[];
  onPageChange: (page: number) => void;
  totalTasks: number;
}

const MainContentTask: FC<MainContentTaskProps> = ({ tasks, onPageChange, totalTasks }) => {
  const renderTask = (tasks: Task[]): JSX.Element[] => {
    return tasks.map((task) => <Task key={task.id} task={task} />);
  };

  return (
    <div className="main-content-task">
      {renderTask(tasks)}
      <Pagination
        total={totalTasks}
        pageSize={12}
        onChange={onPageChange}
        showSizeChanger={false}
      />
    </div>
  );
};

export default MainContentTask;
