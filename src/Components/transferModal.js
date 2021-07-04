import React from 'react';
import { Modal, Button, Col, Form } from 'react-bootstrap';
import {fifaPlayers, playerTransaction} from "../APIServices"

import "./transferModal.css";


class TransferModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PlayerAttribute: {},
            FIFAPlayers: [],
            playerName: '',
            playerPrice: '',
            playerFrom: '',
            playerTo: '',
            playerPosition: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate = (prevProps) => {
        if(prevProps !== this.props){
            fifaPlayers().then(res => {
                this.setState({
                    FIFAPlayers: res.data
                })
            })
    
            this.setState({
                playerName: this.props.player.Name,
                playerFrom: this.props.player.Team,
                playerPosition: this.props.player.Position
            })
        }
    }

    onSubmit = () => {
        
        playerTransaction(this.state.playerName, this.state.playerPrice, this.state.playerFrom, this.state.playerTo, this.state.playerPosition).then(res => {
            console.log(res)
        });
        this.props.onClose();
    }

    handleChange (e) {
        this.setState({
          [e.target.name]: e.target.value
        })
      }





    render() {
        // console.log(this.state.PlayerAttribute)
        const playerAtt = this.props.player;
        return(
            <Modal
                show = {this.props.open}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                dialogClassName="modal-50w"
                >
                <Modal.Header onClick={this.props.onClose} className="modal-header-player">
                    <Modal.Title id="contained-modal-title-vcenter">
                    TRANSFER PLAYER 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group controlId="playerName">
                            <Form.Label>Player Name</Form.Label>
                            <Form.Control name="playerName" type="text" placeholder={this.props.player.Name} readOnly />
                            </Form.Group>

                            <Form.Group controlId="playerFrom">
                            <Form.Label>From</Form.Label>
                            <Form.Control name="playerFrom" type="text" placeholder={this.props.player.Team} readOnly />
                            </Form.Group>

                            <Form.Group controlId="playerTo">
                            <Form.Label>Team</Form.Label>
                            <Form.Control onChange={this.handleChange} name="playerTo" as="select" defaultValue="Choose..." value={this.state.playerTo}>
                                <option>Choose Club..</option>
                                {this.state.FIFAPlayers.map(fifaPlayer => {
                                    return (
                                        <option>{fifaPlayer.ID}</option>
                                    )
                                })}
                            </Form.Control>
                            </Form.Group>

                            <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange={this.handleChange} type="text" name="playerPrice" value={this.state.playerPrice}/>
                            </Form.Group>
                        </Form.Row>

                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onClose}>Close</Button>
                    <Button variant="primary" type="submit" onClick={this.onSubmit}>
                            Submit
                        </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default TransferModal;