import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
// import WeatherForm from './components/WeatherForm';

class App extends Component {
  render() {
    return (
      <div>
        <Weather />
        {/* <WeatherForm />; */}
      </div>
    );
  }
}

export default App;
