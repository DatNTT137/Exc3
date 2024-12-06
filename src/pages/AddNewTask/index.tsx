import React, { FC } from "react";
import TaskForm from "../../components/TaskForm";


const AddNewTask: FC = () => {
  return (
    <div>
      <TaskForm isEdit={false} currentTask={undefined} />
    </div>
  );
};

export default AddNewTask;
