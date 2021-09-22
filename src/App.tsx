// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MusicSearch from "./components/MusicSearch";
import SongDetails from "./components/SongDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={MusicSearch} />
        <Route exact path="/song/:id" component={SongDetails} />
      </div>
    </Router>
  );
}

export default App;
