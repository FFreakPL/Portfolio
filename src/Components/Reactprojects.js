import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import "../css/out.css";
import Header from "./Header";
import Footer from "./Footer";

function ReactProjects() {
    const projects = ["planyourride", "planyourride", "planyourride", "planyourride", "planyourride"];
    const [hreff, setHreff] = useState([""]);

    useEffect(() => {
        setHreff(prevHreff => projects);
    },[])

    // if(!hreff.length) return;

        return (
            <>
                <Header/>
                <div className="reactProjects">
                    {/*<img src={require(`../images/${hreff[0]}.jpeg`)}/>*/}
                    <ul className="reactProjects_list">
                        {projects.map((project, index) =>
                            <li key={index} className={`reactProjects_item`}>
                                {/*<p>{project.toUpperCase()}</p>*/}
                                <a href={(`https://${hreff[index]}.vercel.app`)}>
                                    <div className={`reactProjects_link_${project}`} style={{backgroundImage: `url(../images/${hreff[index]}.jpeg)` ,backgroundSize: "contain", backgroundPosition: "center"}}></div>
                                    {/*<img src={require(`../images/${hreff[index]}.jpeg`)}/>*/}
                                </a>
                            </li>)}
                    </ul>
                </div>
                <Footer/>
            </>
        )

}

export default ReactProjects;