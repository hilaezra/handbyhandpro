import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AdvancedSearchPage.css'
import Post from '../General/Post';



const AdvancedSearchPage = () => {

  const [arealocation, setArealocation] = useState('Center'); //set the first option as defult
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [eventType, setEventType] = useState('All'); 

  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);

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

  const handleClosePosts = () => {
    setShowPosts(false);
  };

/*  useEffect(() => {
    handleSort(); // Fetch posts when the component mounts
  }, []); */

  const jwtToken = localStorage.getItem('token');

  const handleSort = async (e) => {

    try{
        e.preventDefault()
        console.log('arealocation',arealocation)
        console.log('startDate',startDate)
        console.log('endDate',endDate)
        console.log('eventType',eventType)
        console.log('sending the request :)')

        const response = await axios.post('http://localhost:3000/post/sortedPosts', {
        arealocation: arealocation, startDate: startDate, endDate: endDate, eventType: eventType},
        {headers: { Authorization: `Bearer ${jwtToken}`, }}, { withCredentials: true },);
        setPosts(old => response.data)
        setShowPosts(true)
        console.log(posts)

    }catch(err)
    {
      console.error('err.message', err.message);
      console.log(JSON.stringify(err));
    }
  }


  return (
    <div className="AdvancedSearch-container">

      <div className="AdvancedSearch-form">
        <h1 className="advanced-search-title">Advanced Search</h1>


        <form>
          <div className="event-area form-group">
            <label className="textfield-lab" htmlFor="event-location">Location Area: </label>
            <select className="text-field-search" value={arealocation} onChange={handleAreaChange}>
              <option value="Center">Center</option>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="AllCountry">All country</option>

            </select>
          </div>

          <div className="start-date form-group">
            <label className="textfield-lab" htmlFor="start-date">Start Date: </label>
            <input className="text-field-search" type="date" value={startDate} onChange={handleStartDateChange} />
          </div>

          <div className="end-date form-group">
            <label className="textfield-lab" htmlFor="start-date">End Date: </label>
            <input className="text-field-search" type="date" value={endDate} onChange={handleEndDateChange} />
          </div>

          <div className="event-type form-group">
            <label className="textfield-lab" htmlFor="event-type">Event Type: </label>
            <select className="text-field-search" value={eventType} onChange={handleOptionChange}>
            <option value="All">All</option>
              <option value="Social">Social</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Contribution">Contribution</option>
            </select>
          </div>         
        </form>


        <div>
          <button className="sort-btn " onClick={handleSort}>Search</button>

          {showPosts && (
                <div className="posts">
                  <div className="posts-content">
                    { 
                      (posts === null ||!Array.isArray(posts)) ? (
                        
                        <p>No posts.</p>
                           
                      ) : (
                        <div>
                          <ul>
                            {posts.map((post, index) => (
                                <div key={index}>
                                    <Post post={post} />
                                </div>
                            ))}
                          </ul>
                        </div>                      
                      )}
                   <button onClick={handleClosePosts}>Close</button>

                  </div>
                </div>

              )}
 
                  
        </div>
        
      </div>
    </div>

  )
}

export default AdvancedSearchPage