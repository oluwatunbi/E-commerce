import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Menuitem from '../../components/menu-item/menu-item.js';
import './bootMenu.css';


const Bootmenu = () => {

	return (

		 <Container fluid className="p-5">
           <Row>
             <Col lg = {12}>
               <Row gx ={2}> 
                    <Col  className ="gutter" lg={3}>
                       <Menuitem/>
                     </Col>
                     <Col className ="gutter" lg ={3}>
                       <Menuitem/>
                     </Col>
                     <Col className ="gutter" lg ={3}>
                        <Menuitem/>
                     </Col>
                     <Col className ="gutter" lg ={3}>
                         <Menuitem/>
                     </Col>
               </Row>         

               <Row className ="mt-3">
                     <Col className ="gutter" lg ={4}>
                        <Menuitem/>
                     </Col>
                     <Col className ="gutter" lg ={4}>
                        <Menuitem/>
                     </Col>
                     <Col className ="gutter" lg ={4}>
                         <Menuitem/>
                     </Col> 
               </Row>
             </Col>
           </Row>
         </Container>

		)

}

export default Bootmenu;