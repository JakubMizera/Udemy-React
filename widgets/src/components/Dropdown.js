import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            //check if element that is click on is inside of component
            if (ref.current.contains(event.target)) {
                return;
            }

            setOpen(false);
        }, { capture: true })
    }, []);
    //useEffect with empty array as 2nd argument will only render once

    const renderOptions = options.map((option) => {
        //don't render selected option
        if (option.value === selected.value) {
            return null;
        };

        return (
            <div
                key={option.value}
                className='item'
                //onClick handler changes onSelectedChange with currently selected option
                onClick={() => {
                    onSelectedChange(option);
                }}
            >
                {option.label}
            </div>
        );
    });


    return (
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>Select a Color</label>
                <div
                    onClick={() => {
                        setOpen(!open)
                    }}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
