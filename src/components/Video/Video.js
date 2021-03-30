import React from 'react'

const Video = (props) => {
    return (
        <div>
            <iframe 
                src={props.link}
                width="1000" 
                height="600"
            ></iframe>
        </div>
    )
}

export default Video;