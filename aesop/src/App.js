import React, { Component } from 'react';
import './App.css';
import RouterCarousel from 'react-router-carousel';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import page1Img from './assets/Aesop-Homepage-Banner.jpg';
import page2Img from './assets/Aesop-Gift-Kits-2019-20-Hybris-Range-Page-Secondary-Mid-Desktop-1690x945px.png';
import page3Img from './assets/odyssey.PNG';
import page4Img from './assets/Aesop-Bleecker-Street-Carousel-1-Desktop-2560x1440px.jpg';

import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';

import Footer from './components/Footer'



//main page nav 
const Home = () => (
  <div style={{ width: '100%'}}>
    <Link to="/Page1" activeClassName="active">
      <img src={page1Img} style={{ width: '100%', height: 800 }}/>
    </Link>
  </div>
);
 
const Mythical = () => (
  <div style={{ width: '100%'}}>
    <Link to="/Page2" activeClassName="activeRoute">
      <img src={page2Img} style={{ width: '100%', height: 800 }}/>
    </Link>
  </div>
);
 
const Odyssey = () => (
  <div style={{ width: '100%',  position: 'relative' }}>
  <Link to="/Page3" activeClassName="activeRoute">
    <img src={page3Img} style={{ width: '100%', height: 800 }}/>
  </Link>
  </div>
);
 
const Spaces = () => (
  <div style={{ width: '100%'}}>
  <Link to="/Page4" activeClassName="activeRoute">
    <img src={page4Img} style={{ width: '100%', height: 800 }}/>
  </Link>
  </div>
);

const FallbackPage = () => {
  return (
    <div style={{ width: '100%', height: 500 }}>
      <Home />
    </div>
  )
};
 
const Carousel = () => {
  return (
    <RouterCarousel
      fallbackRoute={<FallbackPage />}
    >
      <Route path="/" component={Home} />
      <Route path="/Home" component={Home} />
      <Route path="/Mythical" component={Mythical} />
      <Route path="/Odyssey" component={Odyssey}  />
      <Route path="/Spaces" component={Spaces} />

      <Route path="/Page1" component={Page1} />
      <Route path="/Page2" component={Page2} />
      <Route path="/Page3" component={Page3} />
      <Route path="/Page4" component={Page4} />
    </RouterCarousel>
  );
};
 
export default class App extends Component {
  render() {
    return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="*" component={Carousel} />
        </Switch>
          <div className="menu">
              <Link exact to="/Home">Home-</Link>
              <Link exact to="/Mythical">Mythical-</Link>
              <Link exact to="/Odyssey">Odyssey-</Link>
              <Link exact to="/Spaces">Spaces</Link>
          </div>
      </Router>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Footer />
    </div>
  );
  }
};
