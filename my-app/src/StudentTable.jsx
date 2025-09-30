import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentTable() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = () => {
    axios.get("http://localhost:8080/")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log("Error fetching students", err));
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleDeleteByName = (name) => {
    axios.delete(`http://localhost:8080/students/byName/${name}`)
      .then(() => fetchStudents())
      .catch((err) => console.log("Error deleting student", err));
  };

  const handleEditByName = (student) => {
    
    navigate("/addStudent", { state: { student } });                   // Navigate to StudentForm and pass student object as state
  };

  return (
    <div>
      <h2>Student List</h2>
      <button type="button" onClick={() => navigate("/addStudent")}>Add Student</button>

      <table border="1">
        <thead>
          <tr>
            
            <th>Name</th>
             <th>Age</th>
            <th>Marks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
             
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.marks}</td>
              <td>
                <button type="button" onClick={() => handleDeleteByName(s.name)}>Delete</button>
                <button type="button" onClick={() => handleEditByName(s)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
