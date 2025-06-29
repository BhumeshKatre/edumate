import React from "react";
import { MdOutlineDownload } from "react-icons/md";
import { Link } from "react-router-dom";


const bcaNotes = [
  {
    semester: "Semester 6",
    subjects: [
      { subject: "Machine Learning", thumbnail: "", noteLink: "/notes/bca-sem6.pdf" },
      { subject: "Big Data", thumbnail: "", noteLink: "/notes/bca-sem6.pdf" },
      { subject: "Internet of Things", thumbnail: "", noteLink: "/notes/bca-sem6.pdf" },
      { subject: "Final Project", thumbnail: "", noteLink: "/notes/bca-sem6.pdf" },
      { subject: "Seminar/Internship", thumbnail: "", noteLink: "/notes/bca-sem6.pdf" },
    ],
  },
  {
    semester: "Semester 5",
    subjects: [
      { subject: "Mobile App Development", thumbnail: "", noteLink: "/notes/bca-sem5.pdf" },
      { subject: "Cloud Computing", thumbnail: "", noteLink: "/notes/bca-sem5.pdf" },
      { subject: "Artificial Intelligence", thumbnail: "", noteLink: "/notes/bca-sem5.pdf" },
      { subject: "Cyber Security", thumbnail: "", noteLink: "/notes/bca-sem5.pdf" },
      { subject: "Mini Project", thumbnail: "", noteLink: "/notes/bca-sem5.pdf" },
    ],
  },
  {
    semester: "Semester 4",
    subjects: [
      { subject: "Java Programming", thumbnail: "", noteLink: "/notes/bca-sem4.pdf" },
      { subject: "Computer Graphics", thumbnail: "", noteLink: "/notes/bca-sem4.pdf" },
      { subject: "E-Commerce", thumbnail: "", noteLink: "/notes/bca-sem4.pdf" },
      { subject: "Data Communication", thumbnail: "", noteLink: "/notes/bca-sem4.pdf" },
      { subject: "Quantitative Techniques", thumbnail: "", noteLink: "/notes/bca-sem4.pdf" },
    ],
  },
  {
    semester: "Semester 3",
    subjects: [
      { subject: "Computer Networks", thumbnail: "", noteLink: "/notes/bca-sem3.pdf" },
      { subject: "Operating Systems", thumbnail: "", noteLink: "/notes/bca-sem3.pdf" },
      { subject: "Software Engineering", thumbnail: "", noteLink: "/notes/bca-sem3.pdf" },
      { subject: "Web Technology", thumbnail: "", noteLink: "/notes/bca-sem3.pdf" },
      { subject: "Python Programming", thumbnail: "", noteLink: "/notes/bca-sem3.pdf" },
    ],
  },
  {
    semester: "Semester 2",
    subjects: [
      { subject: "Data Structures", thumbnail: "", noteLink: "/notes/bca-sem2.pdf" },
      { subject: "Discrete Mathematics", thumbnail: "", noteLink: "/notes/bca-sem2.pdf" },
      { subject: "OOP in C++", thumbnail: "", noteLink: "/notes/bca-sem2.pdf" },
      { subject: "Database Management Systems", thumbnail: "", noteLink: "/notes/bca-sem2.pdf" },
      { subject: "Environmental Studies", thumbnail: "", noteLink: "/notes/bca-sem2.pdf" },
    ],
  },
  {
    semester: "Semester 1",
    subjects: [
      { subject: "Computer Fundamentals", thumbnail: "", noteLink: "/notes/bca-sem1.pdf" },
      { subject: "Mathematics", thumbnail: "", noteLink: "/notes/bca-sem1.pdf" },
      { subject: "Digital Electronics", thumbnail: "", noteLink: "/notes/bca-sem1.pdf" },
      { subject: "C Programming", thumbnail: "", noteLink: "/notes/bca-sem1.pdf" },
      { subject: "Communication Skills", thumbnail: "", noteLink: "/notes/bca-sem1.pdf" },
    ],
  },
];

const Notes = () => {
  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10 text-blue-700">
          📘 OUR NOTES
        </h1>

        {bcaNotes.map((semester, i) => (
          <div key={i} className="mb-12">
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
