import React from 'react';
import './home.css';
import {Container, Table} from 'react-bootstrap';
import Header from './header';
import {Squad, SquadGridColumns} from "./SquadProps"

export default class Squads extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
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
                            </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
                </Container>
            </div>
        )
    }


}