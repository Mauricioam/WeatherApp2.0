import axios from "axios";
import { useState } from "react";

export const API_KEY = "bb4a906819197c0bec517509eea8775a";

function Header({setCity}){

    const [input, setInput] = useState([]);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!input.length){
            alert("Please enter a city");
            return
        }
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${input && input}&appid=${API_KEY}`)
        .then(res => setCity(res))
        .catch(error => console.log(error));
        

    }

    const handleInput = (e) =>  {
        const inputValue = e.currentTarget.value;
        setInput(inputValue);
    }

    return (
        <>
        <form className="d-flex container p-3" onSubmit={handleSubmit}  >
        <button className="btn btn-outline-warning" type="submit">
          Search
        </button>
        <input
        onChange={handleInput}
         autoComplete="off"
          className="form-control ms-2 input"
          type="search"
          placeholder="Enter city..."
          aria-label="Search"
          name="city"
        />
      </form>
        </>
    )
}

export default Header;