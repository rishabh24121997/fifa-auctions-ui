import React from 'react';
import './header.css';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state ={

        }
    }

    render() {
        return (
            <div className="header">
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">FIFA Auctions</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Profile</Nav.Link>
                        <Nav.Link href="#features">Squad</Nav.Link>
                        <Nav.Link href="#pricing">History</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Header;