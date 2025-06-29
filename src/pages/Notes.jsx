import React from "react";

const bcaSem1Notes = [
  {
    subject: "Computer Fundamentals",
    thumbnail: "", // Add image URL if available
  },
  {
    subject: "Mathematics",
    thumbnail: "",
  },
  {
    subject: "Digital Electronics",
    thumbnail: "",
  },
  {
    subject: "C Programming",
    thumbnail: "",
  },
  {
    subject: "Communication Skills",
    thumbnail: "",
  },
];

const Notes = () => {
  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <div className=" px-4">
        <h1 className="text-3xl font-bold text-center mb-10 text-blue-700">
          📘 OUR NOTES
        </h1>

        <div className=" p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Semister-I</h2>

          <div className="flex gap-3 flex-wrap">

            {
              bcaSem1Notes.map((note, indx) => (
                <div className="flex ">
                  <div>
                    <img src={note?.thumbnail} alt="" />
                  </div>
                  <div>
                    <p>{note.subject}</p>
                    <div>
                      <Link>View</Link>v
                      <Link>Download</Link>v
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
