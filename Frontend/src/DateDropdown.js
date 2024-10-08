import React, { useState } from 'react';
import Select from 'react-select';

function DateDropdown() {
  const [selectedDate, setSelectedDate] = useState(null);

  const generateDateOptions = () => {
    const options = [];
    for (let year = 2020; year <= 2024; year++) {
      for (let month = 1; month <= 12; month++) {
        for (let day = 1; day <= 31; day++) {
          const formattedDay = String(day).padStart(2, '0');
          const formattedMonth = String(month).padStart(2, '0');
          const date = `${formattedDay}/${formattedMonth}/${year}`;
          options.push({ value: date, label: date });
        }
      }
    }
    return options;
  };

  const handleChange = (selectedOption) => {
    setSelectedDate(selectedOption);
  };

  return (
    <div>
      <Select
        id="dateDropdown"
        options={generateDateOptions()}
        value={selectedDate}
        onChange={handleChange}
        placeholder="Date"
        isClearable
      />
    </div>
  );
}

export default DateDropdown;
