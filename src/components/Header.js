import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NewsList from './NewsList';
import AboutComponent from './About';
import '../css/Header.css';
import NewsDetail from './NewsDetail';

const Header = (props) =>{
    return (
        <header>
            <Router>
                <nav>
                    <ul>
                        <li><Link style={{ textDecoration: 'none' }} to="">
                            <span className="links"><strong>Home</strong></span>
                        </Link></li>
                        <li><Link style={{ textDecoration: 'none' }} to="/about">
                            <span className="links"><strong>About</strong></span>
                        </Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                        <AboutComponent />
                    </Route>
                    <Route path="/detail/:id">
                        <NewsDetail />
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