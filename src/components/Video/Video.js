import React from 'react'

import './Video.css'

const Video = (props) => {
    return (
        <div className="vid-wrapper">
            <iframe 
                className="vid"
                src={props.link}
                width="100%" 
                height="550px"
            ></iframe>
        </div>
    )
}

export default Video;