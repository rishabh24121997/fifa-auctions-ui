import React from 'react';
import HeaderAdmin from './headerAdmin';
import {fifaPlayers, allMatches, getMatches} from "../APIServices";
import { Form, Row, Col, Button, Card, Table } from 'react-bootstrap';
import "./matches.css";

class Matches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FIFAPlayers: [],
            season: 1,
            matchData: []
        }
        this.handleChange = this.handleChange.bind(this)
    }


    

    componentDidMount = () => {
        getMatches().then(res => {
            this.setState({
                matchData: res.data
            })
        })
        this.state.matchData.forEach(match => {
            
        }) 

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

      onSubmit = () => {
          allMatches(this.state.homeTeam,this.state.awayTeam,this.state.homeScore,this.state.awayScore,this.state.season).then(res => {
                console.log(res)
          })
      }

    render() {
        return (
            <div className="matches">
                <HeaderAdmin />
                <div className="match-div" align="center">
                    <h6>Current Season: {this.state.season}</h6>
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
                                    <Col className="score-column">
                                        <Form.Group>
                                            <Form.Label>Home Score</Form.Label>
                                            <Form.Control className="form-score" onChange={this.handleChange} type="text" name="homeScore" value={this.state.homeScore}/>
                                        </Form.Group>
                                    </Col>
                                    <Col className="score-column">
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
                                    <Col className="button-submit">
                                        <Button variant="primary" type="submit" onClick={this.onSubmit} >
                                                Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </li>
                    </ul>
                </div>
                <div className="match-table">
                    <Card className="match-card">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Home Team</th>
                                <th>Home Score</th>
                                <th>Away Score</th>
                                <th>Away Team</th>
                                
                                </tr>
                            
                            </thead>
                            <tbody>
                            {
                                this.state.matchData.map(match => {
                                    var homeTeamFull = ""
                                    var awayTeamFull = ""
                                    console.log(match)
                                    if(match.HomeTeam === "RMA") {
                                        homeTeamFull = "Real Madrid"
                                    }else if(match.HomeTeam === "PSG") {
                                        homeTeamFull = "Paris Saint Germain"
                                    } else if(match.HomeTeam === "BAR") {
                                        homeTeamFull = "FC Barcelona"
                                    } else if(match.HomeTeam === "JUV") {
                                        homeTeamFull = "Juventus"
                                    } else if(match.HomeTeam === "TOT") {
                                        homeTeamFull = "Tottenhum Hotspurs"
                                    } else if(match.HomeTeam === "ARS") {
                                        homeTeamFull = "Arsenal"
                                    }
                            
                                    if(match.AwayTeam === "RMA") {
                                        awayTeamFull = "Real Madrid"
                                    }else if(match.AwayTeam === "PSG") {
                                        awayTeamFull = "Paris Saint Germain"
                                    } else if(match.AwayTeam === "BAR") {
                                        awayTeamFull = "FC Barcelona"
                                    } else if(match.AwayTeam === "JUV") {
                                        awayTeamFull = "Juventus"
                                    } else if(match.AwayTeam === "TOT") {
                                        awayTeamFull = "Tottenhum Hotspurs"
                                    } else if(match.AwayTeam === "ARS") {
                                        awayTeamFull = "Arsenal"
                                    }
                                    return (
                                        <tr>
                                        <td>{homeTeamFull}</td>
                                        <td className="score-td">{match.HomeScore}</td>
                                        <td className="score-td">{match.AwayScore}</td>
                                        <td>{awayTeamFull}</td>
                                    </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Matches;