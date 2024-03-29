import React from 'react';
import '../home/home.css';
import {Container, Table} from 'react-bootstrap';
import Header from '../header/header';
import {Squad, SquadGridColumns} from "./SquadProps";
import PlayerModal from '../playerModal/playerModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { squad, fifaPlayers, minusSalary, listPlayer } from '../../APIServices';
import { Card, Form, Button } from 'react-bootstrap';

export default class Squads extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalOpen: false,
            teamPlayers: [],
            playerDetails: {},
            FIFAPlayers: [],
            team: "",
            teamPrev: "",
            value: 0,
            role: '',
            GK: 0,
            DEF: 0,
            MID: 0,
            ATT: 0,
            playerCount: 0,
            owner: '',
            club: '',
            teamWorth: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount = () => {
        fifaPlayers().then(res => {
            this.setState({
                FIFAPlayers: res.data
            })
        })
    } 

    componentDidUpdate = () => {
       
        if(this.state.team !== this.state.teamPrev)  {
            squad(this.state.team).then(res => {
                let GK = 0
                let DEF = 0
                let MID = 0
                let ATT = 0
                let playerCount = 0
                let amount =  res.data.fifaPlayer[0].Money
                let teamWorth = 0
                res.data.rows.forEach((element) => {
                    playerCount = playerCount + 1
                    teamWorth = teamWorth + element.Price
                    if(element.Position === 'GK') {
                        GK = GK +1
                    } else if (element.Position === 'CB' || element.Position === 'LB' || element.Position === 'RB' || element.Position === 'LWB' || element.Position === 'RWB') {
                        DEF = DEF +1
                    }   else if (element.Position === 'CDM' || element.Position === 'LM' || element.Position === 'RM' || element.Position === 'CAM' || element.Position === 'RWM' || element.Position === 'LWM' || element.Position === 'CM') {
                        MID = MID +1
                    }   else if (element.Position === 'CF' || element.Position === 'LW' || element.Position === 'RW' || element.Position === 'ST' ) {
                        ATT = ATT +1
                    }
                })
                this.setState({
                    GK, DEF, MID, ATT, playerCount,  teamWorth,
                    value: amount,
                    teamPlayers: res.data.rows,
                    teamPrev: this.state.team,
                    value: amount,
                    owner: res.data.fifaPlayer[0].Name,
                    club: res.data.fifaPlayer[0].Club
                })
            })
        }
    }

    handleChange (e) {
        this.setState({
          [e.target.name]: e.target.value          
        })
        
      }

    minusSalaryMethod = () => {
        const data = {
            value: this.state.value,
            salary: this.state.teamWorth * 0.1,
            team: this.state.team
        }
        minusSalary(data).then((response) => {
            if(response) {
                window.location.reload()
            }
        })
    }

    lisPlayerMethod = (element) => {
        const data = {
            playerName: element.Name,
            price: this.state.value + element.Price,
            team: this.state.team
        }
        listPlayer(data).then((response) => {
            if(response) {
                // window.sessionStorage.setItem("team", this.state.team)
                window.location.reload()
            }
        })
    }

    openModal = (player) => {
        this.setState({
            modalOpen: true
        })
        this.state.playerDetails = player
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    render() {
        return(
            <div>
                <Header/>
                <Container align= "center">
                <div className="squad-main-div">
                    <div className="left-squad">                        
                        <p>
                            <span className='owner-text'><strong>Owner: </strong>{this.state.owner}</span><br /> <br />
                            <span className='owner-text'><strong>Club: </strong>{this.state.club}</span><br /> <br />
                            <span className='owner-text'><strong>Team Worth: </strong>{this.state.teamWorth}</span><br /> <br />
                            <span className='owner-text'><strong>Salary: </strong>{this.state.teamWorth * 0.1}</span><br /> <br />
                            <span className={this.state.value > 6500 ? "value green" : this.state.value < 3000 ? "value red" : "value yellow"}>{this.state.value}</span><br /> <br/>
                            <Button 
                                variant='danger'
                                onClick={this.minusSalaryMethod}
                            >Subtract Salary</Button>
                        </p>
                    </div>
                    <div className='right-squad'>
                        <Form>
                            <Form.Group controlId="playerTo">
                                    <Form.Label>Team</Form.Label>
                                    <Form.Control style={{display: "inline"}} onChange={this.handleChange} name="team" as="select" defaultValue="Choose..." value={this.state.team}>
                                        <option>Admin</option>
                                        {this.state.FIFAPlayers.map(fifaPlayer => {
                                            
                                            return (
                                                <option>{fifaPlayer.ID}</option>
                                            )
                                        })}
                                        
                                    </Form.Control>
                                </Form.Group>
                        </Form>
                        <p className='remaining-block'>
                            <span className="remaining-block-text">Remaining: {15 - this.state.playerCount >=0 ? 15 - this.state.playerCount : 0}</span><br />
                            <span className="remaining-block-text gk-text">GK: {2 - this.state.GK >=0 ? 2 - this.state.GK : 0}</span><br />
                            <span className="remaining-block-text def-text">DEF: {4 - this.state.DEF >=0 ? 4 - this.state.DEF : 0}</span><br />
                            <span className="remaining-block-text mid-text">MID: {3 - this.state.MID >=0 ? 3 - this.state.MID : 0}</span><br />
                            <span className="remaining-block-text att-text">ATT: {3 - this.state.ATT >=0 ? 3 - this.state.ATT : 0}</span>
                        </p>
                    </div>
                    {/* <br />
                    <div className="remaining-div">
                        
                    </div> */}
                </div>
                
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>{SquadGridColumns.Name}</th>
                        <th>{SquadGridColumns.Position}</th>
                        <th>{SquadGridColumns.Price}</th>
                        <th>Player Details</th>
                        <th>Action</th>
                        </tr>
                    
                    </thead>
                    <tbody>
                    {/* <td>{element.Name}</td>
                                <td>{element.Overall}</td>
                                <td>{element.Team}</td>
                                <td>{element.Position}</td>
                                <td>{element.Age}</td>
                                <td>{element.PrefferedFoot}</td>
                                <td>{element.WeakFoot}</td>
                                <td>{element.Price}</td>
                                 <td>
                                    <Button  onClick={() => {this.openModal(element)}}>
                                        VIEW DETAILS
                                    </Button>
                                </td>*/}
                    {
                        this.state.teamPlayers.map(element => {
                            if(element.Position === 'GK') {
                                this.state.role = 'GK'
                            } else if (element.Position === 'CB' || element.Position === 'LB' || element.Position === 'RB' || element.Position === 'LWB' || element.Position === 'RWB') {
                                this.state.role = 'DEF'
                            }   else if (element.Position === 'CDM' || element.Position === 'LM' || element.Position === 'RM' || element.Position === 'CAM' || element.Position === 'RWM' || element.Position === 'LWM' || element.Position === 'CM') {
                                this.state.role = 'MID'
                            }   else if (element.Position === 'CF' || element.Position === 'LW' || element.Position === 'RW' || element.Position === 'ST' ) {
                                this.state.role = 'ATT'
                            }
                            
                                if(this.state.role === "GK") {
                                    return (
                                        <tr className="gk-playerlist">
                                             <td>{element.Name}</td>
                                            <td>{element.Position}</td>
                                            <td>{element.Price}</td>
                                            <td>
                                                <Button  onClick={() => {this.openModal(element)}}>
                                                    VIEW DETAILS
                                                </Button>
                                            </td>
                                            <td>
                                                <Button  onClick={() => {this.lisPlayerMethod(element)}}>
                                                    LIST
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                } else if(this.state.role === "DEF") {
                                   
                                    return (
                                        <tr className="def-playerlist">
                                             <td>{element.Name}</td>
                                            <td>{element.Position}</td>
                                            <td>{element.Price}</td>
                                            <td>
                                                <Button  onClick={() => {this.openModal(element)}}>
                                                    VIEW DETAILS
                                                </Button>
                                            </td>
                                            <td>
                                                <Button  onClick={() => {this.lisPlayerMethod(element)}}>
                                                    LIST
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                } else if(this.state.role === "MID") {
                                    
                                    return (
                                        <tr className="mid-playerlist">
                                             <td>{element.Name}</td>
                                            <td>{element.Position}</td>
                                            <td>{element.Price}</td>
                                            <td>
                                                <Button  onClick={() => {this.openModal(element)}}>
                                                    VIEW DETAILS
                                                </Button>
                                            </td>
                                            <td>
                                                <Button  onClick={() => {this.lisPlayerMethod(element)}}>
                                                    LIST
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                } else if(this.state.role === "ATT") {
                                    return (
                                        <tr className="att-playerlist">
                                             <td>{element.Name}</td>
                                            <td>{element.Position}</td>
                                            <td>{element.Price}</td>
                                            <td>
                                                <Button  onClick={() => {this.openModal(element)}}>
                                                    VIEW DETAILS
                                                </Button>
                                            </td>
                                            <td>
                                                <Button  onClick={() => {this.lisPlayerMethod(element)}}>
                                                    LIST
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                }
                        })
                    }
                    </tbody>
                </Table>
                </Container>
                <PlayerModal open={this.state.modalOpen} onClose={this.closeModal} player={this.state.playerDetails}  center/>
            </div>
        )
    }


}