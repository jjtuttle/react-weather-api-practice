import React, { useState } from 'react';
import './App.css';

const api = {
  key: "bd8ce47b602572508e5b4bac2f9ade6d",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [ query, setQuery ] = useState('');
  const [ weather, setWeather ] = useState({});

  const search = e => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    const months = [ "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December" ];
    const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

    const day = days[ d.getDay() ];
    const date = d.getDate();
    const month = months[ d.getMonth() ];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }



  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 60) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="app__searchBox">
          <input
            type="text"
            className="app__searchBar"
            placeholder='Search...'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="app__locationBox">
              <div className="app__location">{weather.name}, {weather.sys.country}</div>
              <div className="app__locationDate">{dateBuilder(new Date())}</div>
            </div>
            <div className="app__weatherBox">
              <div className="app__weatherTemp">
                {Math.round(weather.main.temp)}°F
              </div>
              <div className="app__weather">{weather.weather[ 0 ].main}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
