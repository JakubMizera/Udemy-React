import React, { useState, useEffect } from 'react';

const Search = () => {
    const [term, setTerm] = useState('');

    console.log('I run with every render');
    useEffect(() => {
        console.log('I run after every render');
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