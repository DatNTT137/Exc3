import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { filterTasksByStatus } from "../../redux/features/tasks/taskSlice";
import Task from "../../components/Task";

const DoneTasks: FC = () => {
  const dispatch = useDispatch();
  const filteredTasks = useSelector((state: RootState) => state.task.filteredTasks);

  useEffect(() => {
    dispatch(filterTasksByStatus("DONE"));
  }, [dispatch]);

  return (
    <div>
      <h1>Done Tasks</h1>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};


export default DoneTasks;
