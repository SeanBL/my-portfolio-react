import React from "react";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../styles/footer.css';

export default function Footer() {

    const footerLinks = [
        {
            title: <FaLinkedin />,
            link: "https://www.linkedin.com/in/sean-bristol-lee-74001020/"
        },
        {
            title: <FaGithub />,
            link: "https://github.com/SeanBL"
        },
        {
            title: <FaTwitch />,
            link: "https://www.twitch.tv/c6_mafia"
        }
    ]

    return (
        <footer className="footer">
            <div>
                {footerLinks.map(footerLink => {
                    const { title, link } = footerLink;
                
                    return (
                        <IconContext.Provider value={{ color: "white", size: "50px", className: "links"}}>
                            <a className="link" href={link} target="_blank">{title}</a>
                        </IconContext.Provider>
                        
                    )
                })}
            </div>
        </footer>
    )
}