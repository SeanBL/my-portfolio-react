import React from "react";
import '../styles/projects.css';
import Brain from '../img/brain.png';
import Helpers from '../img/hh1.png';
import Hack from '../img/hackBlog.png';
import Weather from '../img/weather.png'
import Smart from '../img/smartStack.png'
import NoSql from '../img/noSql.png'
import {useState} from 'react';

export default function Projects() {
    // const [isHover, setIsHover] = useState(false);

    // const hovering = () => {
    //     setIsHover(true);
    // };

    // const notHovering = () => {
    //     setIsHover(false);
    // };

    const projects = [
        {
            title: "Stability",
            bgImg: Brain,
            github: "https://github.com/oriarh/STABILITY",
            deployed: "https://oriarh.github.io/STABILITY/"
        },
        {
            title: "Happy Helpers",
            bgImg: Helpers,
            github: "https://github.com/HawaFallay/Happy-Helper-",
            deployed: "https://happy-helpers-app.herokuapp.com/"
        },
        {
            title: "Hack Blog",
            bgImg: Hack,
            github: "https://github.com/SeanBL/hack-blog",
            deployed: "https://hack-blog.herokuapp.com/"
        },
        {
            title: "Weather Forecast",
            bgImg: Weather,
            github: "https://github.com/SeanBL/weather-forecast-app",
            deployed: "https://seanbl.github.io/weather-forecast-app/"
        },
        {
            title: "Smart Stack",
            bgImg: Smart,
            github: "https://github.com/oriarh/Smart-Stack",
            deployed: ""
        },
        {
            title: "NoSQL Database",
            bgImg: NoSql,
            github: "https://github.com/SeanBL/social-network-database",
            deployed: "https://youtu.be/K0M4xUI4yw8"
        },
    ]

    return  (
        <section className="pContainer">
            <div className="title">
                Recent Projects
            </div> 
            <div className="projects">¨
                {projects.map(project=> {
                    /**
                     * project = {
                     *   title:"..."
                     *   bgImg:"..."
                     * ..
                     * }
                     * Destructing is declaring variables by the key names:
                     */
                    const {title,bgImg,github,deployed} = project;

                    return (
                        <figure >
                            <p><b className="projectTitle">{title}</b></p>
                            <figure className="project">
                                <img className="pImg" src={bgImg}></img>
                                <figcaption className="gLink">
                                    <a className="linkText" href={github} target="_blank">Github</a>
                                </figcaption>
                                <figcaption className="dLink">
                                    <a className="linkText" href={deployed} target="_blank">Demo</a>
                                </figcaption>
                            </figure>
                        </figure>)
                })}
            </div>
            {/* <div className="picContainer1" style={{position:"relative"}}>
                <a href="https://github.com/oriarh/STABILITY" target="_blank" style={{position:"absolute",bottom:"10px",right:"5px"}}>GitHub Link</a>
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
            <div className="picContainer2">
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