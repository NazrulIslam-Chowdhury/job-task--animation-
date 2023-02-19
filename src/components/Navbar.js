import React from 'react';


const Navbar = () => {
    return (

        <div className="navbar bg-gradient-to-t from-blue-900 to-blue-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-white'><a href='/'>About</a></li>
                        <li className='text-white'><a href='/'>Home</a></li>
                        <li className='text-white'><a href="/">Products</a></li>
                        <li className='text-white'><a href='/'>Careers</a></li>
                        <li className='text-white'><a href="/">Blog</a></li>
                        <li className='text-white'><a href='/'>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-white'><a href='/'>Home</a></li>
                    <li className='text-white'><a href='/'>About</a></li>
                    <li className='text-white'><a href='/'>Products</a></li>
                    <li className='text-white'><a href='/'>Careers</a></li>
                    <li className='text-white'><a href='/'>Blog</a></li>
                    <li className='text-white'><a href='/'>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="bg-yellow-600 text-white text-lg py-2 px-9 rounded-3xl">Enquire Now</button>
            </div>
        </div>

    );
};

export default Navbar;