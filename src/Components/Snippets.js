import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import "../css/out.css";
import Header from "./Header";

function Snippets() {

    return (
        <>
            <Header/>
            <div className="snippets">
            </div>
        </>
    )
}

export default Snippets;