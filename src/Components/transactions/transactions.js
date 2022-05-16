import React from 'react';
import HeaderAdmin from '../header/headerAdmin';
import '../transactions/transactions.css';
import { Accordion, Card, Button }from 'react-bootstrap';
import { TransactionData } from '../transactions/transactionsList';
import { allTransactions } from '../../APIServices';



class Transactions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            role: '',
            TransactionData: []
           
        }
    }

    componentDidMount = () => {
        allTransactions().then(res => {
            this.setState({
                TransactionData: res.data
            })
        })
    }


    

    render() {
        return(
            <div className="trasactions">
                <HeaderAdmin />
                <div className="transactions-body">
                    <div>
                        {this.state.TransactionData.map((transaction, key) => {
                            // {this.state.totalMoney = this.state.totalMoney - transaction.Price}
                            if(transaction.Position === 'GK') {
                                this.state.role = 'GK'
                            } else if (transaction.Position === 'CB' || transaction.Position === 'LB' || transaction.Position === 'RB' || transaction.Position === 'LWB' || transaction.Position === 'RWB') {
                                this.state.role = 'DEF'
                            }   else if (transaction.Position === 'CDM' || transaction.Position === 'LM' || transaction.Position === 'RM' || transaction.Position === 'CAM' || transaction.Position === 'RWM' || transaction.Position === 'LWM') {
                                this.state.role = 'MID'
                            }   else if (transaction.Position === 'CF' || transaction.Position === 'LW' || transaction.Position === 'RW' || transaction.Position === 'ST' ) {
                                this.state.role = 'ATT'
                            }
                                 
                            if(this.state.role === 'GK') {
                                return(
                                    <ul>
                                        <li className="transaction-each gk">
                                            <strong>{transaction.PlayerName} ({transaction.Position})</strong>  bought for <strong>{transaction.Price}</strong> from <strong>{transaction.FromClub}</strong> <br />
                                        </li>     
                                    </ul>
                                )
                            } else if(this.state.role === 'DEF') {
                                return(
                                    <ul>
                                        <li className="transaction-each def">
                                            <strong>{transaction.PlayerName} ({transaction.Position})</strong>  bought for <strong>{transaction.Price}</strong> from <strong>{transaction.FromClub}</strong><br />
                                            
                                        </li>     
                                    </ul>
                                )
                            } else if(this.state.role === 'MID') {
                                return(
                                    <ul>
                                        <li className="transaction-each mid">
                                            <strong>{transaction.PlayerName} ({transaction.Position})</strong>  bought for <strong>{transaction.Price}</strong> from <strong>{transaction.FromClub}</strong><br />
                                        </li>     
                                    </ul>
                                )
                            } else if(this.state.role === 'ATT') {
                                return(
                                    <ul>
                                        <li className="transaction-each att">
                                            <strong>{transaction.PlayerName} ({transaction.Position})</strong>  bought for <strong>{transaction.Price}</strong> from <strong>{transaction.FromClub}</strong><br />
                                            
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



