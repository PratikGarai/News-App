import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NewsList from './NewsList';

const Header = (props) =>{
    return (
        <header>
            <Router>
                <Link to="">Home</Link><br />
                <Link to="/about">About</Link>
                <Switch>
                    <Route path="">
                        <NewsList />
                    </Route>
                    <Route path="/about">
                        <NewsList />
                    </Route>
                </Switch>
            </Router>
        </header>
    );
}

export default Header;