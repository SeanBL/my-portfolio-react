import React from 'react';
import '../styles/navbar.css';


export default function Navbar({activeItem: activeItemId, changeItem, items}) {
    const activeItem = items.find((item) => {
        return item.id === activeItem;
    });
   
    return (
        <nav className='navbar container'>
            <div>
                {items.map(({item, id}) => {
                    return (<div 
                    key={id}
                    onClick={() => {
                        changeItem(id)
                    }}>
                    {item}    
                    </div>)
                })}
            </div>
            {activeItem && (
                <div>
                    {activeItem.content}
                </div>
            )}
        </nav>
    );
}
