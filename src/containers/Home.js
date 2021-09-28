import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from './containers/Home';


function Home() {
    return (
        <Router>
            <Switch>
                <Route path='/'></Route>
            </Switch>
        </Router>
    )
}

export default Home;