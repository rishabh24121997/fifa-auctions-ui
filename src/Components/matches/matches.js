import React from 'react';
import Header from '../header/header';
import {fifaPlayers, allMatches, getMatches,deleteMatch, updateMatch} from "../../APIServices";
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

        fifaPlayers().then(res => {
            this.setState({
                FIFAPlayers: res.data
            })
        })
    }

    
    matchDelete = (matchID) => {
        deleteMatch(matchID).then(res => {
            
        })
        window.location.reload()
    }


    handleChange (e) {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      onSubmit = () => {
          allMatches(this.state.homeTeam,this.state.awayTeam,this.state.homeScore,this.state.awayScore,this.state.season).then(res => {
                
          })
      }

    render() {
        return (
            <div className="matches">
                <Header />
                   
                
                <div className="match-table">
                    <h6>Current Season: {this.state.season}</h6>
                    <Card className="match-card">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Home Team</th>
                                <th>Score</th>
                                
                                <th>Away Team</th>
                                {/* <th>Action</th> */}
                                </tr>
                            
                            </thead>
                            <tbody>
                            {
                                this.state.matchData.map(match => {
                                    var homeTeamFull = ""
                                    var awayTeamFull = ""
                                    
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
                                        <td><span className={match.HomeScore > match.AwayScore ? "team-bold" : match.HomeScore === match.AwayScore ? "team-italics": null}>{homeTeamFull}</span></td>
                                        <td className="score-td">{match.HomeScore}-{match.AwayScore}</td>
                                        <td><span className={match.HomeScore < match.AwayScore ? "team-bold" : match.HomeScore === match.AwayScore ? "team-italics": null}>{awayTeamFull}</span></td>
                                        {/* <td>
                                            <Button onClick={() => {this.matchDelete(match.MatchID)}}>
                                                            Delete
                                            </Button>
                                        </td> */}
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