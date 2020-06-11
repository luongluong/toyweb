import React from 'react';

import MenuItem from '../menu-items/menu-item.compo';

import './directory.style.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state ={
            sections: [
                {
                    title: 'Marvel',
                    imageUrl: 'https://wallpapercave.com/wp/wp2700184.jpg',
                    id:1
                },
                
                {
                    title: 'DC',
                    imageUrl:'https://wallpapercave.com/wp/wp2319861.jpg',
                    id:2
                },

                {
                    title: 'Star Wars',
                    imageUrl:'https://wallpapercave.com/wp/4DuYKpW.jpg',
                    id:3
                },

                {
                    title: 'Dragon Ball Z',
                    imageUrl:'https://wallpapercave.com/wp/wp1970686.jpg',
                    id:4
                },

                {
                    title: 'Power Ranger',
                    imageUrl:'https://wallpapercave.com/wp/wp2190995.jpg',
                    id:5
                } ]
        }
    }

    render(){
        return(
            <div className='Directory'>
               { this.state.sections.map(({title,imageUrl,id}) =>(
                    <MenuItem key={id} title={title} imageUrl={imageUrl}/>
                ))}
            </div>
        )
    }
}

export default Directory;

