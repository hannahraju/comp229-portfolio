{/* INFO
Filename: contact.jsx
Student Name: Hannah Raju 
Student ID: 301543568
Date: 27 September 2025
*/}

import ContactForm from "../components/ContactForm"

/*This function defines the Contact page */
export default function Contact(){
    return(
        <div>
            {/*Defines a colorful panel to highlight my name*/}
            <div style={{
                border: "2x solid #BB5E57",
                padding: "20px",
                borderRadius: "8px",
                backgroundColor: "#BB5E57",
                maxWidth: "400px",
                margin: "20px auto"
            }}>
                <p style={{color:'white', textAlign: 'center'}}>
                    Hannah Raju<br/>
                    Email - hannahraju96@gmail.com
                </p>
                
            </div>
            
            <h2>Contact Me</h2>
            {/*Displays ContactForm component - for users to message me*/}
            <ContactForm/>
                   
                        
        </div>
    )
}