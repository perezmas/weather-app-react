import React, {useState} from "react";
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
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-10">
            <div>
                <div className="flex justify-center">
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        onKeyPress={searchLocation}
                        placeholder="Enter City"
                        className="text-black bg-white/20 rounded text-4xl py-5"
                    />
                </div>
            </div>
            <div className="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <div className="flex grid grid-cols-2">
                    <div>
                        {data.main ?
                            <h1>{data.name}</h1>
                            : null
                        }

                    </div>
                    <div>
                        {data.main ?
                            <h1>Country: {data.sys.country}</h1>
                            : null
                        }
                    </div>
                </div>
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