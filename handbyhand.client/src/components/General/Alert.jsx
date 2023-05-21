import React, { useState } from 'react';
import './Alert.css'; // Import your CSS file for styling

const Alert = ({ message, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div className={`alert ${isOpen ? 'open' : ''}`}>
      <div className="alert-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
