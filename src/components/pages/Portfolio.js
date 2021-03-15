import React, { Component} from "react";
import Cards from "./data/portfolioCards.json";
import "../styles.css";

class Portfolio extends Component {
  render () {
    return (
      <div>
        <br/>
        <h2 className="moreLeft">Design Projects</h2>
        {Cards.map ((cardDetail, index) => {
          return <div key={index}>
          <div className="Wrapper">
          <h4>{cardDetail.cardname}</h4>
          <img className="portfolioImg" src={cardDetail.image} alt="Portfolio Card" />
          </div>
          </div>
        })}
      </div>
    )
  }
}

export default Portfolio;
