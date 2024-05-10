import React, { useState } from 'react';

const DecorationOptions = () => {
    const [selectedDecoration, setSelectedDecoration] = useState('');

    const handleDecorationSelection = (decoration) => {
        setSelectedDecoration(decoration);
    };

    return (
        <div>
            <h2>Decoration Options</h2>
            <ul>
                <li onClick={() => handleDecorationSelection('Decoration 1')}>Decoration 1</li>
                <li onClick={() => handleDecorationSelection('Decoration 2')}>Decoration 2</li>
                <li onClick={() => handleDecorationSelection('Decoration 3')}>Decoration 3</li>
            </ul>
            <p>Selected Decoration: {selectedDecoration}</p>
        </div>
    );
};

export default DecorationOptions;
