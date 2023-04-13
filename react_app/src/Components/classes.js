import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Router, Routes,
    Route, Link } from "react-router-dom";

class Classes extends Component {

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

    const deleteClass = async (id) => {
      fetch(`http://localhost:9000/deleteClass/${id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(() => {
            window.location.reload();
        });
    }

    return (
      <div>
        <h2>Classes</h2>
        <ul>
          {schoolClassData.map(schoolClass => (
            <li key={schoolClass.id}>{schoolClass.title} <Link to="/classView" state={{ id: schoolClass.id, fullTitle: schoolClass.title, students: studentData }}>(View)</Link> <Link to="/editClass" state={{ id: schoolClass.id, fullTitle: schoolClass.title, students: studentData }}>(Edit)</Link> <a href="#" onClick={() => deleteClass(schoolClass.id)}>(Delete)</a></li>
          ))}
        </ul>
      </div>
    )
   }
}

export default Classes;