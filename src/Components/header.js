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
                <Navbar>
                    <Navbar.Brand href="/home" style={{color:"#ffffff"}} className="navbar-brand-header">FIFA Auctions</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home" style={{color:"#ffffff"}}>Profile</Nav.Link>
                        <Nav.Link href="/squads" style={{color:"#ffffff"}}>Squad</Nav.Link>
                        <Nav.Link href="/transactions" style={{color:"#ffffff"}}>History</Nav.Link>
                        <Nav.Link href="/playerList" style={{color:"#ffffff"}}>All Players</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Header;