import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Categories } from "./Categories";

import { Home } from './Home';
import { Forms } from './Forms';
import { Login } from "./Login";
import { Register } from "./Register";

import './Dashboard.css'

export const Dashboard = () => {
    return (
        <div className="container">
            <Router>
                <div>
                    <nav>
                        <Link className="navLink" to="/">
                            Home
                        </Link>
                        <Link className="navLink" to="/categories">
                            Categories
                        </Link>
                        <Link className="navLink" to="/loginregister">
                            Login/Register
                        </Link>
                    </nav>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/loginregister" element={<Forms />}>
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register message='Hello'/>} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
};
