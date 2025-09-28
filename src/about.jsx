{/* INFO
Filename: about.jsx
Student Name: Hannah Raju 
Student ID: 301543568
Date: 27 September 2025
*/}

import me from '../src/assets/me.jpg'
import { Link } from 'react-router-dom'
/*import resume from '../src/assets/resume.pdf'*/

/*This function defines the About Me page */
export default function About() {
    return (
        <div>
            <h2>About Me</h2>
            {/*
            <p>My name is Hannah Raju. I am an aritst and designer currently located in Quebec. I have a Bachelor of Science in Computer Science and I am currently studying to advance my practical knowledge using machine learning techniques.</p>
            <img src={me} alt="Me"/>
            <br/>
            /*Defines buttom linking to my resume as a pdf */
            /*<Link to="/resume"><button>Resume</button></Link> /*
            */}
        </div>
    )
}