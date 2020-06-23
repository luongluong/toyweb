import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.style.scss';

//dynamically switch titles

const MenuItem = ({title, imageUrl,history,linkUrl,match }) =>(
    <div className='menu-item' 
    onClick={() => history.push(`${match.url}${linkUrl}`)} >
   
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

export default withRouter(MenuItem);