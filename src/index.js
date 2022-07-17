import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./header";

const Body=()=>{
  return(
    <div>
      <h1><b>Fun Facts About React</b></h1>
      <ol>
        <li>Was First Released in 2013</li>
        <li>Was Originally Created by Jordan Walke</li>
        <li>Has Well Over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
    </div>

  )
}

const Footer=()=>{
  return(
    <small>2022 Ben Hamphrey All Rights Reserved</small>
  )
}

const Page =()=> {
  return (
   <div>
    <Header/>
    <Body/>
    <Footer/>

   </div>
  )
}


ReactDOM.render(<Page/>,document.getElementById("root"))

