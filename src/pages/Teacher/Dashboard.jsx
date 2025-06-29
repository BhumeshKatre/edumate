import React from 'react';
import { FaUsers, FaBook, FaFilePdf, FaChalkboardTeacher } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">👋 Welcome Admin</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Students */}
        <div className="bg-white p-5 rounded-xl shadow border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Students</p>
              <h3 className="text-xl font-semibold text-gray-800">120</h3>
            </div>
            <FaUsers className="text-3xl text-blue-500" />
          </div>
        </div>

        {/* Teachers */}
        <div className="bg-white p-5 rounded-xl shadow border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Teachers</p>
              <h3 className="text-xl font-semibold text-gray-800">10</h3>
            </div>
            <FaChalkboardTeacher className="text-3xl text-green-500" />
          </div>
        </div>

        {/* Notes */}
        <div className="bg-white p-5 rounded-xl shadow border-l-4 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Notes</p>
              <h3 className="text-xl font-semibold text-gray-800">75</h3>
            </div>
            <FaFilePdf className="text-3xl text-yellow-500" />
          </div>
        </div>

        {/* Subjects */}
        <div className="bg-white p-5 rounded-xl shadow border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Subjects Offered</p>
              <h3 className="text-xl font-semibold text-gray-800">30+</h3>
            </div>
            <FaBook className="text-3xl text-purple-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
