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
                            src="https://see.fontimg.com/api/renderfont4/d9xpV/eyJyIjoiZnMiLCJoIjoyOSwidyI6MTAwMCwiZnMiOjI5LCJmZ2MiOiIjQzlBRUREIiwiYmdjIjoiIzlBNzlCMiIsInQiOjF9/Q2F0IFRhaWxzOiBUZXh0IEFkdmVudHVyZQ/simplecat.png"
                            alt="catTails-logo"
                        />
                    </Link>
                    <div className="header-right">
                        <Link to="/">Home</Link>
                        <Link to="/game">Game</Link>

                        {/* user must sign in inorder to play game */}
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