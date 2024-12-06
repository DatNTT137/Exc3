import React from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import DoneTasks from "./pages/DoneTasks";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTE } from "./constants/routes";
import AllTasks from "./pages/AllTasks";
import NewTasks from "./pages/NewTasks";
import DoingTasks from "./pages/DoingTasks";
import AddNewTask from "./pages/AddNewTask";
import UpdateTask from "./pages/UpdateTask";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<AllTasks />} />
            <Route path={ROUTE.ALL_TASK} element={<AllTasks />} />
            <Route path={ROUTE.UPDATE_TASK} element={<UpdateTask />} />
            <Route path={ROUTE.NEW_TASK} element={<NewTasks />} />
            <Route path={ROUTE.DOING_TASK} element={<DoingTasks />} />
            <Route path={ROUTE.DONE_TASK} element={<DoneTasks />} />
            <Route path={ROUTE.ADD_NEW} element={<AddNewTask />} />
          </Route>
          <Route path="/" element={<Navigate to={ROUTE.ALL_TASK} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
