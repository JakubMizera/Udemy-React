import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, videoCallback }) => {
    const renderedList = videos.map((elem) => {
        return <VideoItem
            video={elem}
            videoCallback={videoCallback}
            key={elem.id.videoId}
        />;
    });

    return <div className='ui relaxed divided list'>{renderedList}</div>
};

export default VideoList;