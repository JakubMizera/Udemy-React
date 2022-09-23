import React from 'react'
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit = (searchInput) => {
        console.log(searchInput)
    };

    render() {
        return (
            <div className='ui container'>
                <SearchBar searchWord={this.onSearchSubmit} />
            </div>
        );
    };
};

export default App;