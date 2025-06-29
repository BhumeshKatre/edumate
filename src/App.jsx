import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentMainLayout from "./layout/StudentMainLayout";
import Notes from "./pages/Notes";
import MockTest from "./pages/MockTest";
import Doubt from "./pages/Doubt";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectComponents from "./components/ProtectComponents";
import TeacherLayout from "./layout/TeacherLayout";
import AddNotes from "./pages/Teacher/AddNotes";
import AddMockTest from "./pages/Teacher/AddMockTest";
import AddStudents from "./pages/Teacher/AddStudents";
import ViewDoubts from "./pages/Teacher/ViewDoubts";
import ViewStudents from "./pages/Teacher/ViewStudents";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />

      <Route path="/" element={<StudentMainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="notes" element={<Notes />} />
        <Route path="mocktest" element={<MockTest />} />
        <Route path="ask-doubt" element={<Doubt />} />
      </Route>

      <Route path="/teacher" element={<TeacherLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="add-notes" element={<AddNotes />} />
        <Route path="add-mocttest" element={<AddMockTest />} />
        <Route path="add-student" element={<AddStudents />} />
        <Route path="View-students" element={<ViewStudents />} />
        <Route path="View-doubts" element={<ViewDoubts />} />
      </Route>
    </Routes>
  );
};

export default App;
