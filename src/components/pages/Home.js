import React from "react";
import "../styles.css";
import profile_pic from "../images/profile_pic.jpg";

function Home() {
  return (
    <div className="jumbotron jumbotron-fluid"> 
      <div className="moreLeft"><img className="profile" src={profile_pic} alt="profile" />
      <p className="headerText">
     <h1>Hello</h1>  
      My name is Molly Durst. <br/>
        I am a web designer and developer who studies New Media Communication (UX focused) <br/>
        and Full-Stack development at the Ohio State University.<br/>
      </p> 
    </div>
    </div>
  );
}

export default Home;
