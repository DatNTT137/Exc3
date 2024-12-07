import React, { useEffect, useState } from "react";
import MainContentTask from "../../components/MainContentTask";
import { useDispatch, useSelector } from "react-redux";
import { actfetchAllTask } from "../../redux/features/tasks/taskSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { Spin } from "antd";

const AllTasks: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, tasks } = useSelector((state: RootState) => state.task);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(actfetchAllTask());
  }, [dispatch]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <Spin />;
  }

  return (
    <div>
      {tasks.length === 0 ? (
        <div>No Task</div>
      ) : (
        <MainContentTask
          tasks={tasks}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          totalTasks={tasks.length}
        />
      )}
    </div>
  );
};

export default AllTasks;
