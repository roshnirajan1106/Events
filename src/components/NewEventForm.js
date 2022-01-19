import './NewEventForm.css'
import React from 'react'
import { useState } from 'react'
const NewEventForm = ({addEvent,setShowModal}) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState(null);
    const resetForm = () =>{
        setTitle('');
        setDate('');
    }

    const handleSubmit = (e) =>{
            e.preventDefault();
            const event = {
                title:title,
                date:date,
                id: Math.floor(Math.random()*10000)
            }
            setShowModal(false);
            addEvent(event);
            
            
    }
    return (
        <form onSubmit={handleSubmit}className='new-event-form'>
            <label >
                <span>Event Title: </span>
                <input onChange={(e) => setTitle(e.target.value)} value={title}type="text" />
            </label>
            <label >
                <span>Event Date : </span>
                <input  onChange={ (e) => setDate(e.target.value)} value={date} type="date" />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default NewEventForm
