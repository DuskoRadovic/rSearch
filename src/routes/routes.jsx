import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "../components/Homepage";
import ItemPage from "../components/ItemPage";
import ResultsPage from "../components/ResultsPage";


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/search/:searchText" exact component={ResultsPage}/>
                <Route path="/article/:articleId" exact component={ItemPage}/>
            </Switch>
        </Router>
    )
};

export default Routes