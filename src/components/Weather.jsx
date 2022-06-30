import React, { useState } from "react";
import axios from 'axios';

const Weather = () => {
    const [location, setLocation] = useState("");
    const [data, setData] = useState({});
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=071f2ccb6c38f821da52ffcc2dc52246&units=imperial`;

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            try {
                axios.get(url).then((response) => {
                    setData(response.data);
                    console.log(response.data);
                })
            } catch (error) {
                alert(error);
            }
        }
    }

    const current = new Date();

    return (
        <div className="flex-auto bg-gradient-to-r from-cyan-500 to-blue-500 py-10">
            <div>
                <div className="flex justify-center">
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        onKeyPress={searchLocation}
                        placeholder="Enter City..."
                        className="text-white bg-white/20 rounded text-4xl py-5"
                    />
                </div>
            </div>
            <div>

            </div>
            <div className="flex bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4">
                <div className="justify-left w-1/2 text-left text-6xl px-5">
                    <div className="flex">
                        {data.main ?
                            <h1>{current.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', })}</h1>
                            : null
                        }
                    </div>
                    <div>
                        {data.main ?
                            <h1>{current.toLocaleDateString()}</h1>
                            : null
                        }
                    </div>
                </div>
                <div className="text-right justify-right text-6xl font-bold w-1/2 px-5">
                    <div>
                        {data.main ?
                            <h1>{data.name},</h1>
                            : null
                        }

                    </div>
                    <div>
                        {data.main ?
                            <h1>{data.sys.country}</h1>
                            : null
                        }
                    </div>
                </div>
            </div>
            <div className="sm:w-[90%] w-full h-[0.25px] bg-white mt-5" />
            <div className="flex text-4xl text-left  font-medium">
                <ul className="flex flex-row justify-center text-4xl text-white">
                    {data.main ?
                        <h1>Temperature: <br/>{Math.round(data.main.temp)}°F</h1>
                        : null
                    }
                    {data.main ?
                        <h1>High of <br/>{Math.round(data.main.temp_max)}°F</h1>
                        : null
                    }
                    {data.main ?
                        <h1>Low of <br/>{Math.round(data.main.temp_min)}°F</h1>
                        : null
                    }
                    {data.main ?
                        <h1>Feels Like <br/>{Math.round(data.main.feels_like)}°F</h1>
                        : null
                    }
                </ul>
            </div>
            <div className="bg-gradient-to-r from-white to-blue-500">
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