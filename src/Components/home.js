import React from 'react';
import {ReactComponent as RMA} from "../Assets/RMA.svg";
import './home.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Header from './header';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="home">
                <Header />
                <div className="body">
                    <div className="left">
                        <RMA className="team-icon"/>
                    </div>
                    <div className="right">

                    <Card className="card" align="center">
                        <Card.Header className="card-header">RISHABH SHARMA</Card.Header>
                        <Card.Body className="card-body">
                            <Card.Text>
                                <ul className="ul">
                                    <li><strong>Club :</strong> Real Madrid </li>
                                    <li><strong>Money :</strong> 250 </li>
                                    <li><strong>Last Season Performance :</strong> 1st </li>
                                </ul>
                            </Card.Text>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home