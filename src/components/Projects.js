import React from "react";
import '../styles/projects.css';
import Brain from '../img/brain.png';
import Helpers from '../img/hh1.png';
import Default from '../img/defaultPic.jpg'
import {useState} from 'react';

export default function Projects() {
    const [isHover, setIsHover] = useState(false);

    const hovering = () => {
        setIsHover(true);
    };

    const notHovering = () => {
        setIsHover(false);
    };

    return  (
        <section className="pContainer">
            <div className="title">
                Recent Projects
            </div> 
            <a href="https://github.com/oriarh/STABILITY" target="_blank">GitHub Link</a>
            <div className="picContainer1">
                <div className="picBorder" 
                        onMouseOver={hovering}
                        onMouseOut={notHovering}>
                    <img className="stabilityPic" src={Brain} alt="brain"/>
                </div>
                {isHover && (
                    <div className="stabilityGLink">
                        <a href="https://github.com/oriarh/STABILITY" target="_blank">GitHub Link</a>
                    </div>
                )}

                <div>
                    <img className="hhPic" src={Helpers} alt="Happy Helpers App Login Page"/>
                </div>
                
            </div>
            {/* <div className="picContainer2">
                <div className="hackBlogPic">
                    <p className="hackBlog">
                        The Hack Blog
                    </p>
                </div>
                <div className="defaultPic">
                    <p className="finalProject">(temp place holder)</p>
                </div> 
            </div> */}
            
                
            
        </section>
    )
};