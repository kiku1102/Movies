import React, { useState } from 'react';
import "../../CSS/Header.scss"
import Logo from "../../assets/images/Logo.svg"
import { NavLink } from 'reactstrap';
export default function Header() {

    return (
        <div className='navBar'>
            <div className='container h-100' >
                <div className='nav-container'>
                    <div className='nav-items'>
                        <div className='logo'>
                            <img src={Logo}/>
                        </div>
                        <div style={{width: "40%"}}>
                            <ul >
                                <NavLink to='/'>
                                <li>Home</li>
                                </NavLink>
                                <NavLink to='/trending'>
                                <li>Trending</li>
                                </NavLink>
                                <NavLink to='/movies'>
                                <li>Movies</li>
                                </NavLink>
                                <NavLink to='/TvSeries'>
                                <li>Tv Series</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-info ' href="/login">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
