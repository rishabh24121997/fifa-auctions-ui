import React from 'react';
import HeaderAdmin from './headerAdmin';
import {fifaPlayers} from "../APIServices";
import { Form, Row, Col } from 'react-bootstrap';
import "./matches.css";

class Matches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FIFAPlayers: []
        }
    }

    componentDidMount = () => {
        fifaPlayers().then(res => {
            this.setState({
                FIFAPlayers: res.data
            })
        })
    }

    handleChange (e) {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    render() {
        return (
            <div className="matches">
                <HeaderAdmin />
                <div className="match-div" align="center">
                    <ul>
                        <li>
                            <Form className="match-form">
                                <Row>
                                    <Col>
                                        <Form.Group controlId="playerTo" className="form-team">
                                        <Form.Label>Home Team</Form.Label>
                                        <Form.Control onChange={this.handleChange} name="homeTeam" as="select" defaultValue="Choose..." value={this.state.homeTeam}>
                                            <option>Choose Club..</option>
                                            {this.state.FIFAPlayers.map(fifaPlayer => {
                                                return (
                                                    <option>{fifaPlayer.ID}</option>
                                                )
                                            })}
                                        </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Home Score</Form.Label>
                                            <Form.Control className="form-score" onChange={this.handleChange} type="text" name="homeScore" value={this.state.homeScore}/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Away Score</Form.Label>
                                            <Form.Control className="form-score" onChange={this.handleChange} type="text" name="awayScore" value={this.state.awayScore}/>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="playerTo" className="form-team">
                                            <Form.Label>Away Team</Form.Label>
                                            <Form.Control onChange={this.handleChange} name="awayTeam" as="select" defaultValue="Choose..." value={this.state.awayTeam}>
                                                <option>Choose Club..</option>
                                                {this.state.FIFAPlayers.map(fifaPlayer => {
                                                    return (
                                                        <option>{fifaPlayer.ID}</option>
                                                    )
                                                })}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Matches;