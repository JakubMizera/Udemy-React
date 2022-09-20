import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term);

        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 3N-1RAaY14RPT_AnsGD8vqEU6b06akbDU79lQyOIROw',
            },
        });
    };

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar appSubmit={this.onSearchSubmit} />
            </div>
        );
    };
};

export default App;