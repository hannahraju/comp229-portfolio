{/* INFO
Filename: projects.jsx
Student Name: Hannah Raju 
Student ID: 301543568
Date: 27 September 2025
*/}

import calendar from "../src/assets/calendar.jpg"
import gallery from "../src/assets/gallery.jpg"
import tutorial from "../src/assets/tutorial.jpg"

/*This function defines the Projects page */
export default function Projects(){
    return(
        <div>
            <h2>Projects</h2>   
            {/*Displays examples of my previous projects */}

            <h3>2026 Art Calendar Design </h3>
            <p>Designed and printed a 2026 calendar featuring my original artwork</p>
            <img src={calendar} alt="2026 Calendar Design"/>
            <br/>
            <br/>
             
            <h3>Sunny Trees Landscape Painting Tutorial</h3>
            <p>Scripted and filmed a full landscape painting tutorial </p>
            <img src={tutorial} alt="Landscape Painting Tutorial"/>
            <br/>
            <br/>
            <h3> Website for my creative business </h3>
            <p>Created a portfolio and ecommerce site for my creative business</p>
            <img src={gallery} alt="Artist website"/>
  
        
        </div>
    )
}