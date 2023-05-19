import React, { useState } from 'react'
import './CreateEventPage.css'


const CreateEventPage = () => {

  const [eventType, setEventType] = React.useState('option1'); //set the first option as defult
  const [eventTitle, setEventTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [AuthorIsParticipant, setAuthorIsParticipant] = React.useState(true);

  //TODO- send request and return the connected user (i dont know if its right Syntax)
  const getConectedUser = async () => {
    // const response = await axios.post("http://localhost:3000/auth/connecteduser", {
    //     user: user
    // })
  }

  const handleEventTitleChange = (event) => {
    setEventTitle(event.target.value);
  }

  const handleOptionChange = (event) => {
    setEventType(event.target.value);
  }

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleCheckboxChange = () => {
    setAuthorIsParticipant(!AuthorIsParticipant);
  };

  const handleCreateEventClicked = async () => {
   
    const response = await axios.post("http://localhost:3000/auth/createevent", {
         eventType: eventType,
         eventTitle: eventTitle,
         content: content,
         startDate: startDate,
         endDate: endDate,
         AuthorIsParticipant:AuthorIsParticipant

  });
}

  return (
    <div className="createevent-container">

      <div className="createevent-form">
        <h1 id="create-event-title">Create Event</h1>
        
        <form>
          <div className="author form-group">
            <label className="textfield-lab" htmlFor="author">Author: </label>
            <label className="login-lab" htmlFor="author">{getConectedUser}</label>
          </div>

          <div className="event-type form-group">
            <label className="textfield-lab" htmlFor="event-type">Event Type: </label>
            <select className="text-field" value={eventType} onChange={handleOptionChange}>
              <option value="option1">Social</option>
              <option value="option2">Volunteer</option>
              <option value="option3">Contribution</option>
            </select>
          </div>

          <div className="event-title form-group">
            <label className="textfield-lab" htmlFor="event-title">Title </label>
            <input className="text-field" value={eventTitle} onChange={handleEventTitleChange} />
          </div>

          <div className="event-content form-group">
            <label className="textfield-lab" htmlFor="facebookuser">Content: </label>
            <textarea className="text-field content" value={content} onChange={handleContentChange} />
          </div>

          <div className="start-date form-group">
            <label className="textfield-lab" htmlFor="start-date">Start Date: </label>
            <input className="text-field" type="date" value={startDate} onChange={handleStartDateChange} />
          </div>

          <div className="end-date form-group">
            <label className="textfield-lab" htmlFor="start-date">End Date: </label>
            <input className="text-field" type="date" value={endDate} onChange={handleEndDateChange} />
          </div>

          <div className="participants form-group">
            <label className="textfield-lab" htmlFor="password">I am participant in the event:</label>
            <input className="text-field" type="checkbox" checked={AuthorIsParticipant} onChange={handleCheckboxChange} />
          </div>

          <button class="btn create-event-btn " onClick={handleCreateEventClicked}>Create Event</button>
        </form>
      </div>
    </div>
  )
}

export default CreateEventPage
