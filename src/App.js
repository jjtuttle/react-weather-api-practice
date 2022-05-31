import React, { useEffect, useState } from 'react';
import './App.css';

const api = {
  key: "bd8ce47b602572508e5b4bac2f9ade6d",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  const [ lat, setLat ] = useState([]);
  const [ long, setLong ] = useState([]);


  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     setLat(position.coords.latitude);
  //     setLong(position.coords.longitude);
  //   });

  //   console.log("Latitude is::: ", lat);
  //   console.log('Longitude is >>>>>', long);
  // }, [ lat, long ]);





  return (
    <div className="app"> 
      <main>
        <div className="app__searchBox">
          <input
            type="text"
            className="app__searchBar"
            placeholder='Search...'
          />
        </div>
      </main>
    </div>
  );
}

export default App;
