import React, { useState, useEffect } from "react";
import AboutMe from "./AboutMe";
import Navbar from "./navbar";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import { Link } from 'react-router-dom';
import '../styles/header.css'

export default function Header() {
    return (
        <header className="header">
            <Navbar items = {[ 
                {
                    id: "aboutMe",
                    item: <Link to='/'>About Me</Link>, 
                },
                {
                    id: "projects",
                    item: <Link to='projects'>Projects</Link>,   
                },
                {
                    id: "contact",
                    item: <Link to='contact'>Contact</Link>,    
                },
                {
                    id: "resume",
                    item: <Link to='resume'>Resume</Link>,
                }
            ]}
            />
        </header>    
    )
};