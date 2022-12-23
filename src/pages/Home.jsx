import { useEffect, useState } from "react";
import { getWeatherApi } from "../utils/apiCalls/weatherApi";
import Welcome from "../components/Body/Welcome/Welcome";
import Loading from "../components/Loading/Loading";
import Card from "../components/Body/Card/Card";
import Forecast from "../components/Body/Forecast/Forecast";
import Today from "../components/Body/Today/Today";
import Header from "../components/Header/Nav";
import Footer from "../components/Footer/Footer";

/* Container for the homepage */

function Home() {
    /* states */
  const [city, setCity] = useState([]);
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const [isLoading, setLoading] = useState(false);
/* -------------------------------------- */

/* Api call */
  useEffect(() => {
    if(city.length > 0){
      getWeatherApi(setForecast, setWeather, city);
    }
  }, [city]);
/* -------------------------------------- */

const style = weather ? {minHeight:"0"} : {minHeight:"100vh"};

  return (
    <>
   
    <div className="container-fluid">

    <div className="container-fluid d-flex flex-column align-items-center justify-content-center " style={style} >
    {!(weather && forecast) ? <div><Welcome/></div> : ""}
        <Header setCity={setCity} setLoading={setLoading} isLoading={isLoading}/>
      </div>
    {isLoading ?     <div className="container text-center m-5">
    <Loading/> 
    </div> : ""}

      <div className="row justify-content-center align-items-center ">
     
      <div className="col-md-4 ">
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
            <div className="col-md-8">
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

     </div>
      </div>
      </div>
      <div className="container-fluid d-md-flex justify-content-center gap-5 mt-3">
    
        {forecast  && forecast.list.map((item) => (
          
       
            <Forecast
            hour={item.dt}
            icon={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
            temp={item.main.temp}
            />
         
            ))}    
      
     </div>

          <Footer/>
    </>
  );
}

export default Home;
