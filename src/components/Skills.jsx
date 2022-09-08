import React from "react";
import Lang from "./Lang"
function Skills(){
    return (<div id="skills">
    <h1> Skills </h1>
    <div className="icon-div">
    <Lang hover="html5" text="html-text" font="fa-brands fa-html5" name="HTML 5"/>
    <Lang hover="css3" text="css-text"font="fa-brands fa-css3-alt" name="CSS 3"/>
    <Lang hover="js" text="js-text" font="fa-brands fa-js" name="Javascript"/>
    <Lang hover="python" font="fa-brands fa-python" name="Python"/>
    <Lang hover="node" font="fa-brands fa-node-js" name="Nodejs"/>
    <Lang hover="mongo" font="fa-solid fa-database" name= "MongoDB"/>
    <Lang hover="react" font="fa-brands fa-react" name="Reactjs"/>
    </div>
    <p>Other Skills: Responsive web designing and Problem Solving.</p>
    </div>)
}

export default Skills;
