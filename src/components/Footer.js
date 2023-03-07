import React from "react";
import { Link } from 'react-router-dom';
import '../styles/footer.css';

export default function Footer() {

    const footerLinks = [
        {
            title: "Linked In",
            link: "https://www.linkedin.com/in/sean-bristol-lee-74001020/"
        },
        {
            title: "Github",
            link: "https://github.com/SeanBL"
        },
        {
            title: "Twitch",
            link: "https://www.twitch.tv/c6_mafia"
        }
    ]

    return (
        <footer className="footer">
            <div>
                {footerLinks.map(footerLink => {
                    const { title, link } = footerLink;
                
                    return (
                        
                        <a className="link" href={link} target="_blank">{title}</a>
                    )
                })}
            </div>
        </footer>
    )
}