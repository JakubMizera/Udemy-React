import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar';
import youtube from '../APIs/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onSearchSubmit('poland');
    }, []);

    const onSearchSubmit = async (searchInput) => {
        const response = await youtube.get('/search', {
            params: {
                q: searchInput
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    return (
        <div className='ui container'>
            <SearchBar searchWord={onSearchSubmit} />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList
                            videos={videos}
                            videoCallback={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;