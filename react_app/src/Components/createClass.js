import React, { Component, useState } from 'react';
import { useLocation } from 'react-router-dom';

const CreateClass = () => {

  const location = useLocation()
  const { students } = location.state

  const [title, setTitle] = useState('')
  const [student, setStudent] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      console.log("student: " + student);
      const body = { title, student }
      await fetch(`http://localhost:9000/addClass`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      .then(() => {
        alert("Class successfully created!");
      })
    } catch (error) {
      console.error(error)
      alert("Error!");
    }
  }

    return (

      <form
        onSubmit={submitData}>

        <h1>Add New Class</h1>

        <label>Class Title</label>
        <input style={{display: 'block'}}
          autoFocus
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />

        <br/>
        <label>Select Students</label>
        <select style={{display: 'block'}} name="student" multiple={true} onChange={e => setStudent(Array.from(e.target.selectedOptions, option => option.value))} id="student">
            <option disabled selected value>CTRL + SHIFT to select multiple students</option>
          {students.map(student => (
            <option value={student.id}>{student.name}</option>
          ))}
        </select>

        <br/>
        <input style={{display: 'block'}}
          type="submit"
          value="Submit"
        />
      </form>
    )
   
}

export default CreateClass;