//header will go here
import "./styles.css";
import React from "react";
import Hero from "./images/molly_durst_web_designer.jpg"

function HeroImage() {
    return (
        <img className="hero" src={Hero} alt="Molly Durst Web Designer" />

    );
}

export default HeroImage;