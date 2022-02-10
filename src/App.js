import React from "react";
import Home from "./page/home.js";
import Navbar from "./component/navbar.js";
import Footer from "./component/footer.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/">
            <Navbar />
          </Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
