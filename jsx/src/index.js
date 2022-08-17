// 1) import React and ReactDOM libraries
import React from 'react' // Library that defines what a component is and how they work together
import ReactDOM from 'react-dom/client' //Library that knows how to show a component in the browser

// 2) Get a refrence to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
const App = () => {
    //React cannot print objects

    //JSX props
    const inputType = 'number';
    const minValue = 5;

    return (
    <>
        <input type={inputType} min={minValue} style={{border: '1px solid red'}}/>
        <textarea autoFocus={true}/>
        {/* spellCheck is automatically set to true*/}
        <input maxLength={5} spellCheck style={{backgroundColor: 'gray'}}/>
    </>
    );
}

// 5) Show component on a screen
root.render(<App />);