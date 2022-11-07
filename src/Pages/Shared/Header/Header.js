import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-rose-600 text-gray-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-rose-500 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li tabIndex={0}>
                                <Link className="justify-between">
                                    Services
                                </Link>
                            </li>
                            <li><Link>Appointment</Link></li>
                        </ul>
                    </div>
                    <Link className="normal-case text-xl font-bold">Picture & Poetry</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link>Home</Link></li>
                        <li tabIndex={0}>
                            <Link>
                                Services
                            </Link>
                        </li>
                        <li><Link>Appointment</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <Link className="btn">Login</Link>
                    <Link className="btn">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;