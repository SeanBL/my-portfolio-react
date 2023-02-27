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
    ]

    return  (
        <section className="pContainer">
            <div className="title">
                Recent Projects
            </div> 
            <div className="projects" style={{display:"flex",flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>¨
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

                    return (<figure className="project" style={{maxWidth:"25vw", color:"white", textAlign:"center", position:"relative", border:"5px solid red"}}>
                        <p><b>{title}</b></p>
                        <img src={bgImg} style={{width:"100%"}}></img>
                        <figcaption style={{position:"absolute", bottom:"30px", right:"5px", zIndex:5}}>
                            <a href={github} target="_blank">Github</a>
                        </figcaption>
                        <figcaption style={{position:"absolute", bottom:"10px", right:"5px", zIndex:5}}>
                             <a href={deployed} target="_blank">Demo</a>
                        </figcaption>
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