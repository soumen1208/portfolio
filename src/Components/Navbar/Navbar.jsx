import React from 'react'
import '../Navbar/navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Soumen</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <Link spy={true} to='Home' smooth={true} activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Service' smooth={true} activeClass='activeClass'>
                            <li>Service</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testomonials' smooth={true} activeClass='activeClass'>
                            <li>Testomonials</li>
                        </Link>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar