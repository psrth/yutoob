import React from 'react'

import './Video.css'

const Video = (props) => {
    return (
        <div className="vid-wrapper">
            <iframe 
                className="vid"
                src={props.link}
            ></iframe>
        </div>
    )
}

export default Video;