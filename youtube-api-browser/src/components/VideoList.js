import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const renderedList = videos.map((elem) => {
        return <VideoItem video={elem} />;
    });

    return <div className='ui relaxed divided list'>{renderedList}</div>
};

export default VideoList;