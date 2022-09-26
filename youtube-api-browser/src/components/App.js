import React from 'react'
import SearchBar from './SearchBar';
import youtube from '../APIs/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount() {
        this.onSearchSubmit('dota2');
    };

    onSearchSubmit = async (searchInput) => {
        //console.log(searchInput);
        const response = await youtube.get('/search', {
            params: {
                q: searchInput
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        })
        //console.log(response.data.items[0].id.videoId);
    };

    onVideoSelect = (video) => {
        console.log(video);
        this.setState({ selectedVideo: video });
        console.log(this.state.selectedVideo);
    };

    render() {
        return (
            <div className='ui container'>
                <SearchBar searchWord={this.onSearchSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className='five wide column'>
                            <VideoList videos={this.state.videos} videoCallback={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default App;