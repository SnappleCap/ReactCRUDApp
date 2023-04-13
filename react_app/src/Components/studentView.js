import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Router, Routes,
    Route, Link, useLocation } from "react-router-dom";

function withLocation(Component) {
  return props => <Component {...props} location={useLocation()} />;
}

class StudentView extends Component {

  constructor(props) {
    super(props);
    this.state = { studentInfo: "", schoolClasses: "", fullName: "" };
  }

  componentDidMount() {
    const { id, schoolClasses } = this.props.location.state;
    fetch(`http://localhost:9000/viewStudent/${id}`, { method: 'GET' })
        .then(response => response.json())
        .then(studentInfo => this.setState({ studentInfo }));
  }

  render() {
    var studentData = Array.from(this.state.studentInfo);
    const { fullName } = this.props.location.state;
    //schoolClassData[schoolClassData.findIndex(o => o.id === schoolClass.schoolClassId)].title

    return (
      <div>
        <h2>{fullName}'s Classes</h2>
          {studentData.map(student => (<ul>{student.schoolClasses.map(schoolClass => (<li>{Object.values(schoolClass)[0]['title']}</li>))}</ul>))}
      </div>
    )
   }
}

export default withLocation(StudentView);