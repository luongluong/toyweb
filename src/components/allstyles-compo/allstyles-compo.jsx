import React from 'react'
import './allstyles.style.scss';

const AllStyles = ({id,name,price,imageUrl}) =>(
    <div className='all-styles'>
        <div className='image'
                style={{backgroundImage: `url(${imageUrl})`}} 
        
        />

        <div className='name-and-price'>
            <span className='price'>  {price} </span>
            <span className='name'>  {name} </span>
      </div>
    </div>
)
export default AllStyles;