//imports
import React from "react";
//import container component and any other needed components here
import HeaderInfo from "./components/HeaderInfo";
import FooterInfo from "./components/FooterInfo";
import ProjectInfo from "./components/ProjectInfo"


function App() {
    //this will return the containers
    return<>
    <HeaderInfo/>
    <ProjectInfo/>
    <FooterInfo/> 
    </>
  }

//export
export default App;