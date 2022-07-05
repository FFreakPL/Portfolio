import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
// import "../css/out.css";
import Header from "./Header";
import Footer from "./Footer";
import github from "../images/github.svg";

function Github() {
    const projects = ["FFreakPL"];
    const [hreff, setHreff] = useState("");

    useEffect(() => {
        setHreff(prevHreff => projects);
    },[])

    return (
        <>
            <Header/>
            <div className="github">
                <a className="github_link" href={(`https://github.com/${hreff[0]}`)}>Feel free to check my GitHub account...
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
            <Footer/>
        </>
    )
}

export default Github;