import React from "react";
import bbq_flyer from "../images/bbq_flyer.jpg";
import book_show from "../images/book_show.jpg";
import boutique_flyer from "../images/boutique_flyer.jpg";
import farmers_market from "../images/farmers_market.jpg";
import LADIES_NIGHT from "../images/LADIES_NIGHT.jpg";
import sale_flyer from "../images/sale_flyer.jpg";
import sales_growth from "../images/sales_growth.jpg";
import summer_festival from "../images/summer_festival.jpg";

function Portfolio() {
  return (
    <div>
      <br/>
      <h5 className="moreLeft">More work examples available by request</h5>
      <img className="portfolioImg" src={bbq_flyer} alt="bbq_flyer" />
      <img className="portfolioImg" src={book_show} alt="book_show" />
      <img className="portfolioImg" src={boutique_flyer} alt="boutique_flyer" />
      <img className="portfolioImg" src={farmers_market} alt="farmers_market" />
      
      <img className="portfolioImg" src={LADIES_NIGHT} alt="LADIES_NIGHT" />
      <img className="portfolioImg" src={sale_flyer} alt="sale_flyer" />
      <img className="portfolioImg" src={sales_growth} alt="sales_growth" />
      <img className="portfolioImg" src={summer_festival} alt="summer_festival" />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
  );
}

export default Portfolio;
