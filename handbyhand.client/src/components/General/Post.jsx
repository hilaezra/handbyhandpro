import React, { useState} from 'react';
import './Post.css';
//import Popup from './PopUp';

function Post({ post }) {

  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleCloseParticipants = () => {
    setActiveTab(false);
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
        <p className="card-text">Starts at: {post.startTime}</p>
        <p className="card-text">Ends at: {post.endTime}</p>

        <div>
            <div className="tab-buttons">
              <button className={activeTab === 'participants' ? 'active' : ''}
                onClick={() => handleTabChange('participants')}> Participants </button>
              <button className={activeTab === 'reviews' ? 'active' : ''}
                onClick={() => handleTabChange('reviews')}>Reviews </button>
        </div>
      
          {/* Handling on participants and reviews buttons */}
          {activeTab === 'participants' && (
            <div className="participants">
              <div className="participants-content">
                  {/* participants names */
                  post.participants === null ? (
                    <p>No participants for this event.</p>
                  ) : (
                    <ul>Event Participants: 
                      {post.participants.map(participant => (
                        <li key={participant._id}>{participant.firstname} {participant.lastname}</li>))}
                    </ul>)}
                <button onClick={handleCloseParticipants}>Close</button>
              </div>
            </div>
          )}
      
          {activeTab === 'reviews' && (
            <div className="reviews-content">
              {/* reviews content */
                <p className="card-text">{post.reviews}</p>}
            </div>
          )}
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
