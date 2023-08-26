import React from 'react';
import PlacesAutocomplete, {geocodeByAddress,getLatLng,} from 'react-google-autocomplete';

const LocationInput = ({ onSelectLocation }) => {
  const handleSelect = async (address) => {
    try {
      const results = await geocodeByAddress(address);
      const { lat, lng } = await getLatLng(results[0]);
      onSelectLocation({ address, lat, lng });
    } catch (error) {
      console.error('Error selecting location:', error);
    }
  };

  return (
    <div>
      <PlacesAutocomplete
        apiKey="YOUR_GOOGLE_MAPS_API_KEY"
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input {...getInputProps({ placeholder: 'Enter a location' })} />
            <div>
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? '#e6e6e6' : '#fff',
                  cursor: 'pointer',
                };
                return (
                  <div
                    key={suggestion.placeId}
                    {...getSuggestionItemProps(suggestion, { style })}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default LocationInput;
