import React from 'react';
import './VideoItem.css'
var VideoItem = ({videoObj, onVideoSelect}) => {
    return (
    <div onClick={()=> onVideoSelect(videoObj)} className="video-item">
        <img className="ui image" src={videoObj.snippet.thumbnails.medium.url} alt="images"></img>
        <div className="content">
            <div className="description">
                <div className="header">
                    {videoObj.snippet.title}
                </div>
            </div>
        </div>
    </div>);
} 

export default VideoItem;