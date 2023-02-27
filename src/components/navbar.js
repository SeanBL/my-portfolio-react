import React from 'react';
import {useState} from 'react';
import '../styles/navbar.css';


export default function Navbar(props) {
    // function toggleHighlight(event) {
    //     // If you were toggling active class:
    //     // variableElement.classList.toggle("active")
    //     // $element.toggleClass("active")

    //     // Reset all actives
    //     let clicked = event.target;
    //     let isActive = clicked.classList.includes("active")
    //     document.querySelectorAll(".navItems a.active")
    //         .forEach(activeTab=>{
    //             activeTab.classList.remove("active")
    //         })

    //     if(isActive) {
    //         clicked.classList.remove("active")
    //     } else {
    //         clicked.classList.add("active");
    //     }
            
    //     event.stopPropagation();
    // }
   
    let [activeTab, setActiveTab] = useState(-1)

    return (
        <nav className='navbar'>
            {props.items.map((items,i) => (
            <a selected onClick={()=>setActiveTab(i)} className={['navItems', activeTab===i?"active":""].join(" ")} key={items.id}>
                {items.item}
            </a>
            ))} 
        </nav>
    );
}

// You can use map to give unique IDs to your projects. And you can do nth-index(1) or nth-index(even)

