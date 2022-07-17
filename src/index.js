import React from "react";
import ReactDOM from "react-dom";

const Page =()=> {
  return (
   <div>
      <img src="./logo192.png" width="50px" height="50px" alt="logo"></img>
      <h1>Fun Facts About React</h1>
      <ul>
        <li>Was First Released in 2013</li>
        <li>Was Originally Created by Jordan Walke</li>
        <li>Has Well Over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>

   </div>
  )
}

ReactDOM.render(<Page/>,document.getElementById("root"))

