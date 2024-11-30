import React from "react";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import AddNewTask from "./pages/AddNewTask";
import DoneTasks from "./pages/DoneTasks";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTE } from "./constants/routes";
import AllTasks from "./pages/AllTasks";
import NewTasks from "./pages/NewTasks";
import DoingTasks from "./pages/DoingTasks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout></MainLayout>}>
          <Route index element={<AllTasks></AllTasks>}></Route>
          <Route path={ROUTE.ALL_TASK} element={<AllTasks></AllTasks>}></Route>
          <Route path={ROUTE.NEW_TASK} element={<NewTasks></NewTasks>}></Route>
          <Route path={ROUTE.DOING_TASK} element={<DoingTasks></DoingTasks>}></Route>
          <Route path={ROUTE.DONE_TASK} element={<DoneTasks></DoneTasks>}></Route>
          </Route>
          <Route path={"/"} element={<Navigate to={ROUTE.ALL_TASK}></Navigate>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
