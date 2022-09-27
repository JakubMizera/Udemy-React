import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        const searchWiki = async () => {
            await axios.get('someAPI');
        }
        searchWiki();
    }, [term]);
    //!useEffect 2nd argument can only be: [], 'empty', [some data]!
    // [] => Run at initial render
    // 'empty' => Run at initial render and after every rerender
    // [data] => Run at initial render and after every rerender if data has changed since last render

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter search term</label>
                    <input
                        className='input'
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    ></input>
                </div>
            </div>
        </div>
    );
};

export default Search;