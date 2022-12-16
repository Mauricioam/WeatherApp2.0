import { API_KEY } from "../../components/Header/Nav";
import axios from "axios";
import {getForecastApi } from "./forecastApi";

export const getWeatherApi = (setForecast,setWeather,city) => {
       axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${city && city[0].lat}&lon=${city && city[0].lon}&appid=${API_KEY}&units=metric`)
       .then(res => setWeather(res.data))
       .catch(error => alert(error));
       getForecastApi(setForecast,city);
}    
