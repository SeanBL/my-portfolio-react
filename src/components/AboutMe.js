import React from "react";
import '../styles/aboutme.css'
// import profilePic from '../img/me.JPG'


export default function AboutMe() {
    return (
        <section className="container">
           
           <div className="picture">
                <div className="block"></div>
           </div>
            
            <div className="aboutMe">
                <div className="firstLine">
                    <a className="aboutLine">Hello, My name is<span className="name">Sean Bristol-Lee</span></a>   
                </div>
                
                <div className="aboutBody">
                    I have many years of experience as a national level competitive gymnast followed by years of experience as a martial artist, professional hip hop dancer, and runner. My interests in sports and live performance was also accompanied by an interest in film production and studies. I hold a bachelors and masters degree with several years of experience with production, post-production, and academia in film studies. 
                </div>
                <div className="aboutBody">
                    I spent 2 years as the sole caretaker for my father, and eventually returned to school to pursure a career in the health field. While working with patients in the hospital and studying for my degree, I developed an interest in programming as well as video games and began teaching myself how to write code. I even had the amazing opportunity to incorporate VR gaming as physical therapy for my patients. After earning my doctorate degree in physical therapy, I realized how much I loved programming and pursued a certificate in full stack web development. 
                </div>
                <div className="aboutBody">
                    All my life experiences have informed the kind of work I love doing. I have a passion for physical health and mental well-being, and I believe technology and gaming has the power to enhance and supplement quality of life.    
                </div>
            </div>
            

        </section>
    );
};