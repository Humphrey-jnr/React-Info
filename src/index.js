import React from "react";
import ReactDOM from "react-dom";

const Header =()=>{
  return(
    <header>
      <nav>
        <img src="./logo192.png"alt="logo"></img>
      </nav>
    </header>
  )
}
const Page =()=> {
  return (
   <div>
    <Header/>
      <h1>Fun Facts About React</h1>
      <ol>
        <li>Was First Released in 2013</li>
        <li>Was Originally Created by Jordan Walke</li>
        <li>Has Well Over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
      <Footer/>

   </div>
  )
}

const Footer=()=>{
  <h4>2022 Ben Hamphrey All Rights Reserved</h4>
}
ReactDOM.render(<Page/>,document.getElementById("root"))

