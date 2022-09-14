import React, { useState } from "react";
import User from "./User";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [results, setResults] = useState(null);
  function loadApi() {
    let apiUrl = "https://jsonplaceholder.typicode.com/users";

    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    //console.log(response.data);

    setResults(response.data);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="div">
        {results.map(function (user, index) {
          return (
            <div className="div" key={index}>
              <User user={user} />
            </div>
          );
        })}
      </div>
    );
  } else {
    loadApi();

    return null;
  }
}
