import React from 'react';

import './allproducts.style.scss';
import AllStyles from '../allstyles-compo/allstyles-compo';

//render all  Items in html to the shop page
// must be imported to shop page

const Allproducts =({title,items}) =>(
    
    <div className= 'AllProducts'>
        <h1 className='title'>{title}</h1>
        <div className='products'> 
            {   //mapping Items to the page

           items && items
           .filter((items,idx)=> idx<5)
           .map( ({id, ...ItemsProps}) =>    
                <AllStyles key={id}{...ItemsProps}/>
            )  
            }
        </div>
    </div>
);

export default Allproducts