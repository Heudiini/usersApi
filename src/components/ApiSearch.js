// ApiSearch.js (previously WeatherForecast.js)
import React, { useState, useEffect } from "react";
import User from "./User";
import axios from "axios";

export default function UserList(props) {
  const [loaded, setLoaded] = useState(false);
  const [results, setResults] = useState(null);

  useEffect(() => {
    loadApi();
  }, []);

  function loadApi() {
    let apiUrl = "https://jsonplaceholder.typicode.com/users";

    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
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
    return null;
  }
}
