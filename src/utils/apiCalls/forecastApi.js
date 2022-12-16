import { API_KEY } from "../../components/Header/Nav";
import axios from "axios";

  export const getForecastApi = (setForecast,city) => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${city && city.data[0]?.lat}&lon=${city && city.data[0]?.lon}&cnt=8&appid=${API_KEY}&units=metric`)
        .then(res => setForecast(res.data))
        .catch(error => alert(error.message))
  }
