import React from 'react';
import { FaChalkboardTeacher, FaUsers, FaBook, FaSignOutAlt, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nvabar = () => {
  const navLinks = [
    { to: "/teacher/dashboard", icon: <FaHome />, label: "Dashboard" },
    { to: "/teacher/add-notes", icon: <FaBook />, label: "Add Notes" },
    { to: "/teacher/add-mocktest", icon: <FaBook />, label: "Add MockTest" },
    { to: "/teacher/add-student", icon: <FaUsers />, label: "Add Student" },
    { to: "/teacher/view-students", icon: <FaUsers />, label: "View Students" },
    { to: "/teacher/view-doubts", icon: <FaBook />, label: "View Doubts" },
  ];

  return (
    <div className="w-64 bg-blue-600 text-white p-4 h-screen flex flex-col">
      <div className="mb-8 flex items-center space-x-2">
        <FaChalkboardTeacher size={28} />
        <span className="text-2xl font-bold">EduMate Admin</span>
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          {navLinks.map(({ to, icon, label }) => (
            <Link
              key={label}
              to={to}
              className="flex items-center space-x-3 hover:bg-blue-700 rounded px-3 py-2 cursor-pointer"
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <button className="flex items-center space-x-2 w-full hover:bg-blue-700 rounded px-3 py-2">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Nvabar;
