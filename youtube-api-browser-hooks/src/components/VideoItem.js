import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, videoCallback }) => {
    //console.log(video)
    return (
        <div onClick={() => videoCallback(video)} className='video-item item'>
            <img
                className='ui image'
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.description}
            />
            <div className='content'>
                <div className='header'>
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;