import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setstudents] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:8080/hii")                        // Spring Boot API
    
      .then((res) => {
        setstudents(res.data);                                    
      })
      .catch((err) => {
        console.error("Error fetching data");
      });
  }, []);

  return (
    <div >
      

    <table>
        <thead border="1">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
          <tr>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
