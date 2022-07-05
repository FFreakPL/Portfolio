import React, { useState, useEffect} from 'react';
import photosData from './PhotosData'
import instagram from "../images/instagram.svg";

function Photos() {

    return (
        <>
            <h1 className="hobby_header">Photography</h1>
            <div className="hobby_description">
                My adventure with photography started more than 20 years ago... I had many cameras and many opportunities
                to take beautiful pictures:) Photographing my kids are number one for me but when I've got more time
                I try to photograph everything I find to be awesome:)
            </div>
        <div className="hobby_photos_container">
            {photosData.map((photo) =>
                <img className="hobby_photo" src={`${photo.path}`}/>
            )}
        </div>

        </>
    )
}

export default Photos;