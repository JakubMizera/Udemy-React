import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import ErrorDisplay from './ErrorDisplay';

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

  //helper method
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <ErrorDisplay errorMessage='You denied access to your location' />
    }

    if (this.state.lat && !this.state.errorMessage) {
      //passing props to SeasonDisplay
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Loader message='Please accept location request' />
  }

  // !React requires to define render in Class based components!
  render() {
    return (
      <>{this.renderContent()}</>
    )
  }
}

root.render(<App />);