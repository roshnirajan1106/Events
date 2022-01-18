
import './App.css';
import { useState } from 'react';
import Title from './components/Title'
import Modal  from './components/Modal';
import EventList from './components/EventList';
function App() {
  const[showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title :"Mario's Birthday Bash", id:1},
    {title :"Live Stream", id:2},
    {title :"Race to moon", id:3},
  ]);
  const handleClose = () =>{
    setShowModal(false);
  }
  const handleClick = (id) =>{
      const new_array = events.filter((event) =>(event.id !== id) );
      setEvents(new_array)
  }
  const subtitle = "All the latest events in Marioland"
  return (
    <div className="App">
      
      <Title title="Events in your Area" subtitle={subtitle} />

     {showEvents && <div>
        <button onClick={() => setShowEvents(false)}>Hide Events</button>
      </div> }
      { !showEvents && <div>
        <button onClick={() => setShowEvents(true)}>show events</button>
      </div> }
       {showEvents&& <EventList events={events} showEvents={showEvents} handleClick={handleClick}/>
        }
      {showModal && 
        <Modal handleClose ={handleClose}>
        <h2>10% off Coupoun Code!!</h2>
        <p>Use this code!</p>
      
        </Modal>
      }
      <div>
        <button onClick={() =>setShowModal(true)}>Show Modal</button>
      </div>
      
     
      </div>
  );
}

export default App;
