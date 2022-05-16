import React from 'react';
import {ReactComponent as RMA} from "../../Assets/RMA.svg";
import './home.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Header from '../header/header';
import LeagueTable from '../leagueTable/leagueTable';
import { getTeamPlayers, updateFifaPlayerData } from '../../APIServices';
import HeaderAdmin from '../header/headerAdmin';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "home",
            fifaPlayer: sessionStorage.getItem("user"),
            playerName: '',
            club: '',
            footballers: [],
            teamWorth: 0,
            salary: 0,
            money: 10000
        }
    }

    componentDidMount = () => {
        if(this.state.fifaPlayer === "RMA") {
            this.state.club = "Real Madrid"
        }else if(this.state.fifaPlayer === "PSG") {
            this.state.club = "Paris Saint Germain"
        } else if(this.state.fifaPlayer === "BAR") {
            this.state.club = "FC Barcelona"
        } else if(this.state.fifaPlayer === "JUV") {
            this.state.club = "Juventus"
        } else if(this.state.fifaPlayer === "TOT") {
            this.state.club = "Tottenhum Hotspurs"
        } else if(this.state.fifaPlayer === "ARS") {
            this.state.club = "Arsenal"
        }
        getTeamPlayers(this.state.fifaPlayer).then(res => {
            this.setState({
                footballers: res.data
            })
            var teamWorth = 0;
            this.state.footballers.forEach(footballer => {
                teamWorth = teamWorth + footballer.Price
            });
            var salary = teamWorth * .2;
            this.setState({
                salary: salary,
                teamWorth: teamWorth,
                money: this.state.money - teamWorth
            })
        })
        updateFifaPlayerData(this.state.fifaPlayer, this.state.money, this.state.teamWorth, this.state.salary).then(res => {
            console.log(res.data)
        })
    }

    render() {
        if(this.state.fifaPlayer === "Admin") {
            return (
                <div className="home">
                    <HeaderAdmin />
                    <div className="body">
                        <div className="left">
                            <RMA className="team-icon"/>
                        </div>
                        <div className="right">
    
                        <Card className="card-home" align="center">
                            <Card.Header className="card-header-home">RISHABH SHARMA</Card.Header>
                            <Card.Body className="card-body-home">
                                <Card.Text>
                                    <div className="card-text">
                                        <div className="card-left">
                                            <ul className="ul-home">
                                                <li><strong>Club :</strong> {this.state.club} </li>
                                                <li><strong>Money :</strong> {this.state.money} </li>
                                                <li><strong>Current Rank :</strong> 1st </li>
                                            </ul>
                                        </div>
                                        <div className="card-right">
                                            <ul className="ul-home">
                                            <li><strong>Team Worth :</strong> {this.state.teamWorth}</li>
                                        <li><strong>Salary :</strong> {this.state.salary} </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Card.Text>
                                <Button variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                    <div className="details">
                        <div className="left-bot">
                            <LeagueTable page={this.state.page}/>
                        </div>
                        <div className="right-bot">
                            Head-to-Head
                        </div>
                    </div>
                </div>
                
            );
        } else {
            return (
                <div className="home">
                    <Header />
                    <div className="body">
                        <div className="left">
                            <RMA className="team-icon"/>
                        </div>
                        <div className="right">
    
                        <Card className="card-home" align="center">
                            <Card.Header className="card-header-home">RISHABH SHARMA</Card.Header>
                            <Card.Body className="card-body-home">
                                <Card.Text>
                                    <div className="card-text">
                                        <div className="card-left">
                                            <ul className="ul-home">
                                                <li><strong>Club :</strong> {this.state.club} </li>
                                                <li><strong>Money :</strong> {this.state.money} </li>
                                                <li><strong>Current Rank :</strong> 1st </li>
                                            </ul>
                                        </div>
                                        <div className="card-right">
                                            <ul className="ul-home">
                                            <li><strong>Team Worth :</strong> {this.state.teamWorth}</li>
                                        <li><strong>Salary :</strong> {this.state.salary} </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Card.Text>
                                <Button variant="primary">View Details</Button>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                    <div className="details">
                        <div className="left-bot">
                            <LeagueTable page={this.state.page}/>
                        </div>
                        <div className="right-bot">
                            Head-to-Head
                        </div>
                    </div>
                </div>
                
            );
        }
    }
}

export default Home;