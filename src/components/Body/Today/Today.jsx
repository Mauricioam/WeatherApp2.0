import React from "react";

import { timeConverter } from "../../../utils/timeConverter";
import { Binocular , Humidity , Pressure , Wind , SunSet , Clouds  } from "../../Icons";



/* Falta ver como colocar las tarjetas  */
function Today({ sunset, sunrise, pressure, humidity, visibility, wind }) {
  return (
    <div className="container border p-3">
        <div className="row align-items-center justify-content-center">
      <div className="col-sm-2">
        <h1 className="display-5 m-0 ">Today</h1>
        </div>
        <div className="col-sm-10">
        <div className="container">
            <div className="row gap-3 justify-content-center">   
          <div className=" col-sm-4  d-flex flex-column justify-content-center align-items-center border " style={{
            maxWidth:"12rem",maxHeight:"12rem"
          }}>
            <p>Sunset-Sunrise</p>
            <SunSet/>
            <p className="subtitles">{timeConverter(sunrise)}</p>
            <p>{timeConverter(sunset)}</p>
          </div>
          <div className="col-sm-4  d-flex flex-column justify-content-center align-items-center border" style={{
            maxWidth:"12rem",maxHeight:"12rem"
          }}>
            <p>Visibility</p>
            <Binocular/>
            <p>{visibility} Km</p>
          
          </div>
          <div className="col-sm-4  d-flex flex-column justify-content-center align-items-center border" style={{
            maxWidth:"12rem",maxHeight:"12rem"
          }}>
            <p>Humidity</p>
            <Humidity/>
            <p>{humidity} %</p>
         
            
          </div>
          <div className="col-sm-4  d-flex flex-column justify-content-center align-items-center border" style={{
            maxWidth:"12rem",maxHeight:"12rem"
          }}>
            <p>Pressure</p>
            <Pressure/>
            <p>{pressure} hPa</p>
           
            
          </div>
          <div className="col-sm-4  d-flex flex-column justify-content-center align-items-center border" style={{
            maxWidth:"12rem",maxHeight:"12rem"
          }}>
            <p>Wind</p>
            <Wind/>
            <p>{wind} Km/h</p>
           
            
          </div>
          <div className="col-sm-4  d-flex flex-column justify-content-center align-items-center border" style={{
            maxWidth:"12rem",maxHeight:"12rem"
          }}>
            <p>Clouds</p>
            <Clouds/>
            <p>{timeConverter(sunrise)}</p>
            <p>{timeConverter(sunset)}</p>
            
          </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  );
}

export default Today;
