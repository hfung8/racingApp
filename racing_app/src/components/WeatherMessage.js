import React, {Component} from 'react'; 
import '../Weather.css';
class Form extends Component {
  render () {
    return (
      <div>
        <form>
          <input className="input" type="text"></input>
          <button className="button" type="submit">Get Weather</button>
        </form>
      </div>
    );
  }
}
class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul>
            <li><a className="active" href="/getWeather"><h3>Get Weather</h3></a></li>
            <li><a href="/about"><h3>About</h3></a></li>
            <li><a href="/examples"><h3>Examples</h3></a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
class WeatherMessage extends Component {
  getInitialState() {
    return {
      location: 'Miami',
      temp: 88
    };
  }
  handleSearch() {
  } 
  render() {
    
    return (
      <div>
        <NavBar />
        <Form />
      </div>
    );
  }
}

export default WeatherMessage;