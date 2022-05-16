import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import {fifaPlayers, playerTransaction} from "../../APIServices";
import "../home/home.css";
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FIFAPlayers: [],
            user: "Admin"
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount = () => {
        fifaPlayers().then(res => {
            this.setState({
                FIFAPlayers: res.data
            })
        })
    }

    handleChange (e) {
        this.setState({
          [e.target.name]: e.target.value
          
        })
      }

    onSubmit = () => {
        sessionStorage.setItem("user", this.state.user)
        if(sessionStorage.getItem("user")) {
            console.log(sessionStorage.getItem("user"))
            return <Redirect to="/home" />
        }
    }

    render() {
        return(
            <div className="login" align="center">
                <Card className="login-card">
                    <Form>
                    <Form.Group controlId="playerTo">
                            <Form.Label>Team</Form.Label>
                            <Form.Control onChange={this.handleChange} name="user" as="select" defaultValue="Choose..." value={this.state.user}>
                                <option>Admin</option>
                                {this.state.FIFAPlayers.map(fifaPlayer => {
                                    return (
                                        <option>{fifaPlayer.ID}</option>
                                    )
                                })}
                                
                            </Form.Control>
                            </Form.Group>
                            <div className="submit-button">
                            <Button  variant="primary" type="submit" onClick={this.onSubmit}>
                                Submit
                            </Button>
                            </div>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Login;