import React from "react";
import aboutman from "../aboutman.png";
import office from "../office-man.png"
function About(){
    return (<div id="about">
    <div className="profile">
      <h1> About Me </h1>
      <img className="officeman" alt="profile pic" src={office}/>
      <h3> Hey! I'm Manoj — a self-taught web developer hailing from Chennai. Currently, I am pursuing my 3rd year Bachelor
       of Engineering in Electronics and Communication but for the past few months I spent a lot of time learning coding
       and I'm looking forward to implement what I've learnt and make new projects.
         </h3>
    </div>
    </div>)
}






  // <img className="aboutman" alt="chad" src={aboutman} />




export default About;
