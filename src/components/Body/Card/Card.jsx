import React from "react";
import { actualDate } from "../../../utils/timeConverter";
function Card({
  city,
  country,
  icon,
  temp,
  feels_like,
  description,
  min_temp,
  max_temp,
  clouds,
}) {
  return (
    <>
      <div className="container-fluid p-3 d-flex-column text-center border ">
        <div className="card-container">
          <div className="card-body">
            <h1 className="display-6">
              <span>{city},</span>
              {country}
            </h1>
            <p className="">Updated:{actualDate()}</p>
            <img src={icon} alt="icon" className="w-25" />
            <h1 className="display-5 fw-bold">{temp}°C</h1>
            <p className="fs-5">
              <span className="fw-bold">Feels like: </span>
              {feels_like}°C
            </p>
            <p className="fs-4">{description}</p>
            <div className="container-fluid"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
