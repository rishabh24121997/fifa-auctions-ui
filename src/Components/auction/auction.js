import React, { Component } from 'react';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import './auction.css';
import profile from '../../Assets/profile.jpg';

export default class Auction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fifaPlayers: [                
                {name: "Rishabh", team: "LIV", cash: 2500},
                {name: "Praveen", team: "MCI", cash: 3500},
                {name: "Vikas", team: "TOT", cash: 4500},
                {name: "Adwait", team: "RMA", cash: 7500},
                {name: "Aditya", team: "FCB", cash: 1000},
                {name: "Ajay", team: "BAR", cash: 2000},
                {name: "Rishabh", team: "LIV", cash: 2500},
                {name: "Praveen", team: "MCI", cash: 3500},
                {name: "Vikas", team: "TOT", cash: 4500},
                {name: "Adwait", team: "RMA", cash: 7500},
                {name: "Aditya", team: "FCB", cash: 1000},
                {name: "Ajay", team: "BAR", cash: 2000}
            ],
            player: {
                //Info
                Name: "C. Ronaldo dos Santos Aveiro",
                Overall: "40",
                Nationality: "Portugal",
                Position: "ST",
                Height: "180cm",
                Weight: "75kg",
                PrefferedFoot: "R",
                WeakFoot: "4",
                SkillMoves: "5",
                //Physical
                Pace: "100",
                Acceleration: "100",
                SprintSpeed: "100",
                Dribbling: "100",
                Agility: "100",
                Balance: "100",
                Reactions: "100",
                BallControl: "100",
                Composure: "100",
                //Attacking
                Shooting: "70",
                Positioning: "70",
                Finishing: "100",
                ShotPower: "100",
                LongShots: "100",
                Volleys: "100",
                Penalties: "100",
                //Passing
                Passing: "100",
                Vision: "100",
                Crossing: "100",
                FreeKick: "100",
                ShortPass: "100",
                LongPass: "60",
                PassCurve: "100",
                //Defending
                Defending: "10",
                Interceptions: "100",
                Heading: "30",
                Marking: "100",
                StandingTackle: "100",
                SlidingTackle: "100",
                Physicality: "100",
                Jumping: "50",
                Stamina: "100",
                Strength: "100",
                Aggression: "20",
                //GK
                Diving: "100",
                Reflexes: "100",
                Handling: "100",
                Speed: "100",
                Kicking: "100"
            }
        }
    }

    // checkPosition = (pos) => {
    //     if(pos === 'ST' || )
    // }

  render() {
    return (
      <div>
        <div className='row'>
            <div className='col-10 auction-page'>
                <div className='col-7'>
                    <Card>
                        <Card.Header>
                            {this.state.player.Name}
                        </Card.Header>
                        <Card.Body>
                            <div className='col-6'>
                                <span className={this.state.player.Overall > 80 ? 'overall green' : this.state.player.Overall < 50 ? 'overall red' : 'overall yellow'}>{this.state.player.Overall}</span>
                                <span className='position'>{this.state.player.Position}</span>
                                <span className='height'>{this.state.player.Height}</span>
                                <span className='weight'>{this.state.player.Weight}</span>
                            </div>
                            <div className='col-6'>
                                
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className='col-2 fifa-player-list row'>
                {this.state.fifaPlayers.map((player, index) => (
                        <div className='fifa-players' key={index}>
                            <Card>
                                <Card.Body className='row'>
                                    <div className='col-6' align='center'>
                                        <img 
                                            src={profile}
                                            height={40}
                                            width={40}
                                        />
                                        <Button variant='primary'>TEAM</Button>                                        
                                    </div>
                                    <div className='col-6' align='center'>   
                                        <span><strong>{player.name}</strong></span> <br />
                                        <span>{player.team}</span>  <br />                                   
                                        <span>{player.cash}</span> 
                                    </div>                                    
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='fifa-player-details'>
            <InputGroup>
                <FormControl
                    placeholder="Enter value..."
                    aria-label="Value"
                />
                <Button variant="primary" style={{marginLeft: '0'}}>BID</Button>
                <Button variant="primary">NEXT BID (1000)</Button>
                <Button variant="primary">RAISE DOUBLE (1100)</Button>
                <Button variant="primary">TEAM</Button>
            </InputGroup>
        </div>
      </div>
    )
  }
}
