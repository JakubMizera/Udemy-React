import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import { items, options } from './content/content';


export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle button</button>
            {showDropdown ?
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                    label='Select a color'
                /> : null
            } */}
            <Translate />
        </div>
    );
};