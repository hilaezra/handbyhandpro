import React, { useState } from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode';
import {useNavigate} from 'react-router-dom';
import './CreateEventPage.css'
import LocationInput from '../General/LocationInput';

axios.defaults.withCredentials = true

const CreateEventPage = () => {
  const [eventType, setEventType] = useState('Social'); //set the first option as defult
  const [eventTitle, setEventTitle] = useState('');
  const [content, setContent] = useState('');
  const [arealocation, setArealocation] = useState('Center'); //set the first option as defult
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
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

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArealocation(event.target.value);
  }

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  const handleCheckboxChange = () => {
    setAuthorIsParticipant(!AuthorIsParticipant);
  };

  const jwtToken = localStorage.getItem('token');
  const decodedToken = jwtDecode(jwtToken);
  const firstname = decodedToken.firstname;
  const lastname = decodedToken.lastname;

  const navigate = useNavigate();
  const handleCreateEventClicked = async (e) => {
    try {
      e.preventDefault()
      console.log("send the request :)");
      console.log(jwtToken);
      const response = await axios.post('http://localhost:3000/post/createevent',  {
           eventType: eventType,
           eventTitle: eventTitle,
           content: content,
           location: location,
           arealocation: arealocation,
           startDate: startDate,
           startTime: startTime,
           endDate: endDate, 
           endTime: endTime,
           AuthorIsParticipant:AuthorIsParticipant
    }, {headers: { Authorization: `Bearer ${jwtToken}`, }}, { withCredentials: true },);

    console.log("response status:"+response.status)
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
          <div className="author">
            <label className="textfield-lab" htmlFor="author">Author: </label>
            <label className="author-lab" htmlFor="author">{firstname } {lastname}</label>
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

          <div className="event-area form-group">
            <label className="textfield-lab" htmlFor="event-location">Location Area: </label>
            <select className="text-field" value={arealocation} onChange={handleAreaChange}>
              <option value="Center">Center</option>
              <option value="North">North</option>
              <option value="South">South</option>
            </select>
            <label className="textfield-lab" htmlFor="event-location">Location Adress: </label>
            <LocationInput className="text-field" onLocationChange={handleLocationChange}/>
          </div>

          <div className="start-date form-group">
            <label className="textfield-lab" htmlFor="start-date">Start Date: </label>
            <input className="text-field" type="date" value={startDate} onChange={handleStartDateChange} />
            <input className="text-field" type="time" id="time" value={startTime} onChange={handleStartTimeChange}/>
          </div>

          <div className="end-date form-group">
            <label className="textfield-lab" htmlFor="start-date">End Date: </label>
            <input className="text-field" type="date" value={endDate} onChange={handleEndDateChange} />
            <input className="text-field" type="time" id="time" value={endTime} onChange={handleEndTimeChange}/>
          </div>

          <div >
            <input className="participant-check text-field" type="checkbox" checked={AuthorIsParticipant} onChange={handleCheckboxChange} />
            <label className="textfield-lab" htmlFor="password">I am participant in the event</label>
          </div>

          <button className="btn create-event-btn " onClick={handleCreateEventClicked}>Create Event</button>
        </form>
      </div>
    </div>
  )
}

export default CreateEventPage
