{/* INFO
Filename: MainRouter.jsx
Student Name: Hannah Raju 
Student ID: 301543568
Date: 27 September 2025
*/}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import About from './src/about'
import Services from './src/services'
import Projects from './src/projects'
import Resume from './src/resume'
import Contact from './src/contact'


const MainRouter = () => {
    return (<div>

        <Layout/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/resume" element={<Resume />} />
            
        </Routes>
    </div>)
}

export default MainRouter