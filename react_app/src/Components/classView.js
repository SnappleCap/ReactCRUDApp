import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Router, Routes,
    Route, Link, useLocation } from "react-router-dom";

function withLocation(Component) {
  return props => <Component {...props} location={useLocation()} />;
}

class ClassView extends Component {

  constructor(props) {
    super(props);
    this.state = { classInfo: "", students: "", fullTitle: "" };
  }

  componentDidMount() {
    const { id, students } = this.props.location.state;
    fetch(`http://localhost:9000/viewClass/${id}`, { method: 'GET' })
        .then(response => response.json())
        .then(classInfo => this.setState({ classInfo }));
  }

  render() {
    var classData = Array.from(this.state.classInfo);
    const { fullTitle } = this.props.location.state;

    return (
      <div>
        <h2>Students Enrolled in {fullTitle}</h2>
          {classData.map(schoolClass => (<ul>{schoolClass.students.map(student => (<li>{Object.values(student)[0]['name']}</li>))}</ul>))}
      </div>
    )
   }
}

export default withLocation(ClassView);