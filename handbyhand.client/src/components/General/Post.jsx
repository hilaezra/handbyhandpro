import React, { useState} from 'react';
import './Post.css';
//import Popup from './PopUp';

function Post({ post }) {

  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div id="post" className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{post.eventTitle}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{post.authorName}</h6>
        <h6 className="card-subtitle mb-2 text-muted">{post.eventType}</h6>
        <p className="card-text">{post.startDate}</p>
        <p className="card-text">{post.startTime}</p>
        <p className="card-text">{post.participants}</p>
        <p className="card-text">{post.reviews}</p>
        <button onClick={handleOpenPopup}>show more details</button>

        {showPopup && (
        <div className="popup">
          <div className="popup-content">
        <p className="card-text">{post.content}</p>
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
