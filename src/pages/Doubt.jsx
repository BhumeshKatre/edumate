import React, { useState } from "react";

const Doubt = () => {
  const [doubt, setDoubt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (doubt.trim()) {
      alert("Your doubt has been submitted! ✅");
      setDoubt("");
    }
  };

  return (
    <div className="min-h-screen py-10 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">
          🤔 Ask a Doubt
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-6 space-y-4"
        >
          <label className="block text-gray-700 font-semibold">
            Write your doubt below:
          </label>
          <textarea
            value={doubt}
            onChange={(e) => setDoubt(e.target.value)}
            rows={5}
            placeholder="Eg: I don't understand how recursion works in C..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition"
          >
            Submit Doubt
          </button>
        </form>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📌 Common Doubts</h2>
          <ul className="space-y-3">
            <li className="bg-white shadow p-4 rounded-lg border-l-4 border-yellow-400">
              <strong>Q:</strong> What is the difference between C and C++?
            </li>
            <li className="bg-white shadow p-4 rounded-lg border-l-4 border-green-400">
              <strong>Q:</strong> How to prepare for BCA semester exams effectively?
            </li>
            <li className="bg-white shadow p-4 rounded-lg border-l-4 border-blue-400">
              <strong>Q:</strong> Why is understanding data structures important?
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Doubt;
