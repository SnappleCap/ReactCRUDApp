import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Router, Routes,
    Route, Link } from "react-router-dom";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { students: "", schoolClasses: "" };
  }

  componentDidMount() {
    fetch('http://localhost:9000/students')
      .then(response => response.json())
      .then(students => this.setState({ students }));
    fetch('http://localhost:9000/classes')
      .then(response => response.json())
      .then(schoolClasses => this.setState({ schoolClasses }));
  }

  render() {
    var studentData = Array.from(this.state.students);
    var schoolClassData = Array.from(this.state.schoolClasses);

    const deleteStudent = async (id) => {
      fetch(`http://localhost:9000/deleteStudent/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(() => {
            window.location.reload();
        });
    }

    return (
      <div>
        <h2>Students</h2>
        <ul>
          {studentData.map(student => (
            <li key={student.id}>{student.name} <Link to="/studentView" state={{ id: student.id, fullName: student.name, schoolClasses: schoolClassData }}>(View)</Link> <Link to="/editStudent" state={{ id: student.id, fullName: student.name, schoolClasses: schoolClassData }}>(Edit)</Link> <a href="#" onClick={() => deleteStudent(student.id)}>(Delete)</a></li>
          ))}
        </ul>
      </div>
    )
   }
}

export default App;