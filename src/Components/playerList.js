import React from 'react';
import { Table } from 'react-bootstrap';
import Header from "./header.js";
import { PlayerAttribute } from './playerAttributes';
import { playerAttributes } from '../APIServices';
import "./playerList.css";
import PlayerModal from './playerModal';
import { Button } from 'react-bootstrap';
import { singlePlayerData } from '../APIServices';

class PlayerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role : '',
            modalOpen: false,
            PlayerAttribute: [],
            singlePlayer: []
        }
    }

    componentDidMount = () => {
        playerAttributes().then(res => {
            this.setState({
                PlayerAttribute: res.data
            })
        })
        
    } 

    openModal = (player) => {
        singlePlayerData(player.Name).then(res => {
            this.setState({
                singlePlayer : res.data[0]
            })
        })
        this.setState({
            modalOpen: true
        })
        
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    render() {
        return (
            <div className="all-players">
                <Header />
                <div className="table-playerlist">
                    <Table  classname="table-playerlist" striped bordered hover>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Overall</th>
                                <th>Position</th>
                                <th>Nationality</th>
                                <th>Height</th>
                                <th>Weight</th>
                                <th>Preffered Foot</th>
                                <th>Weak Foot</th>
                                <th>Skill Moves</th>
                                <th>Player Attributes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.PlayerAttribute.map(player => {
                                    if(player.Position == 'GK') {
                                        this.state.role = 'GK'
                                    } else if (player.Position == 'CB' || player.Position == 'LB' || player.Position == 'RB' || player.Position == 'LWB' || player.Position == 'RWB') {
                                        this.state.role = 'DEF'
                                    }   else if (player.Position == 'CDM' || player.Position == 'LM' || player.Position == 'RM' || player.Position == 'CAM' || player.Position == 'RWM' || player.Position == 'LWM') {
                                        this.state.role = 'MID'
                                    }   else if (player.Position == 'CF' || player.Position == 'LW' || player.Position == 'RW' || player.Position == 'ST' ) {
                                        this.state.role = 'ATT'
                                    }
                                    if(this.state.role === "GK") {
                                        return (
                                            <tr className="gk-playerlist">
                                                <td>{player.Name}</td>
                                                <td>{player.Overall}</td>
                                                <td>{player.Position}</td>
                                                <td>{player.Nationality}</td>
                                                <td>{player.Height}</td>
                                                <td>{player.Weight}</td>
                                                <td>{player.PrefferedFoot}</td>
                                                <td>{player.WeakFoot}</td>
                                                <td>{player.SkillMoves}</td>
                                                <td>
                                                    <Button  onClick={() => {this.openModal(player)}}>
                                                        VIEW DETAILS
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    } else if(this.state.role === "DEF") {
                                        return (
                                            <tr className="def-playerlist">
                                                <td>{player.Name}</td>
                                                <td>{player.Overall}</td>
                                                <td>{player.Position}</td>
                                                <td>{player.Nationality}</td>
                                                <td>{player.Height}</td>
                                                <td>{player.Weight}</td>
                                                <td>{player.PrefferedFoot}</td>
                                                <td>{player.WeakFoot}</td>
                                                <td>{player.SkillMoves}</td>
                                                <td>
                                                    <Button  onClick={() => {this.openModal(player)}}>
                                                        VIEW DETAILS
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    } else if(this.state.role === "MID") {
                                        return (
                                            <tr className="mid-playerlist">
                                                <td>{player.Name}</td>
                                                <td>{player.Overall}</td>
                                                <td>{player.Position}</td>
                                                <td>{player.Nationality}</td>
                                                <td>{player.Height}</td>
                                                <td>{player.Weight}</td>
                                                <td>{player.PrefferedFoot}</td>
                                                <td>{player.WeakFoot}</td>
                                                <td>{player.SkillMoves}</td>
                                                <td>
                                                    <Button  onClick={() => {this.openModal(player)}}>
                                                        VIEW DETAILS
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    } else if(this.state.role === "ATT") {
                                        return (
                                            <tr className="att-playerlist">
                                                <td>{player.Name}</td>
                                                <td>{player.Overall}</td>
                                                <td>{player.Position}</td>
                                                <td>{player.Nationality}</td>
                                                <td>{player.Height}</td>
                                                <td>{player.Weight}</td>
                                                <td>{player.PrefferedFoot}</td>
                                                <td>{player.WeakFoot}</td>
                                                <td>{player.SkillMoves}</td>
                                                <td>
                                                    <Button  onClick={() => {this.openModal(player)}}>
                                                        VIEW DETAILS
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </Table>
                </div>
                <PlayerModal open={this.state.modalOpen} onClose={this.closeModal} player={this.state.singlePlayer}  center/>
            </div>
        )
    }
}

export default PlayerList;