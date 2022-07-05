import React  from 'react';

function Music() {

    return (
        <>
            <h1 className="hobby_header">Music</h1>
        <div className="hobby_description">
            There are plenty of things I'm interested in... But I love creating
            music and taking photos the most... I've been playing around with Propellerheads Reason music
            software for almost 15 years:)</div>
    <div className="hobby_container">
        <div className="hobby_figure">
            <iframe src="https://www.youtube.com/embed/1LXM2wVCdOE"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
        </div>
        <div className="hobby_figure">
            <iframe src="https://www.youtube.com/embed/bN-wf-U8LWI"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
        </div>
        <div className="hobby_figure">
            <iframe src="https://www.youtube.com/embed/_4jmDoU83ys"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
        </div>
        <div className="hobby_figure">
            <iframe src="https://www.youtube.com/embed/aDponar0Hu0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
        </div>
    </div>
</>
    )
}

export default Music;