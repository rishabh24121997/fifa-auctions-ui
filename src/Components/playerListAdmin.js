import React from 'react';
import { Table } from 'react-bootstrap';
import HeaderAdmin from "./headerAdmin";
import { PlayerAttribute } from './playerAttributes';
import { playerAttributes } from '../APIServices';
import "./playerList.css";
import PlayerModal from './playerModal';
import { Button } from 'react-bootstrap';
import { singlePlayerData } from '../APIServices';
import SearchField from "react-search-field";
import TransferModal from './transferModal.js';

class PlayerListAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role : '',
            modalOpen: false,
            transferModalOpen: false,
            PlayerAttribute: [],
            singlePlayer: [],
            playerName: '',
            user: sessionStorage.getItem("user")
        }
        this.handleChange = this.handleChange.bind(this)
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
            console.log(this.state.singlePlayer)
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

    handleChange(e) {
        console.log(e)
        this.setState({
           playerName : e
        })
    }

    openTransferModal = (player) => {
        singlePlayerData(player.Name).then(res => {
        
            this.setState({
                singlePlayer : res.data[0],
                transferModalOpen: true
            })
        })
    }

    closeTransferModal = () => {
        this.setState({
            transferModalOpen: false
        })
    }

    render() {
        if(this.state.user === "Admin") {
            return (
                <div className="all-players">
                    <HeaderAdmin />
                    <div className="search-playerlist">
                        <SearchField
                            placeholder="Search Player..."
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="table-playerlist">
                        <Table striped bordered hover>
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
                                    <th>Action</th>
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
                                        if(!this.state.playerName) {
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
                                                                Details
                                                            </Button>
                                                        </td>
                                                        <td>
                                                            <Button  onClick={() => {this.openTransferModal(player)}}>
                                                                Transfer
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
                                                                Details
                                                            </Button>
                                                        </td>
                                                        <td>
                                                            <Button  onClick={() => {this.openTransferModal(player)}}>
                                                                Transfer
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
                                                                Details
                                                            </Button>
                                                        </td>
                                                        <td>
                                                            <Button  onClick={() => {this.openTransferModal(player)}}>
                                                                Transfer
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
                                                                Details
                                                            </Button>
                                                        </td>
                                                        <td>
                                                            <Button  onClick={() => {this.openTransferModal(player)}}>
                                                                Transfer
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        } else {
                                            if(player.Name.toLowerCase().includes(this.state.playerName.toLowerCase())) {
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
                                                                    Details
                                                                </Button>
                                                            </td>
                                                            <td>
                                                            <Button  onClick={() => {this.openTransferModal(player)}}>
                                                                Transfer
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
                                                                    Details
                                                                </Button>
                                                            </td>
                                                            <td>
                                                            <Button  onClick={() => {this.openTransferModal(player)}}>
                                                                Transfer
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
                                                                    Details
                                                                </Button>
                                                            </td>
                                                            <td>
                                                            <Button  onClick={() => {this.openTransferModal(player)}}>
                                                                Transfer
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
                                                                    Details
                                                                </Button>
                                                            </td>
                                                            <td>
                                                            <Button  onClick={() => {this.openTransferModal(player)}}>
                                                                Transfer
                                                            </Button>
                                                        </td>
                                                        </tr>
                                                    )
                                                }
                                            }
                                        }
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                    <PlayerModal open={this.state.modalOpen} onClose={this.closeModal} player={this.state.singlePlayer}  center/>
                    <TransferModal open={this.state.transferModalOpen} onClose={this.closeTransferModal} player={this.state.singlePlayer}  center/>
                </div>
            )
        }
    }
}

export default PlayerListAdmin;