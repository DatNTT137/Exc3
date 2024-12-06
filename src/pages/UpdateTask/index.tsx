import React, { useEffect } from "react";
import TaskForm from "../../components/TaskForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actFetchById } from "../../redux/features/tasks/taskSlice";
import { AppDispatch, RootState } from "../../redux/store";

const UpdateTask: React.FC = () => {
  
  const { id } = useParams<{ id: string }>(); // Lấy ID từ URL
  const dispatch = useDispatch<AppDispatch>();
  const task = useSelector((state: RootState) => state.task.currentTask); // Lấy currentTask từ Redux

  // Lấy thông tin task khi component được render
  useEffect(() => {
    if (id) {
      dispatch(actFetchById(id)); // Gọi API để lấy thông tin task theo ID
    }
  }, [id, dispatch]);

  // Nếu đang tải dữ liệu, hiển thị loading
  if (!task) {
    return <div>Loading...</div>;
  }

  // Nếu task đã có, hiển thị form để chỉnh sửa
  return (
    <div>
      <TaskForm isEdit={true} currentTask={task} /> {/* Truyền task vào form */}
    </div>
  );
};

export default UpdateTask;
