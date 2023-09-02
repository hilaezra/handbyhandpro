import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const LocationInput = ({ onLocationChange }) => {
  const [location, setLocation] = useState('');

  const handleLocationChange = (event) => {
    const newLocation = event.target.value;
    setLocation(newLocation);
    onLocationChange(newLocation); // Pass the location back to the parent component
  };

  return (
    <Form.Group>
      {/* <Form.Label>Enter Location:</Form.Label> */}
      <Form.Control
        type="text"
        placeholder="E.g., Rothschild Boulevard 22, Tel Aviv-Yafo"
        value={location}
        onChange={handleLocationChange}
      />
    </Form.Group>
  );
};

export default LocationInput;
