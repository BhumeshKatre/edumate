import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [role, setRole] = useState("Student");
  const [form, setForm] = useState({ studentId: "", password: "" });

  const { user } = useAuth()


  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setForm({ studentId: "", password: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    // Handle login logic here
    alert(`Logging in as ${role} with ID: ${form.studentId}`);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="bg-white border border-blue-400 p-5 rounded-lg w-90">
        <div className=" flex mb-4">
          <button
            className={`p-2 flex-1 ${role === "Teacher" ? "bg-blue-200" : "bg-blue-50"}`}
            onClick={() => handleRoleChange("Teacher")}
            type="button"
          >
            Teacher
          </button>
          <button
            className={`p-2 flex-1 ${role === "Student" ? "bg-blue-200" : "bg-blue-50"}`}
            onClick={() => handleRoleChange("Student")}
            type="button"
          >
            Student
          </button>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold">Welcome on EduMate</h2>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-3">
              <label htmlFor="studentId">
                {role === "Teacher" ? "Enter Teacher Id Here" : "Enter Student Id Here"}
              </label>
              <input
                className="border-blue-200 border p-2 rounded-lg"
                type="text"
                name="studentId"
                id="studentId"
                placeholder={role === "Teacher" ? "TEA-XXXX-XXXX" : "STU-4546-4534-2343"}
                value={form.studentId}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col mb-3">
              <label htmlFor="password">Password</label>
              <input
                className="border-blue-200 border p-2 rounded-lg"
                placeholder="********"
                type="password"
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <button
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
