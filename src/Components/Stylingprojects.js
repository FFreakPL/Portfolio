import React, { useState, useEffect} from 'react';
import Header from "./Header";
import Footer from "./Footer";

function StylingProjects() {
    const projects = ["ffreak-bestshop", "ffreak-verti", "giveingoodhands"];
    const [hreff, setHreff] = useState("");

    useEffect(() => {
        setHreff(prevHreff => projects);
    },[])

    return (
        <>
            <Header/>
            <div className="stylingProjects">
                <ul className="stylingProjects_list">
                    {projects.map((project, index) =>
                        <li key={index} className={`reactProjects_item`}>
                            <a href={(`https://${hreff[index]}.vercel.app`)}>
                                {/*<p>{project.toUpperCase()}</p>*/}
                                <div className={`stylingProjects_link_${project}`}/>
                            </a>
                        </li>)}
                </ul>
            </div>
            <Footer/>
        </>
    )

}

export default StylingProjects;