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
            deployed: "https://smart-stack.herokuapp.com/"
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
        </section>
    )
};