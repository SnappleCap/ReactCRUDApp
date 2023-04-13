import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Students from 
    "./Components";
import CreateStudent from 
    "./Components/createStudent";
import EditStudent from
    "./Components/editStudent";
import StudentView from
    "./Components/studentView";
import Classes from 
    "./Components/classes";
import CreateClass from
    "./Components/createClass";
import EditClass from
    "./Components/editClass";
import ClassView from
    "./Components/classView";

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { schoolClasses: "", students: "" };
  }

  componentDidMount() {
    fetch('http://localhost:9000/classes')
      .then(response => response.json())
      .then(schoolClasses => this.setState({ schoolClasses }));
    fetch('http://localhost:9000/students')
      .then(response => response.json())
      .then(students => this.setState({ students }));
  }

  render() {
    var schoolClassData = Array.from(this.state.schoolClasses);
    var studentData = Array.from(this.state.students);

    return (
      <Router>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/createstudent" state={{ schoolClasses: schoolClassData }}>Create Student</Link></li>
            <li><Link to="/classes">View Classes</Link></li>
            <li><Link to="/createclass" state={{ students: studentData }}>Create Class</Link></li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Students />} />
          <Route exact path="/createstudent" element={<CreateStudent />} />
          <Route exact path="/editstudent" element={<EditStudent />} />
          <Route exact path="/studentview" element={<StudentView />} />
          <Route exact path="/classes" element={<Classes />} />
          <Route exact path="/createclass" element={<CreateClass />} />
          <Route exact path="/editclass" element={<EditClass />} />
          <Route exact path="/classview" element={<ClassView />} />
        </Routes>
      </Router>
    )
   }
}

export default App;