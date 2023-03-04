import React, { Component } from 'react'
import './Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <div>


                <nav className="navbar navbar-expand-lg" style={{backgroundColor:""}}>
                    <div className="container-fluid">
                        {/* #fcdf03 */}

                        <a className="uff"
                            style={{ fontFamily: 'NHaasGroteskDSPro-65Md'}} href="/"><h1>Crypto 
                            Dashboard</h1></a>

                        <div>

                        <select className="form-select form-select-lg  " aria-label=".form-select-lg example" name='selectCoin'
                            style={{ width: "fit-content" }} onChange={this.props.handle_Submit}>
                            <option value="bitcoin">Select Coin</option>
                            <option value="avalanche-2">Avalanche (AVAX)</option>
                            <option value="binancecoin">Binance (BNB)</option>
                            <option value="bitcoin">Bitcoin (BTC) </option>
                            <option value="cardano">Cardano (ADA)</option>
                            <option value="decentraland">Decentraland (MANA)</option>
                            <option value="dogecoin">Dogecoin (DOGE)</option>
                            <option value="ethereum">Ethereum (ETH)</option>
                            <option value="ripple">Ripple (XRP)</option>
                            <option value="solana">Solana (SOL)</option>
                            <option value="tether">Tether (USDT)</option>
                        </select>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar