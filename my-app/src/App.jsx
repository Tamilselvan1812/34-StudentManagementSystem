import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentTable/>} />
          <Route path="/addStudent" element={<StudentForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
