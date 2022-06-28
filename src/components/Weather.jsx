import React, {Input, useState} from "react";
import axios from 'axios';

const Weather = () => {
    const [location, setLocation] = useState("");
    const [data, setData] = useState({});
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=071f2ccb6c38f821da52ffcc2dc52246&units=imperial`;
    
    const searchLocation = (event) => {
        if (event.key === 'Enter'){
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data);
            })
        }
    }

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyPress={searchLocation}
                    placeholder="Enter City"
                />
            </div>
            <div>
                {data.main ? 
                <h1>Location: {data.name}</h1>
                 : null
                }
                {data.main ? 
                <h1>Country: {data.sys.country}</h1>
                 : null
                }
                {data.main ? 
                <h1>Temperature: {Math.round(data.main.temp)}°F</h1>
                 : null
                }
                {data.main ? 
                <h1>High of {Math.round(data.main.temp_max)}°F</h1>
                 : null
                }
                {data.main ? 
                <h1>Low of {Math.round(data.main.temp_min)}°F</h1>
                 : null
                }
                {data.main ? 
                <h1>Feels Like {Math.round(data.main.feels_like)}°F</h1>
                 : null
                }
                {data.main ? 
                <h1>{data.weather[0].description}</h1>
                 : null
                }
                {data.main ? 
                <h1>Humidity: {data.main.humidity}%</h1>
                 : null
                }
                {data.main ? 
                <h1>Wind Speed: {data.main.humidity}MPH</h1>
                 : null
                }
                
            </div>
        </div>
    );
}
export default Weather;