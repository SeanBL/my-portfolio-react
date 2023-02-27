import React from "react";
import '../styles/resume.css';

export default function Resume() {
    return (
        <section>
            <div className="downloadLink">
                <a href="myResume.pdf"
                    download="myResume.pdf">
                    <button>Resume</button>
                </a>
                
            </div>
            
        </section>
    );
};