import React, { useState, useEffect} from 'react';
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
            {/*<div className="hobby_photos">*/}
            {/*    My adventure with photography started more than 20 years ago... I had many cameras and many opportunities*/}
            {/*    to take beautiful pictures:) Photographing my kids are number one for me but when I've got more time*/}
            {/*    I try to photograph everything I find to be awesome:)*/}
            {/*</div>*/}
            <div className="hobby_photos_container">
                <Photos/>
            </div>
            <Footer/>
        </>
    )
}

export default Hobby;