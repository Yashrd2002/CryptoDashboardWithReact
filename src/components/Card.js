import React, { Component } from "react";
import "./Card.css";

export class Card extends Component {
  render() {
    return (
      <div >


        <div className="head">{this.props.coinName}</div>



        <section className="card-sec">
          <div className="card">
            <div className="face face1">
              <h6>Market Cap 24Hrs</h6>
              <p>{this.props.mCap24} %</p>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <h6>All Time High</h6>
              <p>${this.props.ath}</p>
            </div>
          </div >
          <div className="card">
            <div className="face face1">
              <h6>All Time High</h6>
              <p>${this.props.atl}</p>
            </div>
          </div>

          <div className="card">
            <div className="face face1">
              <h6>Positive Sentiments </h6>
              <p>{this.props.sentiment} %</p>
            </div>
          </div>
          <div>
            <div className="card">
              <h6> High 24Hrs </h6>
              <p>${this.props.high24}</p>
            </div>
          </div>
          <div>
            <div className="card">
              <h6> Low 24Hrs </h6>
              <p style={{color:"red"}}>${this.props.low24}</p>
            </div>
          </div>
        </section>



        <div className="curr">
          <div> Current Price</div>
          <div>${this.props.currentPrice}</div>
        </div>
      </div>
    );
  }
}

export default Card;
