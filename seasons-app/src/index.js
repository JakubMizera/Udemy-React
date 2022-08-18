import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (error) => console.log(error)
//   );


//   return (
//     <div>Latitude: </div>
//   )
// }

class App extends React.Component {
  // //constructor is going to be called anytime an instance of this class is created
  // constructor(props) {
  //   // super(props) is required everytime for constructor
  //   super(props);

  //   //this is the only time we do direct assignment to this.state
  //   this.state = { lat: null, errorMessage: '' };
  // }


  // using state = {} instead of constructor, works the same
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // !to update you need to use setState!
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  // !React requires to define render in Class based components!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude: {this.state.lat}</div>
    }

    return <div>Loading, please wait</div>
  }
}

root.render(<App />);