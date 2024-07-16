// src/components/Calendar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Calendar = () => {
  // Dummy data for events
  const events = [
    { date: '2024-07-01', name: 'Event 1', time: '10:00 AM', description: 'Description of Event 1' },
    { date: '2024-07-01', name: 'Event 2', time: '2:00 PM', description: 'Description of Event 2' },
    { date: '2024-07-03', name: 'Event 3', time: '11:30 AM', description: 'Description of Event 3' },
  ];

  // Function to get number of days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  // Get number of days in July 2024
  const numDaysInMonth = getDaysInMonth(2024, 7);

  // Generate array of days in July 2024
  const daysArray = [...Array(numDaysInMonth).keys()].map(day => day + 1);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-bold text-blue-500">July 2024</div>
        <div className="flex space-x-2">
          <button className="text-sm px-2 py-1 bg-blue-500 text-white rounded-md">Prev</button>
          <button className="text-sm px-2 py-1 bg-blue-500 text-white rounded-md">Next</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {/* Render days of the month */}
        {daysArray.map(day => (
          <Link key={day} to={`/events/${2024}-07-${day}`}>
            <div className="p-2 rounded-md cursor-pointer bg-gray-100 hover:bg-gray-200">
              <div className="text-sm font-semibold">{day}</div>
              <div className="text-xs text-gray-500">
                {events.filter(event => event.date === `2024-07-${day}`).length} events
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
