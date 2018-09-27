import React, {Component} from 'react'; 

class Form extends Component{
    render(){
        return (
        <div>
        <form>
            <input type="text" placholder="place your text here"></input>
        </form>
        </div>
        )
    }
}
class WeatherMessage extends Component{  
    
        render(){
            return (
                <div>
                <h1>Hello World</h1>
                <Form />
                </div>
            )
        }
    }

export default WeatherMessage;