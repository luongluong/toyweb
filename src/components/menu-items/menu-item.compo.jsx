import React from 'react';

import './menu-item.style.scss';

//dynamically switch titles

const MenuItem = ({title, imageUrl}) =>(
    <div className='menu-item'>
       <div className = 'background-image'
    style ={{
        backgroundImage: `url(${imageUrl})`
    }} />
                <div className='content'>
                    <h1 className='title'>{title}</h1>
                    <span className='action'>View</span>
                </div>
            </div>
);

export default MenuItem;