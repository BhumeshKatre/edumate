import React from "react";
import Nvabar from "../components/teacher/Nvabar";
import { Outlet } from "react-router-dom";

const TeacherLayout = () => {
  return (
    <>
      <div className="flex">
        <div className="">
          <Nvabar />
        </div>
        <div className="p-5 flex-1 h-screen overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default TeacherLayout;
