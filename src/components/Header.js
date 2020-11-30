import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NewsList from './NewsList';
import AboutComponent from './About';
import '../css/Header.css';

const Header = (props) =>{
    return (
        <header>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="">
                            <span class="links"><strong>Home</strong></span>
                        </Link></li>
                        <li><Link to="/about">
                            <span class="links"><strong>About</strong></span>
                        </Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                        <AboutComponent />
                    </Route>
                    <Route path="">
                        <NewsList />
                    </Route>
                </Switch>
            </Router>
        </header>
    );
}

export default Header;