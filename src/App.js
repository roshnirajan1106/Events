
import './App.css';
import { useState } from 'react';
function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title :"Mario's Birthday Bash", id:1},
    {title :"Live Stream", id:2},
    {title :"Race to moon", id:3},
  ]);
  const handleClick = (id) =>{
      const new_array = events.filter((event) =>(event.id !== id) );
      setEvents(new_array)
  }
  return (
    <div className="App">
     {showEvents && <div>
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      </div> }
      { !showEvents && <div>
        <button onClick={() => setShowEvents(true)}>show events</button>
      </div> }
       {
       showEvents &&
        events.map((event) =>(
        <div key ={event.id}>
          <h1>{event.id} - {event.title}</h1>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </div>
      ))
      
      }
     
      </div>
  );
}

export default App;
