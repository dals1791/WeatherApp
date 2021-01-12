import React from "react"

const WeatherDisplay = ({weatherData}) => {
    const loaded =()=>{
        return (
            <div>
                <div className="city">
                <h2> City: {weatherData.name}</h2>
                <h2>Looks Like: {weatherData.weather[0].description}</h2>
                </div>
                 <div className="tempSection">
                     <h2 className="tempMain">Temperature {weatherData.main.temp}°F</h2>
                 <div className="tempData">
                     <h3>{Math.floor(weatherData.main.temp_min)}°F - {Math.floor(weatherData.main.temp_max)}°F</h3>
                 </div>
                 <h4>Feels Like: {weatherData.main.feels_like}°F</h4>
                </div>
                
     
            </div>
     
         )
    }
    const loading=()=> {
       return <h2 id="loading"> Type in your Zip Code and Click Submit!</h2>
    }
    return weatherData ? loaded() : loading()
}
export default WeatherDisplay