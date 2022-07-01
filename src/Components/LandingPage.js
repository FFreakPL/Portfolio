import React, { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import "../css/out.css";
import Header from "./Header";
import Carousel, {CarouselItem} from "./Carousel";
import CarouselHeader from "./CarouselHeader";

function LandingPage() {

    return (
        <>
            <Header/>
            <CarouselHeader/>
            <Carousel>
                <CarouselItem><div className="carousel_planyourride"/></CarouselItem>
                <CarouselItem><div className="carousel_planyourride"/></CarouselItem>
                <CarouselItem><div className="carousel_planyourride"/></CarouselItem>
            </Carousel>
        </>
    )
}

export default LandingPage;