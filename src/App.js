import React, {useState} from "react"
import './App.css';
import Form from "./Components/Form"
import WeatherDisplay from "./Components/WeatherDisplay"

function App() {

const [weather, setWeather] = useState(null)

const getWeather = async (searchZip) => {
  const apiKey= "bbb59f00c92b004f07e523eaa0647cf7"
  const countryCode= "US"
  
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${searchZip},${countryCode}&units=imperial&appid=${apiKey}`)
  const data = await response.json()
  setWeather(data)
}

  return (
    <div className="App">
     <h1>WeatherApp</h1>
     <Form Weather={getWeather} />
     <WeatherDisplay weatherData={weather} />
    </div>
  );
}

export default App;
