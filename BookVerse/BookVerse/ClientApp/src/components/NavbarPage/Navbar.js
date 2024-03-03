import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {
    static displayName = Navbar.name;

    constructor(props) {
        super(props);
        this.state = {
            isMenuOpen: false
        };
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            isMenuOpen: !prevState.isMenuOpen
        }));
    }

    render() {
        const { isMenuOpen } = this.state;

        return (
            <nav className="bg-black p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <span className="brand-name">Book Verse</span>
                </div>
                <div className="md:hidden">
                    {/* Toggle Button */}
                    <button onClick={this.toggleMenu} className="text-white focus:outline-none">
                        {isMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                    {/* Dropdown Menu */}
                    {isMenuOpen && (
                        <div className="absolute right-0 mt-10 mr-4 bg-black shadow-lg rounded-md">
                            <button className="block w-full text-left py-2 px-4 text-white hover:bg-gray-900" onClick={this.toggleMenu}>
                                Login
                            </button>
                            <button className="block w-full text-left py-2 px-4 text-white hover:bg-gray-900" onClick={this.toggleMenu}>
                                Sign Up
                            </button>
                        </div>
                    )}
                </div>
                <div className="nav-buttons hidden md:block">
                    {/* Login and Sign Up buttons */}
                    <button type="button" className="nav-button text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    <button type="button" className="nav-button text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-8 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign Up</button>
                </div>
            </nav>
        );
    }
}

export default Navbar;
