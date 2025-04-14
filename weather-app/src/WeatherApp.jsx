import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "pune",
        feelsLike: 33.41,
        humidity: 12,
        temp: 36.08,
        tempMin: 36.08,
        tempMax: 36.08,
        weather: "haze",
       
    });

    let updateInfo = (newInfo) =>{//update info give info and then pass to setweatherinfo -> rerendering of object
        setWeatherInfo(newInfo);
    };

    
    return(
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}