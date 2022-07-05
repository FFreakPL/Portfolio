import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import "../css/out.css";

function Hobby() {

    return (
        <>
            <Header />
            <div className="hobby">
                <div className="hobby_description">There are plenty of things I'm interested in... But I love creating
                    music and taking photos the most... I've been playing around with Propellerheads Reason music
                    software for almost 15 years:)</div>
                <div className="hobby_container">
                    <figure className="hobby_figure">
                        <iframe src="https://www.youtube.com/embed/1LXM2wVCdOE">
                        </iframe>
                    </figure>
                    {/*<figure className="hobby_figure">*/}
                    {/*    <iframe src="https://www.youtube.com/embed/bN-wf-U8LWI">*/}
                    {/*    </iframe>*/}
                    {/*</figure>*/}
                    {/*<figure className="hobby_figure">*/}
                    {/*    <iframe src="https://www.youtube.com/embed/_4jmDoU83ys">*/}
                    {/*    </iframe>*/}
                    {/*</figure>*/}
                    {/*<figure className="hobby_figure">*/}
                    {/*    <iframe src="https://www.youtube.com/embed/aDponar0Hu0">*/}
                    {/*    </iframe>*/}
                    {/*</figure>*/}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Hobby;