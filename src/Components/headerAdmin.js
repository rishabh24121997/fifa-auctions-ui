import React from 'react';
import './header.css';
import { Navbar, Nav } from 'react-bootstrap';

class HeaderAdmin extends React.Component{
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
                        <Nav.Link href="/matches" style={{color:"#ffffff"}}>Matches</Nav.Link>
                        <Nav.Link href="/league" style={{color:"#ffffff"}}>League Table</Nav.Link>
                        <Nav.Link href="/transactionsAdmin" style={{color:"#ffffff"}}>Transfers</Nav.Link>
                        <Nav.Link href="/playerListAdmin" style={{color:"#ffffff"}}>All Players</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default HeaderAdmin;