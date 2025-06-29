import React from "react";
import { Link } from "react-router-dom";

const mockTests = [
  { subject: "Computer Fundamentals", duration: "30 mins", questions: 20 },
  { subject: "Mathematics", duration: "45 mins", questions: 25 },
  { subject: "Digital Electronics", duration: "40 mins", questions: 20 },
  { subject: "C Programming", duration: "35 mins", questions: 25 },
  { subject: "Communication Skills", duration: "30 mins", questions: 15 },
];

const MockTest = () => {
  return (
    <div className=" py-10 bg-gray-50">
      <div className=" px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-purple-700">
          🎯 Mock Tests
        </h1>

        <div className="space-y-6">
          {mockTests.map((test, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {test.subject}
                </h2>
                <p className="text-sm text-gray-600">
                  Duration: {test.duration} | Questions: {test.questions}
                </p>
              </div>
              <Link
                to={`/mocktest/${test.subject.toLowerCase().replace(/\s/g, "-")}`}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
              >
                Start Test
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MockTest;
