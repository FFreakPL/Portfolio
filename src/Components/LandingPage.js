import React, { useState, useEffect} from 'react';
import { useNavigate, Link } from "react-router-dom";
// import "../css/out.css";
import Header from "./Header";
import Carousel, {CarouselItem} from "./Carousel";
import CarouselHeader from "./CarouselHeader";
import Footer from "./Footer";

function LandingPage() {
const navigate = useNavigate();
const subPages = ["reactProjects", "stylingProjects", "snippets", "github"];

    return (
        <>
            <Header/>
            <CarouselHeader/>
            <Carousel>
                {subPages.map((subPage, index) =>
                    <CarouselItem key={index}>
                        <div
                            className={`carousel_${subPages[index]}`}
                            onClick={() => navigate(`/${subPages[index]}`)}/>
                    </CarouselItem>)}
            </Carousel>
            <Footer/>
        </>
    )
}

export default LandingPage;