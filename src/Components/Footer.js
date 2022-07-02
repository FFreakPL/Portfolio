import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import instagram from "../images/instagram.svg";
import github from "../images/github.svg";
import "../css/out.css";

function Footer() {

    return (
        <>
            <footer className="footer">
                <div className="footer_container">
                    <div className="footer_info">
                        <span className="footer_copy">© 2022 FFREAK., All Rights Reserved</span>
                    </div>
                    <div className="footer_icons">
                        <a href="https://www.instagram.com/fotofreakpl"><img src={instagram} alt="instagram"/></a>
                        <a href="https://github.com/FFreakPL"><img src={github} alt="github"/></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;