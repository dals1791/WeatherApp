import React from "react"

const WeatherDisplay = ({weatherData}) => {
    
    const changeColor= ({weatherData})=> {
        // console.log(weatherData)
        switch (true){
            case weatherData.main.temp <40:
                return <span style={{color: "cyan"}}>{weatherData.main.temp}°F</span>
            break;
            case weatherData.main.temp >90:
                return <span style={{color: "red"}}>{weatherData.main.temp}°F</span>
            default:
                return <span className="tempMain"> {weatherData.main.temp}°F</span>
    
            }
    }
    
    const loaded =()=>{
        
        return (
            <div>
                <div className="city">
                <h2> City: {weatherData.name}</h2>
                <h2>Looks Like: {weatherData.weather[0].description}</h2>
                </div>
                
             <div className="tempSection">
             <h2>Temperature: {changeColor({weatherData})}</h2>
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