import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function StudentForm() {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const [oldName, setOldName] = useState(null);                     // store original name for PUT

 
  useEffect(() => {
    if (location.state && location.state.student) {                    // Prefill form if editing
      const { student } = location.state;
      setName(student.name);
      setMarks(student.marks);
      setOldName(student.name);                                         // keep old name separately
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentData = {
      name: name,
      marks: parseInt(marks)
    };

    if (oldName) {
      
      axios.put(`http://localhost:8080/students/byName/${oldName}`, studentData)   // Update student (PUT with old name in URL)
        .then(() => navigate("/"))
        .catch((err) => console.error("Error updating student:", err));
    } else {
      
      axios.post("http://localhost:8080/students", studentData)               // Add student (POST)
        .then(() => navigate("/"))
        .catch((err) => console.error("Error adding student:", err));
    }
  };

  return (
    <div>
      <h2>{oldName ? "Edit Student" : "Add Student"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Marks: </label>
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
          />
        </div>

        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
}

export default StudentForm;

