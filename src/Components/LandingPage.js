import React from 'react';
import { useNavigate } from "react-router-dom";
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