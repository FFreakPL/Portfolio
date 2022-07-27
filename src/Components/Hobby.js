import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Music from "./Music";
import Photos from "./Photos";

function Hobby() {

    return (
        <>
            <Header />
            <div className="hobby">
                <Music/>
            </div>
            <div className="hobby_photos_container">
                <Photos/>
            </div>
            <Footer/>
        </>
    )
}

export default Hobby;