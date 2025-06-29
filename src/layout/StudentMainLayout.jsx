import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const StudentMainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="px-10 py-5 min-h-screen ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default StudentMainLayout;
