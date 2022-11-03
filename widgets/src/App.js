import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { items, options } from './content/content';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';


export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <Router>
            <nav className='ui secondary pointing menu'>
                <Link className='item' to='/'>Accordion</Link>
                <Link className='item' to='/search'>Search</Link>
                <Link className='item' to='/dropdown'>Dropdown</Link>
                <Link className='item' to='/translate'>Translate</Link>
            </nav>
            <Routes>
                <Route index element={<Accordion items={items} />} />
                <Route path='search' element={<Search />} />
                <Route path='dropdown' element={
                    <>
                        <button onClick={() => setShowDropdown(!showDropdown)}>Toggle button</button>
                        {showDropdown ?
                            <Dropdown
                                selected={selected}
                                onSelectedChange={setSelected}
                                options={options}
                                label='Select a color'
                            /> : null
                        }
                    </>
                } />
                <Route path='translate' element={<Translate />} />
            </Routes>
        </Router>
    );
};