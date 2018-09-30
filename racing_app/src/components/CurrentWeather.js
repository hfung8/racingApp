import React, {Component} from 'react';
import '../Weather.css';
// import data from '../../DummyData';

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_city: 'Louisville',
      current_condition: 1,
      current_day: 'Wednesday',
      current_temperature: '46.0 F (7.8 C)',
      expected_high: '51.0 F',
      expected_low: '32.0 F',
      summary: 'Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.'
    };

  }
  render () {
    return (
      <div>
        <span>
          <h5>Current City</h5>
          <input className="currentWeather" value={this.state.current_city} style={{margin: 'auto', display: 'block'}}/> <br />
          <h5>Current Condition</h5>
          <input className="currentWeather" value={this.state.current_condition} style={{margin: 'auto', display: 'block'}}/> <br />
          <h5>Current Day</h5>
          <input className="currentWeather" value={this.state.current_day} style={{margin: 'auto', display: 'block'}}/> <br />
          <h5>Current Temperature</h5>
          <input className="currentWeather" value={this.state.current_temperature} style={{margin: 'auto', display: 'block'}}/> <br /> 
          <h5>Expected High</h5>
          <input className="currentWeather" value={this.state.expected_high} style={{margin: 'auto', display: 'block'}}/> <br />
          <h5>Expected Low</h5>
          <input className="currentWeather" value={this.state.expected_low} style={{margin: 'auto', display: 'block'}}/> <br />
          <h5>Summary</h5>
          <input className="currentWeather" value={this.state.summary} style={{margin: 'auto', display: 'block'}}/> <br />
        </span>
      </div>
    );
  }

}

export default CurrentWeather;