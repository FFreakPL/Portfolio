import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import "../css/out.css";
import Header from "./Header";
import Footer from "./Footer";

function Snippets() {
    const projects = [];
    const [hreff, setHreff] = useState("");

    useEffect(() => {
        setHreff(prevHreff => projects);
    },[])

    if(!projects.length) return (
        <>
            <Header/>
            <div className="snippets" style={{height:"88vh", fontSize:"2rem"}}> Still working on Snippets:)</div>
            <Footer/>
        </>
        )

    return (
        <>
            <Header/>
            <div className="snippets">
                <ul className="snippets_list">
                    {projects.map((project, index) =>
                        <li key={index} className={`snippets_item`}>
                            {/*<p>{project.toUpperCase()}</p>*/}
                            <a href={(`https://${hreff[index]}.vercel.app`)}>
                                <div className={`snippets_link_${project}`}/>
                            </a>
                        </li>)}
                </ul>
            </div>
            <Footer/>
        </>
    )
}

export default Snippets;