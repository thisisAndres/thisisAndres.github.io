import React, {useState} from "react";
import "./FetchApi.css"
const Weather =  (props) => {
    //variables and constants
    const [apiCity, setApiCity] = useState("")
    const [city, setCity] = useState("")
    const [icon, setIcon] = useState("")
    const [render, setRender] = useState(false)
    const URL = "https://api.openweathermap.org/data/2.5/weather?q="+apiCity+"&units=metric&appid=";
    const KEY = "e4a6424c806d766d26025dcbbace4b2d";
    const [weather, setWeather] = useState("")
    const iconURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"

    //Get info from api
    function loadApi (){
        fetch(URL+KEY)  
        .then(response => response.json())
        .then(data => {
            setIcon(data.weather[0].icon)
            setCity(data.name)
            setWeather(data.main.temp)
        });
    }

    
    //save the input value to the state of city 
    function onChange(event){
        const value = event.target.value;
        setApiCity(value);
    }

    //To load the info when clicked
    function getWeather (event){
        loadApi()
        setRender(true)
        event.preventDefault();
        setApiCity("")
        props.renderText();
    }


    return(
        <div>
        {  render && <div>
            <h1>{city}</h1> 
            <p>Temperature: {weather}°</p> 
            <img src={iconURL} alt="icon"/>
        </div>}

            <form className="">
                    <input autoFocus placeholder="City name" className="input" value={apiCity} onChange={onChange} />
                    <button className="button" onClick={getWeather}>Get Weather</button>
            </form>
         </div>
    
    )
}

export default Weather;