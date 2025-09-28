{/* INFO
Filename: Home.jsx
Student Name: Hannah Raju 
Student ID: 301543568
Date: 27 September 2025
*/}

import React from 'react'
import { Link } from 'react-router-dom'
{/*import About from "/src/about"*/}

{/* Home component defines the homepage*/}
export default function Home() {

    return (
        <div>
        <p>Welcome to my portfolio! </p>
        <h3>Mission Statement</h3>
        <p>To find a creative and practical application combining my passion for making art with my technical interest in machine learning. </p>

        {/*Creates a button to redirect user to About Me page
        <Link to="/about"><button>About Me</button></Link> */}
        </div>


    )
}


