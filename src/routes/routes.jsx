import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from "../components/Homepage";


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/home"/>
                <Route path="/home" exact component={HomePage}/>
            </Switch>
        </Router>
    )
};

export default Routes