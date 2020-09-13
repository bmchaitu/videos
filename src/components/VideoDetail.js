import React from 'react';
const VideoDetail = ({Video}) =>{
    if(!Video)
    return <div>Loading</div>
const Videosrc=`https://www.youtube.com/embed/r2cIRyaOixYbZSmf`    
return(
    <div>
        <div className="ui embed">
            <iframe src={Videosrc}/>
        </div>
        <div className="ui segment">
        <h4 className="ui header">
            {Video.snippet.title}
        </h4>
        <p>
            {Video.snippet.description}
        </p>
        </div>
    </div>
    
     
)};

export default VideoDetail;
