import React,{useEffect,useState} from 'react'

const Events = ({selectedDate}) => {
    const [events,setEvents]=useState([]);
    useEffect(()=>{
        const fetchEvents=async () =>{
        try {
            const response = await axios.get(`http://localhost:5000/events?date=${selectedDate}`);
            setEvents(response.data);
            } catch (error) {
            console.error('Error fetching events:', error);
            }
        };
    
        fetchEvents();   
        
    },[selectedDate])
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Events on {selectedDate}</h2>
      {events.length === 0 ? (
        <p>No events found for this date.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {events.map(event => (
            <li key={event.id} className="py-2">
              <div className="text-sm font-semibold">{event.name}</div>
              <div className="text-xs text-gray-500">{event.time}</div>
              <div className="text-xs text-gray-600">{event.description}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Events;
