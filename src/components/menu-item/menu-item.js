import React from 'react';
import Image from 'react-bootstrap/Image';
import './menu-item.css';
import Directory from '../directory-menu/directory-menu.js';


const Menuitem = ({title}) => {
	return (
          
	        <div className ="card">
                <div className ="card-body">
                   <h1>{title}</h1>
                   <div className ="display-image">
                      <Image src= '' fluid />
                   </div>
                </div>
            </div>
       
            )
         
}

export default Menuitem;