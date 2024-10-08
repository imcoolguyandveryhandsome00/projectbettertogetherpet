// CheckboxDropdown.js
import React, { useState } from 'react';
import './CheckboxDropdown.css';

function CheckboxDropdown({ options, selectedOptions, onOptionChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    onOptionChange(value);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedOptions.length > 0 ? `${selectedOptions.length} Selected` : "Select Options"}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map(option => (
            <label key={option.value} className="dropdown-item">
              <input
                type="checkbox"
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={handleCheckboxChange}
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default CheckboxDropdown;
