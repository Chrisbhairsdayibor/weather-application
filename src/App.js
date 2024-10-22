import "./App.css"
import {useState}from 'react';


const api ={
    key:"fe721e0f26e07b99defde3e6527132bf",
    base: "https://api.openweathermap.org/data/2.5/",
};

export default function App() {
const [search, setsearch] = useState("");
const [weather,setWeather] = useState({});


const searchPressed = () =>{
fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
.then(res => res.json())
.then(result => {
    setWeather(result); 
});
};

  return (
    <div className="App">
        <header className="App-header">
        {/* Header */}
      <h1>Weather App</h1>

      {/* search Box */}
      <div>
<input type="text" placeholder="Enter city/town..."
onChange={(e)=>setsearch(e.target.value)}
/>
<button onClick={searchPressed}>Search</button>
</div>

{/* If weather is not undefined */}
{typeof weather.main !== "undefined" ?(
    <div>
       {/* Location */}
      <p>{weather.name}</p>

      {/* Temperature F/C */}
<p>{weather.main.temp}°C </p>
      {/* Conndition (sunny) */}
      
      <p>{weather.weather[0].main}</p>
      <p>({weather.weather[0].descritions})</p>
      </div>
):(
""
)}
      </header>
    </div>
  );
}























// Another method


// import React, {useState,useEffect} from 'react'

// export default function App() {
//   const [weather, setWeather] = useState()
//   const [city, setCity] = useState()

//   const api ={
//     key:"fe721e0f26e07b99defde3e6527132bf",
//     base: "https://api.openweathermap.org/data/2.5/",
// }



//   useEffect(() => {
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//         .then(response => response.json())
//         .then(json => setWeather(json))
//   }, [city,apikey]);
  
  
//   return (
//     <div className='App'>
//       <pre>{JSON.stringify(weather, null, 2)}</pre>
//       <input type='text' onChange={(e)=>{setCity(e.target.value)

//       }}
//       value={city}
//       />
      
//     </div>
//   )
// }








