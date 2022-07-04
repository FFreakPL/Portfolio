import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../css/out.css";

function Hobby() {

    return (
        <>
            <Header />
            <div className="hobby">
                Hobby page in progress...
            </div>
            <Footer/>
        </>
    )
}

export default Hobby;