import { timeConverter } from "../../../utils/timeConverter";

function Forecast({ hour, icon, temp }) {
  return (
    <>
      <div className="container border rounded">
        <p>{timeConverter(hour)}0</p>
        <img src={icon} alt="icon" className="w-50" />
        <p>{temp}°C</p>
      </div>
    </>
  );
}

export default Forecast;
