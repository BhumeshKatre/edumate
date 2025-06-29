import React from "react";
import { MdOutlineDownload } from "react-icons/md";
import { Link } from "react-router-dom";
import { bcaNotes } from "../utils/Data";


const Notes = () => {
  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10 text-blue-700">
          📘 OUR NOTES
        </h1>

        {bcaNotes.map((semester, i) => (
          <div key={i} className="mb-12 border-t border-blue-500 py-5">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">{semester.semester}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {semester.subjects.map((subj, j) => (
                <div
                  key={j}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <div className="w-full h-32 bg-gray-100 rounded-md mb-4 flex items-center justify-center text-gray-400">
                    {subj.thumbnail ? (
                      <img
                        src={subj.thumbnail}
                        alt={subj.subject}
                        className="w-full h-full object-cover rounded-md"
                      />
                    ) : (
                      "No Image"
                    )}
                  </div>

                  <p className="text-lg font-medium text-gray-700 mb-4">
                    {subj.subject}
                  </p>

                  <div className="flex justify-between items-center gap-3">
                    <Link
                      to={subj.noteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" py-2 "
                    >
                      View
                    </Link>
                    <Link
                      href={subj.noteLink}
                      download
                      className=" "
                    >
                      <MdOutlineDownload className="text-xl hover-bg-gray-400"/>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
