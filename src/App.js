import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import HeroImage from "./components/HeroImage";
import FooterInfo from "./components/FooterInfo"

function App() {
  return (
    <Router basename={ process.env.PUBLIC_URL }>
      <div>
        <HeroImage/>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <FooterInfo/>
      </div>
    </Router>
  );
}

export default App;
