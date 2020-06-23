import React from 'react';

//render all Items to the shop page
// must be imported to shop page

const Allproducts =({title,items}) =>(
    
    <div className= 'AllProducts'>
        <h1 className='title'>{title}</h1>
        <div className='products'> 
            {   //mapping Items to the page
           items && items.map( (item) =>    
                <div key={item.id}>
                    {item.name}
                </div>
            )  
            }
        </div>
    </div>
);

export default Allproducts