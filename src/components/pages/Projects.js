import React from "react";
import quiz_icon from "../images/quiz_icon.png";
import day_planner from "../images/day_planner.png";
import clock_icon from "../images/clock_icon.png";
import taco_beer_icon from "../images/taco_beer_icon.png";
import hamburger_icon from "../images/hamburger_icon.png";
import weather_icon from "../images/weather_icon.png";
import fireworks_icon from "../images/fireworks_icon.png";
import soccer_icon from "../images/soccer_icon.png";


function Projects() {
  return (
    <div>
       <br/>
      <h5 className="moreLeft">Recent coding projects I have worked on</h5>
      <img className="projectImg" src={quiz_icon} alt="quiz_icon" />
      <img className="projectImg" src={day_planner} alt="day_planner" />
      <img className="projectImg" src={clock_icon} alt="clock_icon" />
      <img className="projectImg" src={taco_beer_icon} alt="taco_beer_icon" />
      
      <img className="projectImg" src={hamburger_icon} alt="hamburger_icon" />
      <img className="projectImg" src={weather_icon} alt="weather_icon" />
      <img className="projectImg" src={fireworks_icon} alt="fireworks_icon" />
      <img className="projectImg" src={soccer_icon} alt="soccer_icon" />
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
  );
}

export default Projects;
