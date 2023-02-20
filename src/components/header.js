import React, { useState, useEffect } from "react";
import AboutMe from "./AboutMe";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import { Link } from 'react-router-dom';

export default function Header() {
    // const [activeItem, setActiveItem] = useState('AboutMe');
    // useEffect(() => {
    //     const query = getQuerry();
    //     if (query.items) {
    //         setActiveItem(query.items);
    //     }
    // }, []);
    
    return (
        <header>
            <Link to='/'>About Me</Link>
            <Link to='projects'>Projects</Link>
            <Link to='contact'>Contact</Link>
            <Link to='resume'>Resume</Link>


            {/* <Navbar items = {[ 
                {
                    id: "aboutMe",
                    item: "AboutMe",
                    content: <AboutMe />,
                },
                {
                    id: "projects",
                    item: "Projects",
                    content: <Projects />,
                },
                {
                    id: "contact",
                    item: "Contact",
                    content: <Contact />,
                },
                {
                    id: "resume",
                    item: "Resume",
                    content: <Resume />,
                }
            ]}
            activeItem={activeItem}
            changeItem={(newItem) => {
                setActiveItem(newItem);
                setQueryValue("item", newItem)
            }}
            /> */}
        </header>    
    )
};