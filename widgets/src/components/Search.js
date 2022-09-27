import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    console.log(results);

    useEffect(() => {
        const searchWiki = async () => {
            const result = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            });
            setResults(result.data.query.search);
        }
        if (term !== '') {
            searchWiki();
        }
    }, [term]);
    //!useEffect 2nd argument can only be: [], 'empty', [some data]!
    // [] => Run at initial render
    // 'empty' => Run at initial render and after every rerender
    // [data] => Run at initial render and after every rerender if data has changed since last render



    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className='item'>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    {result.snippet}
                </div>
            </div>
        )
    });


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
            <div className='ui celled list'>
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;