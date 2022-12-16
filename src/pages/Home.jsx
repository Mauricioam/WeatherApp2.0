import { useEffect, useState } from "react";
import { getWeatherApi } from "../utils/apiCalls/weatherApi";
import Card from "../components/Body/Card/Card";
import Forecast from "../components/Body/Forecast/Forecast";
import Today from "../components/Body/Today/Today";
import Header from "../components/Header/Nav";

/* Container for the homepage */

function Home() {
    /* states */
  const [city, setCity] = useState([]);
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
/* -------------------------------------- */

/* Api call */
  useEffect(() => {
    if(city.length > 0){
      getWeatherApi(setForecast, setWeather, city);
    }
  }, [city]);
/* -------------------------------------- */


  return (
    <>
      <div className="container">
        <Header setCity={setCity} />
      </div>
    <div className="container-fluid">
        <div className="row justify-content-center ">
     
      <div className="col-sm-4 ">
        {weather && (
          <Card
            city={weather?.name}
            country={weather?.sys.country}
            icon={`http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`}
            temp={weather?.main.temp}
            feels_like={weather.main.feels_like}
            description={weather?.weather[0].description}
            min_temp={weather?.main.temp_min}
            max_temp={weather?.main.temp_max}
          />
        )}
        </div>
            <div className="col-sm-8">
        {weather && (
          <Today
            sunset={weather.sys.sunset}
            sunrise={weather.sys.sunrise}
            pressure={weather.main.pressure}
            humidity={weather.main.humidity}
            visibility={weather.visibility}
            wind={weather.wind.speed}
            clouds={weather.clouds.all}
          />
        )}
       <div className="container-fluid">
        <div className="row text-center">
        {forecast  && forecast.list.map((item) => (
            <div className="col p-2">
            <Forecast
            hour={item.dt}
            icon={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
            temp={item.main.temp}
            />
            </div>
        ))}    
        </div>
     </div>
     </div>
      </div>
      </div>
    </>
  );
}

export default Home;
