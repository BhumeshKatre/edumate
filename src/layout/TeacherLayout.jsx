import React from 'react';

const TeacherLayout = () => {
  return (
    <>
      <Navbar />
      <div className="px-10 py-5 min-h-screen ">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default TeacherLayout;
