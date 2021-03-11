import React from "react";
import profile_pic from "../images/profile_pic.jpg"

function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <div className="imageLeft"><img className="profile" src={profile_pic} alt="profile" />
      <p>
      My name is Molly Durst. <br/>
        I am a web designer and developer who studies New Media Communication (UX focused) <br/>
        and Full-Stack development at the Ohio State University.<br/>
      </p>
    </div></div>
  );
}

export default Home;
