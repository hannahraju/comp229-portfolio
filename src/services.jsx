{/* INFO
Filename: services.jsx
Student Name: Hannah Raju 
Student ID: 301543568
Date: 27 September 2025
*/}

import website from "../src/assets/website.jpg"
import print from "../src/assets/printdesign.jpg"
import commission from "../src/assets/commission.jpg"


/*This function defines the Services page */
export default function Services(){
    return(
        <div>
            <h2>Services</h2>

            <h3>Custom Landscape Paintings</h3>
            <p>Create a piece of custom art based on a photo</p>
            <img src={commission} alt="Custom artwork"/>
            <br/>
            <br/>

            <h3>Custom Print Design</h3>
            <p>Notecards, posters, stickers, and other stationary</p>
            <img src={print} alt="Custom print design"/>
            <br/>
            <br/>

            <h3>Website Design</h3>
            <p>Portfolio and e-commerce websites for creatives</p>
            <img src={website} alt="Pixel Artist website"/>
            <br/>
            <br/>
            

        </div>
    )
}