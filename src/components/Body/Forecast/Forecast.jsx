import { timeConverter } from "../../../utils/timeConverter";

function Forecast({ hour, icon, temp }) {
  return (
    <>
      <div className="container d-flex-column text-center border rounded bg-color forecast-mobile">
        <p className="fw-bold">{timeConverter(hour)}0</p>
        <img src={icon} alt="icon" className="w-50" />
        <p className="fw-bold">{temp}°C</p>
      </div>
    </>
  );
}

export default Forecast;
