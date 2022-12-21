import React from "react";

import { timeConverter } from "../../../utils/timeConverter";
import { Binocular , Humidity , Pressure , Wind , SunSet , Clouds  } from "../../Icons";



/* Falta ver como colocar las tarjetas  */
function Today({ sunset, sunrise, pressure, humidity, visibility, wind , clouds }) {
  return (
    <div className="container border p-3 bg-color mt-3">
        <div className="row align-items-center justify-content-center">
      <div className=" col-12 col-md-12  col-lg-2 ">
        <h1 className="display-5 m-md-4 text-center mb-5 ">Today</h1>
        </div>
        <div className=" col-12 col-md-12 col-lg-10">
        <div className="container">
            <div className="row gap-2 justify-content-center">   
          <div className=" col-sm-2 col-md-4  d-flex flex-column justify-content-evenly align-items-center border " style={{
            width:"12rem",height:"12rem"
          }}>
            <p className="fw-bold">Sunset-Sunrise</p>
            <SunSet/>
            <p >{timeConverter(sunrise)}</p>
            <p>{timeConverter(sunset)}</p>
          </div>
          <div className="  col-sm-2 col-md-4  d-flex flex-column justify-content-evenly align-items-center border" style={{
            width:"12rem",height:"12rem"
          }}>
            <p className="fw-bold">Visibility</p>
            <Binocular/>
            <p>{visibility} M</p>
          
          </div>
          <div className=" col-sm-2 col-md-4  d-flex flex-column justify-content-evenly align-items-center border" style={{
            width:"12rem",height:"12rem"
          }}>
            <p className="fw-bold">Humidity</p>
            <Humidity/>
            <p>{humidity} %</p>
         
            
          </div>
          <div className="  col-sm-2 col-md-4  d-flex flex-column justify-content-evenly align-items-center border" style={{
            width:"12rem",height:"12rem"
          }}>
            <p className="fw-bold">Pressure</p>
            <Pressure/>
            <p>{pressure} hPa</p>
           
            
          </div>
          <div className="  col-sm-2 col-md-4  d-flex flex-column justify-content-evenly align-items-center border" style={{
            width:"12rem",height:"12rem"
          }}>
            <p className="fw-bold">Wind</p>
            <Wind/>
            <p>{wind} Km/h</p>
           
            
          </div>
          <div className=" col-sm-2 col-md-4  d-flex flex-column justify-content-evenly align-items-center border" style={{
            width:"12rem",height:"12rem"
          }}>
            <p className="fw-bold">Clouds</p>
            <Clouds/>
            <p>{clouds}%</p>
            
          </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  );
}

export default Today;
