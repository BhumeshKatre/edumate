import React from "react";
import ProgressTracker from "../components/ProgressTracker";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const quickLinks = [
    { label: "My Courses", href: "/courses" },
    { label: "Assignments", href: "/assignments" },
    { label: "Notes", href: "/notes" },
    { label: "Profile", href: "/profile" },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-2 ">Welcome to your Dashboard!</h1>
      <ProgressTracker />
      <div className="py-5 flex flex-col  gap-4 border-t mt-5 border-gray-300 ">
        <h1 className="text-2xl font-semibold mb-4 ">Annocement!</h1>

        <div
          className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4"
          role="alert"
        >
          <p className="font-bold">Latest Announcement</p>
          <p>📢 New BCA C language notes have been added!</p>
          <p className="text-xs mt-2 text-gray-500">Posted: June 10, 2024</p>
        </div>

        <div
          className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4"
          role="alert"
        >
          <p className="font-bold">Latest Announcement</p>
          <p>📢 New BCA C language notes have been added!</p>
          <p className="text-xs mt-2 text-gray-500">Posted: June 10, 2024</p>
        </div>

        <div className="py-5 border-t mt-5 border-gray-300 ">
          <h2 className="font-semibold text-xl">Quick Links</h2>
          <div className="py-5 ">
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-4 py-2 rounded bg-gray-300 text-gray-500 hover:bg-gray-600 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
