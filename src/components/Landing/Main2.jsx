import React from 'react'
import './video.css'
import videos from './test.mp4';

function Main2() {
    return (
        <div className="video-background">
            <video autoPlay loop muted id="my-video">
                <source src={videos} type="video/mp4" />
                {/* Add additional source elements for different formats */}
                Your browser does not support the video tag.
            </video>
            <div className="content w-[100vw] h-[100vh]">
                {/* Your content goes here */}
                ainsofnaoisfno
            </div>
        </div>
    )
}

export default Main2