import React from "react";
import Navbar from "./navbar";

const items = [ 
    {
        id: 1,
        item: "About Me"
    },
    {
        id: 2,
        item: "Projects"
    },
    {
        id: 3,
        item: "Contact"
    },
    {
        id: 4,
        item: "Resume"
    }
];

export default function Header() {
    return (
        <header>
            <Navbar items={items} />
        </header>
    )
};