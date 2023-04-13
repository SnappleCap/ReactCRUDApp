import React, { Component, useState } from 'react';
import { useLocation } from 'react-router-dom';

const CreateStudent = () => {

  const location = useLocation()
  const { schoolClasses } = location.state

  const [name, setName] = useState('')
  const [schoolClass, setSchoolClass] = useState('')

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      console.log("schoolClass: " + schoolClass);
      const body = { name, schoolClass }
      await fetch(`http://localhost:9000/addStudent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      .then(() => {
        alert("Student successfully created!");
      })
    } catch (error) {
      console.error(error)
      alert("Error!");
    }
  }

    return (

      <form
        onSubmit={submitData}>

        <h1>Add New Student</h1>

        <label>Student Name</label>
        <input style={{display: 'block'}}
          autoFocus
          onChange={e => setName(e.target.value)}
          placeholder="Name"
          type="text"
          value={name}
        />

        <br/>
        <label>Select Classes</label>
        <select style={{display: 'block'}} name="schoolClass" multiple={true} onChange={e => setSchoolClass(Array.from(e.target.selectedOptions, option => option.value))} id="schoolClass">
            <option disabled selected value>CTRL + SHIFT to select multiple classes</option>
          {schoolClasses.map(schoolClass => (
            <option value={schoolClass.id}>{schoolClass.title}</option>
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

export default CreateStudent;