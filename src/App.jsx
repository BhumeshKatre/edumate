import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentMainLayout from "./layout/StudentMainLayout";
import Notes from "./pages/Notes";
import MockTest from "./pages/MockTest";
import Doubt from "./pages/Doubt";
import Dashboard from "./pages/Dashboard";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StudentMainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/mocktest" element={<MockTest />} />
        <Route path="/ask-doubt" element={<Doubt />} />
      </Route>
    </Routes>
  );
};

export default App;
