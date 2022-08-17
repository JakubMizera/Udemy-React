// 1) import React and ReactDOM libraries
import React from 'react' // Library that defines what a component is and how they work together
import ReactDOM from 'react-dom/client' //Library that knows how to show a component in the browser

// 2) Get a refrence to the div with ID root
const el = document.getElementById('root');
console.log(el)

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
const App = () => {
    return <h1>Hello there!</h1>;
}

// 5) Show component on a screen
root.render(<App />);