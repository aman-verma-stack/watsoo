import React, { Component } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../img/logo.jpg';

class NavBar extends Component {
    render() {
        return (
            <header className='header'>
                <Navbar className='header_back'>
                    <Navbar.Brand href="#home"><FontAwesomeIcon icon={faBars} /></Navbar.Brand>
                    <Nav className="mr-auto">
                        <img className='logo' src={Logo} alt="Logo" />
                    </Nav>
                    <Button className='custom_button logout_button' variant="outline-primary"><FontAwesomeIcon icon={faPowerOff} /> Logout</Button>
                </Navbar>
            </header>
        )
    }
}



export default NavBar;
