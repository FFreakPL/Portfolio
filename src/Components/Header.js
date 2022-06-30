import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import "../css/out.css";

function Header() {


    return (
        <header className="top_nav">
            <div className="top_nav_logo"/>
            <input id="menu_toggle" type="checkbox"/>
            <label className='menu_button_container' htmlFor="menu_toggle">
                <div className='menu_button'></div>
            </label>
            <ul className="menu">
                <li className="menu_element"><a href="#" className="menu_route">About Me</a></li>
                <li className="menu_element"><a href="#" className="menu_route">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header;