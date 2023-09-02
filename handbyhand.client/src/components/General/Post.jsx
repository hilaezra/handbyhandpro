import React, { useEffect, useState } from 'react'
import './Post.css';
import axios from 'axios'
import jwtDecode from 'jwt-decode';
//import Popup from './PopUp';

axios.defaults.withCredentials = true

function Post({ post }) {

  const [showPopup, setShowPopup] = useState(false);
  const [participants, setParticipants] = useState([]);
  const [showParticipants, setShowParticipants] = useState(false);
  const [message, setMessage] = useState('');
  const [isParticipant, setIsParticipant] = useState(false);
  const jwtToken = localStorage.getItem('token'); 

  useEffect(() => {
    const jwtToken = localStorage.getItem('token'); 
    if (jwtToken) {
      const decodedToken = jwtDecode(jwtToken);
      const userId = decodedToken.userId;
      if(post.participants != null)
      {
        console.log(post.participants.includes(userId));
        setIsParticipant(post.participants.includes(userId));
      }
    }
  }, [post]); 

  useEffect(() => {
    if (showParticipants) {
      fetchParticipants();
    }
  }, [showParticipants]);

  const fetchParticipants = async () => {
    try {
      console.log('start fetching')

      const response = await axios.post('http://localhost:3000/post/participants', {
        postId: post._id,
      }, {headers: { Authorization: `Bearer ${jwtToken}`, }}, { withCredentials: true },);

      console.log('response.data:');
      console.log(response.data);
      console.log('response.data ends!!!');

      setParticipants(old => response.data.participants);
      console.log(participants);

    } catch (error) {
      console.error('Error fetching participants:', error);
    }
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCloseParticipants = () => {
    setShowParticipants(false);
  };

  const handleParticipate = async () => {
    try {
      const response = await axios.post('http://localhost:3000/post/participate', {
        postId: post._id,
      }, {headers: { Authorization: `Bearer ${jwtToken}`, }}, { withCredentials: true },);

      console.log(response.data.message);
      setIsParticipant(true);
      alert(response.data.message);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error participating in event: ', error.message);
      console.log(JSON.stringify(error))
    }
  };

  const handleCancelParticipation = async () => {
    try {
      const response = await axios.post('http://localhost:3000/post/cancelParticipation', {
        postId: post._id,
      }, {headers: { Authorization: `Bearer ${jwtToken}`, }}, { withCredentials: true },);

      console.log(response.data.message);
      setIsParticipant(false);
      alert(response.data.message);
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error canceling participation:', error);
    }
  };

  const startDate = new Date(post.startDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const endDate = new Date(post.endDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div id="post" className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.eventTitle}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{post.authorName}</h6>
        <h6 className="card-subtitle mb-2 text-muted">{post.eventType}</h6>
        <p className="card-text">Starts: {startDate}</p>
        <p className="card-text">Ends: {endDate}</p>
        
        <button onClick={handleOpenPopup}>show more details</button>

        {showPopup && (
        <div className="popup">
          <div className="popup-content">
        <p className="card-text">Event details: {post.content}</p>
        <p className="card-text">Area: {post.arealocation}</p>
        <p className="card-text">Location: {post.location}</p>
        <p className="card-text">Starts at: {post.startTime}</p>
        <p className="card-text">Ends at: {post.endTime}</p>

        <div>      
          {/* Handling on participants and reviews buttons */}

          <button onClick={() => setShowParticipants(true)}>View Participants</button>

              {showParticipants && ( 
                <div className="participants">
                  <div className="participants-content">

                {/* participants names */
                  (participants === null || !Array.isArray(participants)) ? (
                    <p>No participants for this event.</p>
                  ) : (
                    <ul>Event Participants: 
                      {participants.map(participant => (
                        <li key={participant._id}>{participant.firstname} {participant.lastname}</li>))}
                    </ul>)}
                   <button onClick={handleCloseParticipants}>Close</button>

                </div>
            </div>
              )}
      </div>

      <div>
          {isParticipant ? (
            <button onClick={handleCancelParticipation}>Cancel Participation</button>
              ) : (
            <button onClick={handleParticipate}>Join the event</button>
          )}
          {/*message && <p>{message}</p>*/}
      </div>
      
     
            <button className="close-button" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}

        {/* <Popup show={showPopup} onClose={handleClosePopup} children={post}>
      </Popup> */}
      </div>
    </div>
  );
}

export default Post;
