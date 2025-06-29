import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { to: "/", label: "Dashboard" },
    { to: "/notes", label: "Notes" },
    { to: "/mocktest", label: "Mock Test" },
    { to: "/ask-doubt", label: "Ask Doubt" }
  ];

  return (
    <header className="p-3 bodrer-b border-gray-200 shadow-md bg-white flex justify-between items-center ">
      <img
        className="w-40 "
        src={logo}
        alt="Logo"
      />

      <nav className="flex gap-8">
        <div className=" hidden md:flex gap-4 items-center ">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-700"
              }
            >
              {link.label}
            </NavLink>
          ))}

        </div>
        <div className="flex items-center gap-4 ">
          <button aria-label="Notifications">
            <FaBell size={22} />
          </button>
          <button aria-label="Profile">
            <FaUserCircle size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
