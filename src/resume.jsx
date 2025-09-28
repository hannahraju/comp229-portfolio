{/* INFO
Filename: resume.jsx
Student Name: Hannah Raju 
Student ID: 301543568
Date: 27 September 2025
*/}
import myresume from "../src/assets/pdfs/my-resume.pdf"


export default function Resume() {
    return(
        <div>
        <h2>Resume</h2>
        <iframe src={ myresume } width="100%" height="1200px"/>
        </div>
    )
}
