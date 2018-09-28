import React, {Component} from 'react';
// var WeatherForm = require('./WeatherForm.js');
import WeatherMessage from './WeatherMessage';

class Weather extends Component{
    render (){
    return (
        <div>
        <WeatherMessage />   
        </div>
    )
    }
}

export default Weather;