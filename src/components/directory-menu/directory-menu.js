import React, {Component} from 'react';
import Menuitem from '../menu-item/menu-item.js';
import './directory-menu.css';




class Directory extends Component{

	constructor() {
		super();

		this.state = {
			section:[
        {
          title: 'Sneakers',
          imageUrl: 'https://ibb.co/DVXJz8M',
          id: 1
        },
        {
          title: 'Perfumes',
          imageUrl: 'https://ibb.co/7213p4d',
          id: 2
        },
        {
          title: 'Glasses',
          imageUrl: 'https://ibb.co/PDLkH17',
          id: 3
        },
        {
          title: 'Jackets',
          imageUrl: 'https://ibb.co/rpdPYBz',
          size: 'large',
          id: 4
        },
        {
          title: 'Mens',
          imageUrl: 'https://ibb.co/f9LrRWR',
          size: 'large',
          id: 5
        },
        {
        	title: 'Accessories',
        	imageUrl: 'https://ibb.co/b3grg39',
        	size: 'Large',
        	id: 6
        },
        {
        	title: 'Women',
        	imageUrl: 'https://ibb.co/GkprBgw',
        	size: 'Large',
        	id: 7
        }
      ]
		}

	}
    

	render() {

		return (
      <div>
			   {this.state.section.map(({title,imageUrl}) =>
            <Menuitem title= {title}/>
          )}
         </div>
 
			)
	}
}

export default Directory;