import React from 'react'

const EventList = ({events,handleClick}) => {
    return (
        <div>
        {
            
        events.map((event) =>(
        <div key ={event.id}>
          <h1>{event.id} - {event.title}</h1>
          <button onClick={() => handleClick(event.id)}>Delete Event</button>
        </div>
      ))
      
      }
        </div>
    )
}

export default EventList
