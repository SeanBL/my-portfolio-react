import React from "react";
import '../styles/resume.css';

export default function Resume() {
    return (
        <section>
            <div className="resumeContainer">
                <a href="myResume.pdf"
                    download="myResume.pdf">
                    <button className="downloadBtn">Download Resume</button>
                </a>
                <div className="proficiencies">
                    Front-end Proficiencies
                </div>
                <div className="list">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>MomentJS</li>
                        <li>React</li>
                        <li>Bootstrap, Pure</li>
                        <li>ChartJS</li>
                    </ul>
                </div>
                <div className="proficiencies">
                    Back-end Proficiencies
                </div>
                <div className="list">
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>Rest</li>
                        <li>GraphQl</li>
                    </ul>
                </div>
     
            </div>
        </section>
    );
};