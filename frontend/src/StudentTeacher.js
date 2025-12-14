import React, { useState } from "react";

function StudentTeacher() {
  const [result, setResult] = useState("");

  const getStudents = () => {
    fetch("http://localhost:5000/students")
      .then(res => res.text())
      .then(data => setResult(data));
  };

  const getStudentDetails = () => {
    fetch("http://localhost:5000/students/details")
      .then(res => res.text())
      .then(data => setResult(data));
  };

  const getTeachers = () => {
    fetch("http://localhost:5000/teachers")
      .then(res => res.text()) 
      .then(data => setResult(data));
  };

  const getTeacherDetails = () => {
    fetch("http://localhost:5000/teachers/details")
      .then(res => res.text())
      .then(data => setResult(data));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <button onClick={getStudents}>All Students</button>
      <button onClick={getStudentDetails}>Student Details</button>
      <br /><br />
      <button onClick={getTeachers}>All Teachers</button>
      <button onClick={getTeacherDetails}>Teacher Details</button>

      <h3>{result}</h3>
    </div>
  );
}

export default StudentTeacher;
