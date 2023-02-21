import React from 'react';
import '../styles/navbar.css';


export default function Navbar(props) {
   
    return (
        <nav className='navbar container'>
            {props.items.map(items => (
            <a className='navItems' key={items.id}>
                {items.item}
            </a>
            ))} 
        </nav>
    );
}
