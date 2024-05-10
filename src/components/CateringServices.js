import React, { useState } from 'react';

const CateringServices = () => {
    const [selectedCatering, setSelectedCatering] = useState('');

    const handleCateringSelection = (catering) => {
        setSelectedCatering(catering);
    };

    return (
        <div>
            <h2>Catering Services</h2>
            <ul>
                <li onClick={() => handleCateringSelection('Catering Service 1')}>Catering Service 1</li>
                <li onClick={() => handleCateringSelection('Catering Service 2')}>Catering Service 2</li>
                <li onClick={() => handleCateringSelection('Catering Service 3')}>Catering Service 3</li>
            </ul>
            <p>Selected Catering Service: {selectedCatering}</p>
        </div>
    );
};

export default CateringServices;
