import React from 'react';
import {ReactComponent as RMA} from "../Assets/RMA.svg";
import './home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="home">
                <h1>PLAYER PROFILE</h1>
                <div className="body">
                    <div className="left">
                        <RMA className="team-icon"/>
                    </div>
                    <div className="right">
                        <ul className="ul">
                            <li><strong>Player Name :</strong> Rishabh Sharma </li>
                            <li><strong>Player Club :</strong> Real Madrid </li>
                            <li><strong>Money :</strong> 250 </li>
                            <li><strong>Last Season Performance :</strong> 1st </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home