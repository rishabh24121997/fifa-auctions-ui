import React from 'react';
import { PlayerAttribute } from './playerAttributes';
import { Modal, Button, Card } from 'react-bootstrap';
import { playerAttributes } from '../APIServices';
import "./playerModal.css";


class PlayerModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount = () => {
        const getPlayer = playerAttributes(this.props.player.PlayerName);
        console.log(getPlayer)
    } 


    render() {
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
                    {this.props.player.PlayerName} 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                    PlayerAttribute.map(playerAtt => {
                        if(playerAtt.Name === this.props.player.PlayerName) {
                            return(
                                <div className="player-attributes">
                                    <div className="player-info">
                                        <h5 className="header-6">Player Information</h5>
                                        <ul className="ul-modal">
                                            <li><strong>Overall :</strong> <span className={playerAtt.Overall > 80 ? "green" : playerAtt.Overall < 50 ? "red" : "yellow"}>{playerAtt.Overall}</span></li>
                                            <li><strong>Nationality :</strong> {playerAtt.Nationality}</li>
                                            <li><strong>Position :</strong> {playerAtt.Position}</li>
                                            <li><strong>Height :</strong> {playerAtt.Height}</li>
                                            <li><strong>Weight :</strong> {playerAtt.Weight}</li>
                                            <li><strong>Preffered Foot :</strong> {playerAtt.PrefferedFoot}</li>
                                            <li><strong>Weak Foot :</strong> {playerAtt.WeakFoot}</li>
                                            <li><strong>Skill Moves :</strong> {playerAtt.SkillMoves}</li>
                                        </ul>
                                    </div>
                                    <div className="player-info">
                                        <h5 className="header-6">Physical Attributes</h5>
                                        <ul className="ul-modal">
                                            <li><strong>Pace :</strong> <span className={playerAtt.Pace > 80 ? "green" : playerAtt.Pace < 50 ? "red" : "yellow"}>{playerAtt.Pace}</span></li>
                                            <li><strong>Acceleration :</strong> <span className={playerAtt.Acceleration > 80 ? "green" : playerAtt.Acceleration < 50 ? "red" : "yellow"}>{playerAtt.Acceleration}</span></li>
                                            <li><strong>Sprint Speed :</strong> <span className={playerAtt.SprintSpeed > 80 ? "green" : playerAtt.SprintSpeed < 50 ? "red" : "yellow"}>{playerAtt.SprintSpeed}</span></li>
                                            <li><strong>Dribbling :</strong> <span className={playerAtt.Dribbling > 80 ? "green" : playerAtt.Dribbling < 50 ? "red" : "yellow"}>{playerAtt.Dribbling}</span></li>
                                            <li><strong>Agility :</strong> <span className={playerAtt.Agility > 80 ? "green" : playerAtt.Agility < 50 ? "red" : "yellow"}>{playerAtt.Agility}</span></li>
                                            <li><strong>Balance :</strong> <span className={playerAtt.Balance > 80 ? "green" : playerAtt.Balance < 50 ? "red" : "yellow"}>{playerAtt.Balance}</span></li>
                                            <li><strong>Reactions :</strong> <span className={playerAtt.Reactions > 80 ? "green" : playerAtt.Reactions < 50 ? "red" : "yellow"}>{playerAtt.Reactions}</span></li>
                                            <li><strong>Ball Control :</strong> <span className={playerAtt.BallControl > 80 ? "green" : playerAtt.BallControl < 50 ? "red" : "yellow"}>{playerAtt.BallControl}</span></li>
                                            <li><strong>Composure :</strong> <span className={playerAtt.Composure > 80 ? "green" : playerAtt.Composure < 50 ? "red" : "yellow"}>{playerAtt.Composure}</span></li>
                                            <li><strong>Stamina :</strong> <span className={playerAtt.Stamina > 80 ? "green" : playerAtt.Stamina < 50 ? "red" : "yellow"}>{playerAtt.Stamina}</span></li>
                                            <li><strong>Strength :</strong> <span className={playerAtt.Strength > 80 ? "green" : playerAtt.Strength < 50 ? "red" : "yellow"}>{playerAtt.Strength}</span></li>
                                        </ul>
                                    </div>
                                    <div className="player-info">
                                        <h5 className="header-6">Attacking Attributes</h5>
                                        <ul className="ul-modal">
                                            <li><strong>Shooting :</strong> <span className={playerAtt.Shooting > 80 ? "green" : playerAtt.Shooting < 50 ? "red" : "yellow"}>{playerAtt.Shooting}</span></li>
                                            <li><strong>Positioning :</strong> <span className={playerAtt.Positioning > 80 ? "green" : playerAtt.Positioning < 50 ? "red" : "yellow"}>{playerAtt.Positioning}</span></li>
                                            <li><strong>Finishing :</strong> <span className={playerAtt.Finishing > 80 ? "green" : playerAtt.Finishing < 50 ? "red" : "yellow"}>{playerAtt.Finishing}</span></li>
                                            <li><strong>Shot Power :</strong> <span className={playerAtt.ShotPower > 80 ? "green" : playerAtt.ShotPower < 50 ? "red" : "yellow"}>{playerAtt.ShotPower}</span></li>
                                            <li><strong>LongShots :</strong> <span className={playerAtt.LongShots > 80 ? "green" : playerAtt.LongShots < 50 ? "red" : "yellow"}>{playerAtt.LongShots}</span></li>
                                            <li><strong>Volleys :</strong> <span className={playerAtt.Volleys > 80 ? "green" : playerAtt.Volleys < 50 ? "red" : "yellow"}>{playerAtt.Volleys}</span></li>
                                            <li><strong>Penalties :</strong> <span className={playerAtt.Penalties > 80 ? "green" : playerAtt.Penalties < 50 ? "red" : "yellow"}>{playerAtt.Penalties}</span></li>
                                        </ul>
                                    </div>
                                    <div className="player-info">
                                        <h5 className="header-6">Team Play Attributes</h5>
                                        <ul className="ul-modal">
                                            <li><strong>Passing :</strong> <span className={playerAtt.Passing > 80 ? "green" : playerAtt.Passing < 50 ? "red" : "yellow"}>{playerAtt.Passing}</span></li>
                                            <li><strong>Vision :</strong> <span className={playerAtt.Vision > 80 ? "green" : playerAtt.Vision < 50 ? "red" : "yellow"}>{playerAtt.Vision}</span></li>
                                            <li><strong>Crossing :</strong> <span className={playerAtt.Crossing > 80 ? "green" : playerAtt.Crossing < 50 ? "red" : "yellow"}>{playerAtt.Crossing}</span></li>
                                            <li><strong>Free Kick :</strong> <span className={playerAtt.FreeKick > 80 ? "green" : playerAtt.FreeKick < 50 ? "red" : "yellow"}>{playerAtt.FreeKick}</span></li>
                                            <li><strong>Short Pass :</strong> <span className={playerAtt.ShortPass > 80 ? "green" : playerAtt.ShortPass < 50 ? "red" : "yellow"}>{playerAtt.ShortPass}</span></li>
                                            <li><strong>Long Pass :</strong> <span className={playerAtt.LongPass > 80 ? "green" : playerAtt.LongPass < 50 ? "red" : "yellow"}>{playerAtt.LongPass}</span></li>
                                            <li><strong>Pass Curve :</strong> <span className={playerAtt.PassCurve > 80 ? "green" : playerAtt.PassCurve < 50 ? "red" : "yellow"}>{playerAtt.PassCurve}</span></li>
                                        </ul>
                                    </div>
                                    <div className="player-info">
                                        <h5 className="header-6">Team Play Attributes</h5>
                                        <ul className="ul-modal">
                                            <li><strong>Defending :</strong> <span className={playerAtt.Defending > 80 ? "green" : playerAtt.Defending < 50 ? "red" : "yellow"}>{playerAtt.Defending}</span></li>
                                            <li><strong>Interceptions :</strong> <span className={playerAtt.Interceptions > 80 ? "green" : playerAtt.Interceptions < 50 ? "red" : "yellow"}>{playerAtt.Interceptions}</span></li>
                                            <li><strong>Heading :</strong> <span className={playerAtt.Heading > 80 ? "green" : playerAtt.Heading < 50 ? "red" : "yellow"}>{playerAtt.Heading}</span></li>
                                            <li><strong>Marking :</strong> <span className={playerAtt.Marking > 80 ? "green" : playerAtt.Marking < 50 ? "red" : "yellow"}>{playerAtt.Marking}</span></li>
                                            <li><strong>Standing Tackle :</strong> <span className={playerAtt.StandingTackle > 80 ? "green" : playerAtt.StandingTackle < 50 ? "red" : "yellow"}>{playerAtt.StandingTackle}</span></li>
                                            <li><strong>Sliding Tackle :</strong> <span className={playerAtt.SlidingTackle > 80 ? "green" : playerAtt.SlidingTackle < 50 ? "red" : "yellow"}>{playerAtt.SlidingTackle}</span></li>
                                            <li><strong>Physicality :</strong> <span className={playerAtt.Physicality > 80 ? "green" : playerAtt.Physicality < 50 ? "red" : "yellow"}>{playerAtt.Physicality}</span></li>
                                            <li><strong>Jumping :</strong> <span className={playerAtt.Jumping > 80 ? "green" : playerAtt.Jumping < 50 ? "red" : "yellow"}>{playerAtt.Jumping}</span></li>
                                            <li><strong>Aggression :</strong> <span className={playerAtt.Aggression > 80 ? "green" : playerAtt.Aggression < 50 ? "red" : "yellow"}>{playerAtt.Aggression}</span></li>
                                        </ul>
                                    </div>
                                    <div className="player-info">
                                        <h5 className="header-6">GoalKeeping Attributes</h5>
                                        <ul className="ul-modal">
                                            <li><strong>Diving :</strong> <span className={playerAtt.Diving > 80 ? "green" : playerAtt.Diving < 50 ? "red" : "yellow"}>{playerAtt.Diving}</span></li>
                                            <li><strong>Reflexes :</strong> <span className={playerAtt.Reflexes > 80 ? "green" : playerAtt.Reflexes < 50 ? "red" : "yellow"}>{playerAtt.Reflexes}</span></li>
                                            <li><strong>Handling :</strong> <span className={playerAtt.Handling > 80 ? "green" : playerAtt.Handling < 50 ? "red" : "yellow"}>{playerAtt.Handling}</span></li>
                                            <li><strong>Speed :</strong> <span className={playerAtt.Speed > 80 ? "green" : playerAtt.Speed < 50 ? "red" : "yellow"}>{playerAtt.Speed}</span></li>
                                            <li><strong>Kicking :</strong> <span className={playerAtt.Kicking > 80 ? "green" : playerAtt.Kicking < 50 ? "red" : "yellow"}>{playerAtt.Kicking}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default PlayerModal;