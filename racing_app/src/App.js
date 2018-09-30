import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';
import CurrentWeather from './components/CurrentWeather';
// import WeatherForm from './components/WeatherForm';

class App extends Component {
  render() {
    return (
      <div>
        <Weather />
        <CurrentWeather />
      </div>
    );
  }
}

export default App;
