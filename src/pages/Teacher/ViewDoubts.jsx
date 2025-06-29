import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const dummyDoubts = [
  {
    id: 1,
    student: 'Ankita Sharma',
    question: 'Can you explain normalization in DBMS?',
    submittedAt: '2025-06-25 10:30 AM',
  },
  {
    id: 2,
    student: 'Rahul Patil',
    question: 'What is the difference between GET and POST in HTTP?',
    submittedAt: '2025-06-26 2:45 PM',
  },
  {
    id: 3,
    student: 'Sneha Raut',
    question: 'How to implement pagination in MongoDB?',
    submittedAt: '2025-06-27 11:15 AM',
  },
];

const ViewDoubts = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
        <FaQuestionCircle /> Student Doubts
      </h2>

      <div className="grid gap-4">
        {dummyDoubts.length === 0 ? (
          <p className="text-gray-600 text-center">No doubts submitted yet.</p>
        ) : (
          dummyDoubts.map((doubt) => (
            <div key={doubt.id} className="bg-white p-4 rounded-xl shadow-md">
              <p className="text-lg font-semibold text-gray-800">{doubt.question}</p>
              <p className="text-sm text-gray-500 mt-1">From: {doubt.student}</p>
              <p className="text-sm text-gray-400">Submitted at: {doubt.submittedAt}</p>
              <div className="mt-3">
                <button className="px-4 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700">
                  Reply
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewDoubts;
