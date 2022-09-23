import React from 'react'
import SearchBar from './SearchBar';
import youtube from '../APIs/youtube';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [] };

    onSearchSubmit = async (searchInput) => {
        //console.log(searchInput);
        const response = await youtube.get('/search', {
            params: {
                q: searchInput
            }
        });
        this.setState({ videos: response.data.items })
        //console.log(response.data.items[0].id.videoId);
    };

    render() {
        return (
            <div className='ui container'>
                <SearchBar searchWord={this.onSearchSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    };
};

export default App;