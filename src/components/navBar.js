'use client';

import { Avatar, Dropdown} from 'flowbite-react';
import Cookies from 'js-cookie';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from "../context/GlobalContext";

const NavBar = () => {

    let navigate = useNavigate()

    const { handleFunction } = useContext(GlobalContext)

    const {
        handleSignout
    } = handleFunction

    return (
            <nav className="bg-primary fixed w-full z-20 top-0 left-0">
            <div className="flex flex-wrap items-center justify-between mx-auto p-3 text-2xl">
                <Link
                to="/"
                className='flex items-center'
                >
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">JobHunt</span>
                </Link>
                <div className="flex md:order-2">


                {/* Ternary Operator untuk Keadaan Sudah Sign In Atau Belum */}
                { 
                    !Cookies.get('token') && 
                    <button 
                    type="button" 
                    onClick={() => {navigate('/signin')}}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
                    >
                        Sign In
                    </button>
                } 
                {
                    Cookies.get('token') && 
                    <div>
                    <Dropdown
                        inline
                        label={<Avatar alt="User settings" img={Cookies.get('image_url')} rounded/>}
                        >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                {Cookies.get('name')}
                            </span>
                            <span className="block truncate text-sm font-medium">
                                {Cookies.get('email')}
                            </span>
                            <hr></hr>
                            <Link 
                            className="block truncate text-sm font-medium my-3  "
                            to="/"
                            >
                                Home
                            </Link>
                            <Link 
                            className="block truncate text-sm font-medium my-3  "
                            to="/job-vacancy"
                            >
                                Vacancy
                            </Link>
                            <Link 
                            className="block truncate text-sm font-medium my-3  "
                            to="/dashboard"
                            >
                                Dashboard
                            </Link>
                            <Link 
                            className="block truncate text-sm font-medium mt-3  "
                            onClick={handleSignout}
                            >
                                Sign Out
                            </Link>
                        </Dropdown.Header>
                    </Dropdown>
                  </div>
                  
                }
                {/* Penutup Ternary Operator Keadaan Sudah Sign In Atau Belum  */}
                </div >

                <div className="items-center justify-between hidden w-full mr-16 md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-primary rounded-lg bg-primary md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-primary">
                        <li>
                            <Link
                            className="block py-2 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                            className="block py-2 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                            to="/job-vacancy"
                            >
                                Vacancy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    )
}
export default NavBar;