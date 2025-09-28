{/* INFO
Filename:ContactForm.jsx
Student Name: Hannah Raju 
Student ID: 301543568
Date: 27 September 2025
*/}

import React from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Link } from 'react-router-dom'

{/* ContactForm component returns a basic form for the user to submit a messages
NOTE this component is not fully functional */}
export default function ContactForm(){

    /* 3 constant defind for user input fields: fullname, email, message*/
    const[fullname, setName] = useState('')
    const [email, setEmail] = useState('')
    const[message, setMessage] = useState('')
    
    return(

        <form>
            <label>
                Your full name:
                <input
                    type="text"
                    value = {fullname}
                    /* Handles state change when user inputs their name*/
                    onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Your email
                <input
                    type="text"
                    value = {email}
                    /* Handles state change when user inputs their email*/
                    onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Your message:
                <input
                    type="text"
                    value = {message}
                    /* Handles state change when user inputs their message*/
                    onChange={(e) => setMessage(e.target.value)} />
            </label>
        <p>
        {/* Displays the user's captured information*/}
        Preview: <br/> 
        Name: {fullname}<br/> 
        Email: {email}<br/>
        Message:<br/>
        {message}<br/>
       </p>

       {/* Creates a button to return user to homepage*/}
       <Link to="/"><button>Return to Home</button></Link>
        </form>
    )
}

