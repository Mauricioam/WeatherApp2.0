import axios from "axios";
import { useState } from "react";
import { MagnifyIcon } from "../Icons";

export const API_KEY = "bb4a906819197c0bec517509eea8775a";

function Header({ setCity, setLoading, isLoading }) {
  const [input, setInput] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.length) {
      alert("Please enter a city");
      return;
    }

    setLoading(true);
    console.log(input);
    axios
      .get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${
          input && input
        }&appid=${API_KEY}`
      )
      .then((res) => {
        if (res.data.length > 0) {
          console.log(res.data);
          setCity(res.data);
          setLoading(false);
        } else {
          alert("Enter a valid city");
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleInput = (e) => {
    const inputValue = e.currentTarget.value;
    setInput(inputValue);
  };
  return (
    <>
      <header className="row justify-content-center">
        <form
          className=" col-lg-12 col-md-10 col-sm-10 col-10  d-flex  gap-3  p-4"
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleInput}
            autoComplete="off"
            className="form-control ms-2 input"
            type="search"
            placeholder="Enter city..."
            aria-label="Search"
            name="city"
          />

          <button
            className="btn btn-outline-warning d-flex align-items-center justify-content-center"
            type="submit"
            disabled={isLoading}
          >
            <MagnifyIcon />
          </button>
        </form>
      </header>
    </>
  );
}

export default Header;
