import React, { useState } from "react";

const AddNote = () => {
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);
  const [notes, setNotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!semester || !subject || !file) {
      alert("Please fill all fields!");
      return;
    }

    const newNote = {
      semester,
      subject,
      fileName: file.name,
      fileURL: URL.createObjectURL(file), 
    };

    setNotes([...notes, newNote]);

    // Clear form
    setSemester("");
    setSubject("");
    setFile(null);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">📤 Add New Note</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Semester</label>
          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="w-full border p-2 rounded"
          >
            <option value="">Select Semester</option>
            <option value="Semester 1">Semester 1</option>
            <option value="Semester 2">Semester 2</option>
            <option value="Semester 3">Semester 3</option>
            <option value="Semester 4">Semester 4</option>
            <option value="Semester 5">Semester 5</option>
            <option value="Semester 6">Semester 6</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border p-2 rounded"
            placeholder="Enter subject name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Upload PDF</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add Note
        </button>
      </form>

      {/* Preview uploaded notes */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Uploaded Notes</h3>
        <ul className="space-y-2">
          {notes.map((note, index) => (
            <li key={index} className="p-3 bg-gray-100 rounded">
              <p className="font-medium">{note.subject} ({note.semester})</p>
              <a
                href={note.fileURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm"
              >
                View PDF
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddNote;
