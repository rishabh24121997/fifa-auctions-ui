import React, { Component } from 'react';
import { Button, Card, FormControl, InputGroup, Form } from 'react-bootstrap';
import './auction.css';
import profile from '../../Assets/profile.jpg';
import { fifaPlayers, auctionPlayer, playerTransaction } from '../../APIServices';
import Header from '../header/header';
import PlayerModal from '../playerModal/playerModal';

export default class Auction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fifaPlayers: [],
            roles: ['GK','DEF','MID','ATT'],
            role: '',
            rank: 0,
            rankPrev: 0,
            bid: 0,
            bidder: '',
            bidderPrev: 'new',
            timer: 10,
            startCount: false,
            player: {
                //Info
                // Name: "C. Ronaldo dos Santos Aveiro",
                // Overall: "40",
                // Nationality: "Portugal",
                // Position: "ST",
                // Height: "180cm",
                // Weight: "75kg",
                // PrefferedFoot: "R",
                // WeakFoot: "4",
                // SkillMoves: "5",
                // //Physical
                // Pace: "100",
                // Acceleration: "100",
                // SprintSpeed: "100",
                // Dribbling: "100",
                // Agility: "100",
                // Balance: "100",
                // Reactions: "100",
                // BallControl: "100",
                // Composure: "100",
                // //Attacking
                // Shooting: "70",
                // Positioning: "70",
                // Finishing: "100",
                // ShotPower: "100",
                // LongShots: "100",
                // Volleys: "100",
                // Penalties: "100",
                // //Passing
                // Passing: "100",
                // Vision: "100",
                // Crossing: "100",
                // FreeKick: "100",
                // ShortPass: "100",
                // LongPass: "60",
                // PassCurve: "100",
                // //Defending
                // Defending: "10",
                // Interceptions: "100",
                // Heading: "30",
                // Marking: "100",
                // StandingTackle: "100",
                // SlidingTackle: "100",
                // Physicality: "100",
                // Jumping: "50",
                // Stamina: "100",
                // Strength: "100",
                // Aggression: "20",
                // //GK
                // Diving: "100",
                // Reflexes: "100",
                // Handling: "100",
                // Speed: "100",
                // Kicking: "100"
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (e) {
        const body = { 
            role: e.target.value,
            rank: this.state.rank
        }
        auctionPlayer(body).then((response) => {
            this.setState({
                [e.target.name]: e.target.value,
                player: response.data[0],
                rank: 0        
              })
        })
      }
    
    nextPlayer = () => {
        this.setState({
            rank: this.state.rank + 2
        })
    }

    componentDidMount = () => {
        fifaPlayers().then(res => {
            this.setState({
                fifaPlayers: res.data
            })
        })
        this.setState({
            timer: 10
        })
        this.myInterval = setInterval(this.timer, 1000)
    }

    componentDidUpdate = () => {
        if(this.state.rank !== this.state.rankPrev) {
            const body = { 
                role: this.state.role,
                rank: this.state.rank
            }
            auctionPlayer(body).then((response) => {
                this.setState({
                    player: response.data[0] ,
                    rankPrev: this.state.rank      
                  })
            })
        }

        if(this.state.bidder !== this.state.bidderPrev) {
            this.setState({
                bidderPrev: this.state.bidder
            })
        }
        if(this.state.timer === 0) {
            let club
            this.state.fifaPlayers.forEach((item) => {
                if(item.Name === this.state.bidder) {
                    club = item.ID
                }
            })
            playerTransaction(this.state.player.Name, this.state.bid, this.state.player.Team, club, this.state.player.Position).then(response => {
                console.log(response)
                this.setState({
                    timer: 10,
                    startCount: false
                })
                window.location.reload()
            })
        }
    }

    timer = () => {
       if(this.state.bidder !== '' && this.state.timer !== 0 && this.state.startCount) {
            this.setState({
                timer: this.state.timer - 1
            })
       }
    }

    componentWillUnmount = () => {
        clearInterval(this.myInterval)
    }

    openModal = (player) => {
        this.setState({
            modalOpen: true,
            player: player
        })
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }


    nextBid = (player) => {
        if(this.state.player.Name === undefined) {
            return
        }
        if(player.Name === this.state.bidder) {
            return
        }
        let newBid
        if(this.state.bid < 1000) {
            newBid = this.state.bid + 50
        } else {
            newBid = this.state.bid + 100
        }        
        if(player.Money < newBid) {
            return
        }
        this.setState({
            bid: newBid,
            bidder: player.Name,
            timer: 10,
            startCount: true
        })
    }

  render() {
    return (
      <div>
        <Header />
        <div className='row' style={{overflow: 'hidden'}}>
            <div className='col-10 auction-page' style={{display: 'flex'}} >
                <div className='col-10' style={{display: 'flex'}}>
                    <div className='col-10'>
                        <Card>
                            <Card.Header>
                                {this.state.player.Name}
                            </Card.Header>
                            <Card.Body>
                                <div className='col-8'>
                                    <span className={this.state.player.Overall > 80 ? 'overall green' : this.state.player.Overall < 50 ? 'overall red' : 'overall yellow'}>{this.state.player.Overall}</span>
                                    <span className='position'>{this.state.player.Position}</span>
                                    <span className='height'><strong>Height: </strong>{this.state.player.Height}</span>
                                    <span className='weight'><strong>Weight: </strong>{this.state.player.Weight}</span>
                                    <Button  onClick={() => {this.openModal(this.state.player)}}>
                                                    VIEW DETAILS
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card> <br /> <br /> <br />
                        <div className='col-10'>
                            <span className='bid-text'>Current Bid : <strong>{this.state.bid}</strong></span> <br />
                            <span className='bid-text'>Current Bidder: <strong>{this.state.bidder}</strong></span> < br/>
                            <span className='timer'>{this.state.timer}</span>
                        </div>
                    </div>
                    <div className='col-3' align='center' style={{marginLeft: '3rem'}}>
                        <Form>
                                <Form.Group controlId="playerTo">
                                        <Form.Label>Team</Form.Label>
                                        <Form.Control style={{display: "inline"}} onChange={this.handleChange} name="role" as="select" defaultValue="Choose..." value={this.state.team}>
                                            <option>Admin</option>
                                            {this.state.roles.map(item => {
                                                
                                                return (
                                                    <option>{item}</option>
                                                )
                                            })}
                                            
                                        </Form.Control>
                                    </Form.Group>
                            </Form><br/><br/>
                        <Button variant='primary' onClick={this.nextPlayer}>Next</Button>
                    </div>
                </div>
                
            </div>
            <div className='col-2 fifa-player-list row'>
                {this.state.fifaPlayers.map((player, index) => (
                        <div className='fifa-players' key={index}>
                            <Card  onClick={() => this.nextBid(player)}>
                                <Card.Body className='row'>
                                    {/* <div className='col-6' align='center'>
                                        <img 
                                            src={profile}
                                            height={40}
                                            width={40}
                                        />
                                        <Button variant='primary'>TEAM</Button>                                        
                                    </div> */}
                                    <div className='col-12' align='center'>   
                                        <span style={{fontSize: '1rem'}}><strong>{player.Name}</strong></span> <br />
                                        <span  style={{fontSize: '1rem'}}>{player.Club}</span>  <br />                                   
                                        <span  style={{fontSize: '1rem'}} className={player.Money > 6500 ? "green" : player.Money < 3000 ? "red" : "yellow"}>{player.Money}</span> 
                                    </div>                                    
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
        {/* <div className='fifa-player-details'>
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
        </div> */}
        <PlayerModal open={this.state.modalOpen} onClose={this.closeModal} player={this.state.player}  center/>
      </div>
    )
  }
}
