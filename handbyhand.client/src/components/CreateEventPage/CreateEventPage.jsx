import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import './CreateEventPage.css'

axios.defaults.withCredentials = true

const CreateEventPage = () => {
  const [eventType, setEventType] = useState('Social'); //set the first option as defult
  const [eventTitle, setEventTitle] = useState('');
  const [content, setContent] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [AuthorIsParticipant, setAuthorIsParticipant] = useState(true);

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

  const navigate = useNavigate();
  const handleCreateEventClicked = async (e) => {
    try {
      e.preventDefault()
      console.log("hiiii ")
      const response = await axios.post('http://localhost:3000/post/createevent',  {
           eventType: eventType,
           eventTitle: eventTitle,
           content: content,
           startDate: startDate,
           endDate: endDate, 
           AuthorIsParticipant:AuthorIsParticipant
    }, { withCredentials: true });

      if(response.status == 200)
      navigate("/home"); 
    } catch (error) {
      console.log(error)
    }

  //TODO- present new post at home page! :) 
  //
  }

  return (
    <div className="createevent-container">

      <div className="createevent-form">
        <h1 id="create-event-title">Create Event</h1>
        
        <form>
          <div className="author form-group">
            <label className="textfield-lab" htmlFor="author">Author: </label>
            <label className="login-lab" htmlFor="author">Yuval Ohana</label>
            {/* <label className="login-lab" htmlFor="author">{getConectedUser}</label> */}
          </div>

          <div className="event-type form-group">
            <label className="textfield-lab" htmlFor="event-type">Event Type: </label>
            <select className="text-field" value={eventType} onChange={handleOptionChange}>
              <option value="Social">Social</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Contribution">Contribution</option>
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

          <button className="btn create-event-btn " onClick={handleCreateEventClicked}>Create Event</button>
        </form>
      </div>
    </div>
  )
}

export default CreateEventPage
