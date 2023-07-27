import React from 'react';

const Popup = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        {children}
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
