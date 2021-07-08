import React from 'react';
import { getMatches } from '../APIServices';
import { Table } from 'react-bootstrap';
import Header from './header';
import "./leaguetable.css"

class LeagueTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: [],
            teams: []
        }
    }

    componentDidMount = () => {
        getMatches().then(res => {
            this.setState({
                matches: res.data
            })
            const allTeams = ["TOT", "RMA", "PSG", "ARS", "BAR", "JUV"];
            var teams = [];
            allTeams.forEach(oneTeam => {

                var team = {
                    name: '',
                    won: 0,
                    lost: 0,
                    draw: 0,
                    GF: 0,
                    GA: 0,
                    GD: 0,
                    points: 0
                }
                this.state.matches.map(match => {
                    if (match.HomeTeam === oneTeam || match.AwayTeam === oneTeam) {
                        team.name = oneTeam
                        if (match.HomeTeam === oneTeam) {
                            team.GF = team.GF + match.HomeScore;
                            team.GA = team.GA + match.AwayScore;
                            if (match.HomeScore > match.AwayScore) {
                                team.won = team.won + 1;
                            } else if (match.HomeScore === match.AwayScore) {
                                team.draw = team.draw + 1;
                            } else {
                                team.lost = team.lost + 1;
                            }
                        }

                        if (match.AwayTeam === oneTeam) {
                            team.GF = team.GF + match.AwayScore;
                            team.GA = team.GA + match.HomeScore;
                            if (match.HomeScore < match.AwayScore) {
                                team.won = team.won + 1;
                            } else if (match.HomeScore === match.AwayScore) {
                                team.draw = team.draw + 1;
                            } else {
                                team.lost = team.lost + 1;
                            }
                        }

                        team.GD = team.GF - team.GA;
                        team.points = (team.won * 3) + (team.draw);

                    }
                })

                teams.push(team);
                //console.log(this.state.teams)

            })
            teams.sort((a, b) => {
                // console.log(a.name + "("+ a.points + ")" + " and " + b.name + "("+ b.points + ")")
                if (a.points > b.points) {
                    return -1;
                }
                if (a.points < b.points) {
                    return 1;
                }
                return 0;
            });
            this.setState({ teams });
        });
       


    }

    render() {
        console.log(this.state.teams)
        return (
            <div>
                <Header />
                <div className="league-div">
                    <Table striped hover classname="table-league">
                        <thead style={{ fontSize: "1rem" }}>
                            <tr>
                                <th>Team Name</th>
                                <th>Played</th>
                                <th>Won</th>
                                <th>Draw</th>
                                <th>Lost</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>Points</th>
                            </tr>

                        </thead>
                        <tbody style={{ fontSize: ".75rem" }}>
                            {
                                this.state.teams.map(element => {
                                    console.log(element.name)
                                    var homeTeamFull = ''
                                    if (element.name === "RMA") {
                                        homeTeamFull = "Real Madrid"
                                    } else if (element.name === "PSG") {
                                        homeTeamFull = "Paris Saint Germain"
                                    } else if (element.name === "BAR") {
                                        homeTeamFull = "FC Barcelona"
                                    } else if (element.name === "JUV") {
                                        homeTeamFull = "Juventus"
                                    } else if (element.name === "TOT") {
                                        homeTeamFull = "Tottenhum Hotspurs"
                                    } else if (element.name === "ARS") {
                                        homeTeamFull = "Arsenal"
                                    }
                                    return (
                                        <tr>
                                            <td>{homeTeamFull}</td>
                                            <td>{element.won + element.lost + element.draw}</td>
                                            <td>{element.won}</td>
                                            <td>{element.draw}</td>
                                            <td>{element.lost}</td>
                                            <td>{element.GF}</td>
                                            <td>{element.GA}</td>
                                            <td>{element.GD}</td>
                                            <td>{element.points}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default LeagueTable;