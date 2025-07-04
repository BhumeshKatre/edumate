import React from 'react';
import { students } from '../../utils/Data';

const ViewStudents = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">🎓 All Students</h2>

      <div className="space-y-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-4">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-12 h-12 rounded-full border"
              />
              <div>
                <p className="font-semibold text-gray-800">{student.name}</p>
                <p className="text-sm text-gray-600">{student.email}</p>
                <p className="text-xs text-gray-500">{student.profile}</p>
              </div>
            </div>
            <button className="text-red-500 hover:underline text-sm">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewStudents;
