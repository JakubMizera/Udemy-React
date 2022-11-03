import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
import { langOptions } from "../content/content";


const Translate = () => {
    const [language, setLanguage] = useState(langOptions[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                selected={language}
                onSelectedChange={setLanguage}
                options={langOptions}
                label='Select a language'
            />
            <h3 className="ui header">Output</h3>
            <Convert
                language={language}
                text={text}
            />
        </div>
    );
};

export default Translate;