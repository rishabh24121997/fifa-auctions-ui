import React from 'react';
import './home.css';
import {Container, Table} from 'react-bootstrap';
import Header from './header';
import {Squad, SquadGridColumns} from "./SquadProps";
import PlayerModal from './playerModal';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Squads extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalOpen: false,
            playerDetails: {}
        };
    }

    openModal = (player) => {
        this.setState({
            modalOpen: true
        })
        this.state.playerDetails = player
        console.log(this.state.playerDetails)
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
                <Container align= "center" >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>{SquadGridColumns.PlayerName}</th>
                        <th>{SquadGridColumns.Ovr}</th>
                        <th>{SquadGridColumns.Club}</th>
                        <th>{SquadGridColumns.Position}</th>
                        <th>{SquadGridColumns.Age}</th>
                        <th>{SquadGridColumns.PrefFoot}</th>
                        <th>{SquadGridColumns.WeakFoot}</th>
                        <th>{SquadGridColumns.Price}</th>
                        <th>Player Details</th>
                        </tr>
                    
                    </thead>
                    <tbody>
                    {
                        Squad.map(element => {
                            return (
                                <tr>
                                <td>{element.PlayerName}</td>
                                <td>{element.Ovr}</td>
                                <td>{element.Club}</td>
                                <td>{element.Position}</td>
                                <td>{element.Age}</td>
                                <td>{element.PrefFoot}</td>
                                <td>{element.WeakFoot}</td>
                                <td>{element.Price}</td>
                                <td>
                                    <Button  onClick={() => {this.openModal(element)}}>
                                        VIEW DETAILS
                                    </Button>
                                </td>
                            </tr>
                            )
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