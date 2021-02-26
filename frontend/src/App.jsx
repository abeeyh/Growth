import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Users from "./views/Users/Users";
import Posts from "./views/Posts/Posts";

const img = 'https://contableipobre.files.wordpress.com/2014/02/error-404.png';

const notFound = {
    width: '100%',
    height: '1000px',
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover'
};

const Routes = () => (
    <BrowserRouter>
        <div>
            <ul>
                <li>
                    <Link to="/">Users</Link>
                </li>
                <li>
                    <Link to="/post">Posts</Link>
                </li>
                <li>
                    <Link to="/404">Not Found</Link>
                </li>
            </ul>

            <hr />
            <Switch>
                <Route exact path="/" component={Users} />
                <Route exact path="/post" component={Posts} />
                <Route path="/*" component={() => <div className="notFound" style={notFound} />} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Routes;