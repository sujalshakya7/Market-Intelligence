import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav>
            <div className="container mx-7 flex justify-between items-center">
                {/* Logo */}
                <div className=" flex items-center space-x-3 ">
                    <img src="/logo.svg" alt="Logo" className="h-25 w-25 rounded-full " />
                </div>

                {/* Navigation */}
                <div className="space-x-6 flex items-center">
                    <Link to="/" className="hover:text-gray-200">Home</Link>
                    <Link to="/solution" className="hover:text-gray-200">Solutions</Link>

                    {/* Industries Dropdown (Click garnu parne) mousehover wala dropdown halyo ki hover garna garo xa */}
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="hover:text-gray-200 flex items-center"
                        >
                            Industries ▾
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute top-8 left-0 bg-white rounded-lg shadow-lg py-2 w-40 z-50">
                                <Link
                                    to="/tourism"
                                    className="block px-4 py-2 hover:bg-blue-100"
                                    onClick={() => setIsDropdownOpen(false)} // close dropdown after click
                                >
                                    Tourism
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link to="/blog" className="hover:text-gray-200">Blog</Link>
                    <Link to="/pricing" className="hover:text-gray-200">Pricing</Link>

                    <Link
                        to="/signin"
                        className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
                    >
                        Sign In
                    </Link>
                    <Link
                        to="/getstarted"
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-800 transition"
                    >
                        Get Started
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
