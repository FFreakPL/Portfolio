import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
// import "../css/out.css";

function Logo() {
const navigate = useNavigate();

function handleClick() {
    navigate("/landingpage")
}

    return (
        <div className="logo">
            <button type="button" className="logo_container" onClick={handleClick}></button>
        </div>
    )
}

export default Logo;