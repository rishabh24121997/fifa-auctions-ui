import React from 'react';
import Header from './header';
import './transactions.css';
import { Accordion, Card, Button }from 'react-bootstrap';
import { TransactionData } from './transactionsList';


class Transactions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            totalMoney : 10000,
            role: ''
        }
    }

    render() {
        return(
            <div className="trasactions">
                <Header />
                <div className="transactions-body">
                    <div>
                        {TransactionData.map((transaction, key) => {
                            // {this.state.totalMoney = this.state.totalMoney - transaction.Price}
                            if(transaction.Position == 'GK') {
                                this.state.role = 'GK'
                            } else if (transaction.Position == 'CB' || transaction.Position == 'LB' || transaction.Position == 'RB' || transaction.Position == 'LWB' || transaction.Position == 'RWB') {
                                this.state.role = 'DEF'
                            }   else if (transaction.Position == 'CDM' || transaction.Position == 'LM' || transaction.Position == 'RM' || transaction.Position == 'CAM' || transaction.Position == 'RWM' || transaction.Position == 'LWM') {
                                this.state.role = 'MID'
                            }   else if (transaction.Position == 'CF' || transaction.Position == 'LW' || transaction.Position == 'RW' || transaction.Position == 'ST' ) {
                                this.state.role = 'ATT'
                            }
                                 
                            if(this.state.role == 'GK') {
                                return(
                                    <ul>
                                        <li className="transaction-each">
                                            <strong><span className="gk">{transaction.Player}</span></strong>  bought for <strong>{transaction.Price}</strong> from <strong>{transaction.From}</strong><br />
                                        </li>     
                                    </ul>
                                )
                            } else if(this.state.role == 'DEF') {
                                return(
                                    <ul>
                                        <li className="transaction-each">
                                            <strong><span className="def">{transaction.Player}</span></strong>  bought for <strong>{transaction.Price}</strong> from <strong>{transaction.From}</strong><br />
                                        </li>     
                                    </ul>
                                )
                            } else if(this.state.role == 'MID') {
                                return(
                                    <ul>
                                        <li className="transaction-each">
                                            <strong><span className="mid">{transaction.Player}</span></strong>  bought for <strong>{transaction.Price}</strong> from <strong>{transaction.From}</strong><br />
                                        </li>     
                                    </ul>
                                )
                            } else if(this.state.role == 'ATT') {
                                console.log(transaction.Player)
                                return(
                                    <ul>
                                        <li className="transaction-each">
                                            <strong><span className="att">{transaction.Player}</span></strong>  bought for <strong>{transaction.Price}</strong> from <strong>{transaction.From}</strong><br />
                                        </li>     
                                    </ul>
                                )
                            }
                             })}
                     </div>
                </div>
            </div>
        )
    }
}

export default Transactions;



