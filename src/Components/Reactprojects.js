import React, { useState, useEffect} from 'react';
import Header from "./Header";
import Footer from "./Footer";

function ReactProjects() {
    const projects = ["planyourride", "giveingoodhands", "ffreak-todolist", "manage-database"];
    const [hreff, setHreff] = useState("");

    useEffect(() => {
        setHreff(prevHreff => projects);
    },[])

    return (
        <>
            <Header/>
            <div className="reactProjects">
                <ul className="reactProjects_list">
                    {projects.map((project, index) =>
                        <li key={index} className={`reactProjects_item`}>
                            <a href={(`https://${hreff[index]}.vercel.app`)}>
                                <div className={`reactProjects_link_${project}`}/>
                            </a>
                        </li>)}
                </ul>
            </div>
            <Footer/>
        </>
        )

}

export default ReactProjects;