import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './rent.css';

export default function Rent() {
  const { brand, model } = useParams();
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateChange = (date) => {
    const dateString = date.toDateString();
    setSelectedDates((prev) =>
      prev.includes(dateString)
        ? prev.filter((d) => d !== dateString)
        : [...prev, dateString]
    );
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month' && selectedDates.includes(date.toDateString())) {
      return 'selected-date';
    }
  };

  return (
    <div>
      <h1>Choose when you want to rent a car: {brand} {model}</h1>
      <Calendar
        onClickDay={handleDateChange}
        tileClassName={tileClassName}
        className="cal"
      />
      <div className="dates">
        <h2>Selected Dates:</h2>
        <ul>
          {selectedDates.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      </div>
      <div className="submitRent">Rent</div>
    </div>
  );
}
