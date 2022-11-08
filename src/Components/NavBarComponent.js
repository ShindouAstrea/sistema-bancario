import React from 'react';
import {Outlet,Link} from 'react-router-dom';
import {Nav,Navbar,Container} from 'react-bootstrap';
import '../Styles/navbar.css'
export default function NavBarComponent(){
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Sistema Bancario</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Item className='mr-5'>
                <Link className="links"to ="/">
                Inicio
                </Link>
                
            </Nav.Item>
            </Nav>
            <Nav>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Outlet/>
        </div>
    )
}