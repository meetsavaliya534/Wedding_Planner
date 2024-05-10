import React, { useState } from 'react';

const VenueSelection = () => {
    const [selectedVenue, setSelectedVenue] = useState('');

    const handleVenueSelection = (venue) => {
        setSelectedVenue(venue);
    };

    return (
        <div>
            <h2>Venue Selection</h2>
            <ul>
                <li onClick={() => handleVenueSelection('Venue 1')}>Venue 1</li>
                <li onClick={() => handleVenueSelection('Venue 2')}>Venue 2</li>
                <li onClick={() => handleVenueSelection('Venue 3')}>Venue 3</li>
            </ul>
            <p>Selected Venue: {selectedVenue}</p>
        </div>
    );
};

export default VenueSelection;
