import React, { useState } from 'react';

const SearchBar = ({ searchWord }) => {
    const [searchInput, setSearchInput] = useState('');
    const onSubmit = (event) => {
        event.preventDefault();
        searchWord(searchInput);
    }

    return (
        <div className='search-bar ui segment'>
            <form className='ui form' onSubmit={onSubmit}>
                <div className='field'>
                    <label>YouTube search</label>
                    <input
                        type='text'
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;