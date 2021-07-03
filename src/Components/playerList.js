import React from 'react';
import { Table } from 'react-bootstrap';
import Header from "./header.js";
import { PlayerAttribute } from './playerAttributes';
import { playerAttributes } from '../APIServices';

class PlayerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        const getPlayers = playerAttributes();
        console.log(getPlayers)
    } 

    render() {
        return (
            <div className="all-players">
                <Header />
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            PlayerAttribute.map(player => {
                                return (
                                    <tr>
                                        <td>{player.Name}</td>
                                        <td>{player.Overall}</td>
                                        <td>{player.Position}</td>
                                        <td>{player.Nationality}</td>
                                        <td>{player.Height}</td>
                                        <td>{player.Weight}</td>
                                        <td>{player.PrefferedFoot}</td>
                                        <td>{player.WeakFoot}</td>
                                        <td>{player.SkillMoves}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default PlayerList;