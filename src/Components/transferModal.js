import React from 'react';
import { Modal, Button, Col, Form } from 'react-bootstrap';
import {fifaPlayers, singlePlayerData} from "../APIServices"

import "./transferModal.css";


class TransferModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PlayerAttribute: {},
            FIFAPlayers: []
        }
    }

    componentDidMount = () => {
        fifaPlayers().then(res => {
            this.setState({
                FIFAPlayers: res.data
            })
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
                dialogClassName="modal-80w"
                >
                <Modal.Header onClick={this.props.onClose} className="modal-header-player">
                    <Modal.Title id="contained-modal-title-vcenter">
                    TRANSFER PLAYER 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group controlId="formGridCity">
                            <Form.Label>Player Name</Form.Label>
                            <Form.Control type="text" placeholder={this.props.player.Name} readOnly />
                            </Form.Group>

                            <Form.Group controlId="formGridState">
                            <Form.Label>Team</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Choose Club..</option>
                                {this.state.FIFAPlayers.map(fifaPlayer => {
                                    return (
                                        <option>{fifaPlayer.Club}</option>
                                    )
                                })}
                            </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formGridZip">
                            <Form.Label>Price</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onClose}>Close</Button>
                    <Button variant="primary" type="submit">
                            Submit
                        </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default TransferModal;