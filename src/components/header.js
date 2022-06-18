import React from "react";
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

function Header() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header className="header">
            <div>
                <nav>
                    <Link to="/">
                        <img className="logo"
                            src="https://see.fontimg.com/api/renderfont4/1G8Y2/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzM1M0Q0QiIsInQiOjF9/Q2F0IFRhaWxzOiBUZXh0IEFkdmVudHVyZQ/hellosty-blast.png"
                            alt="catTails-logo"
                        />
                    </Link>
                    <div className="header-right">
                        <Link to="/">Home</Link>
                        <Link to="/game">Game</Link>

                        {Auth.loggedIn() ? (
                            <>
                                <Link to="/game"></Link>
                                <a href="/" onClick={logout}>
                                    Logout
                                </a>
                            </>
                        ) : (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Signup</Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;