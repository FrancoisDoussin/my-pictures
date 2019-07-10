import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Album from "../Album/Album";
import Photos from "../Photos/Photos";
import './AppRouteur.css';

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Album} />
      <Route path="/album/:folder" component={Photos} />
    </Router>
  );
}

export default AppRouter;