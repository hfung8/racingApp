import React, {Component} from 'react'; 
import '../Weather.css';
class Form extends Component{

    render(){
        return (
        <div>
        <form>
            <input className="input" type="text" placeholder="place your text here"></input>
        </form>
        </div>
        )
    }
}

class NavBar extends Component {
    render(){
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
        )
    }
}
class WeatherMessage extends Component{  
    
        render(){
            return (
                <div>
                    <NavBar />
                    <h1>Weather Today</h1>    
                    <Form />
                </div>
            )
        }
    }

export default WeatherMessage;