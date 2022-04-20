import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Alllist from "./components/Alllist";
import Home from "./components/Home";
import Liveanywhere from "./components/Liveanywhere";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Secondbanner from "./components/Secondbanner";
import Staylist from "./components/Staylist";
import axios from 'axios'
import Footer from "./components/Footer";
function App() {

  
  return (
    <div className="App">
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
          <Liveanywhere />
          <Secondbanner />
          <Footer/>
         

        </Route>
        <Route path="/list">
          <Navbar />
          <Staylist />
          <Footer/>
        </Route>
        <Route path="/alllist">
          <Navbar />
          <Alllist />
          <Footer/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
