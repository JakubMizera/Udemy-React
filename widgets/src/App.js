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
            <>
                <Link to='/'>Accordion</Link>
                <Link to='/search'>Search</Link>
                <Link to='/dropdown'>Dropdown</Link>
                <Link to='/translate'>Translate</Link>
            </>
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