import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
const Header = () => {
    return (
        <header className="showcase">
            <div className="showcase-top">
                <img src="https://i.ibb.co/r5krrdz/logo.png" alt=""/>
                <Link to="/" className="btn btn-rounded">
                    Sign In
                </Link>
            </div>
            <div className="showcase-content">
                <h1>Unlimited Movies, TV shows and More</h1>
                <p>Watch anywhere.cancel Anytime</p>
                <Link to="/netflix-show" className="btn-header btn-x1">
                    Watch Free For 30Days
                    <i className="fas fa-chevron-right btn-icon"></i>
                </Link>
            </div>

        </header>
    )
}

export default Header
