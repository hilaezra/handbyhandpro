import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './AdvancedSearchPage.css'


const AdvancedSearchPage = () => {

  const [arealocation, setArealocation] = useState('Center'); //set the first option as defult
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [eventType, setEventType] = useState(''); //set null

  const handleAreaChange = (event) => {
    setArealocation(event.target.value);
  }

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleOptionChange = (event) => {
    setEventType(event.target.value);
  }

  return (
    <div className="createevent-container">

      <div className="AdvancedSearch-form">
        <h1 className="advanced-search-title">Advanced Search</h1>


        <form>
          <div className="event-area form-group">
            <label className="textfield-lab" htmlFor="event-location">Location Area: </label>
            <select className="text-field" value={arealocation} onChange={handleAreaChange}>
              <option value="Center">Center</option>
              <option value="North">North</option>
              <option value="South">South</option>
            </select>
          </div>

          <div className="start-date form-group">
            <label className="textfield-lab" htmlFor="start-date">Start Date: </label>
            <input className="text-field" type="date" value={startDate} onChange={handleStartDateChange} />
          </div>

          <div className="end-date form-group">
            <label className="textfield-lab" htmlFor="start-date">End Date: </label>
            <input className="text-field" type="date" value={endDate} onChange={handleEndDateChange} />
          </div>

          <div className="event-type form-group">
            <label className="textfield-lab" htmlFor="event-type">Event Type: </label>
            <select className="text-field" value={eventType} onChange={handleOptionChange}>
            <option value="All">All</option>
              <option value="Social">Social</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Contribution">Contribution</option>
            </select>
          </div>

        </form>
      </div>
    </div>

  )
}

export default AdvancedSearchPage