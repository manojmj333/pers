import React from "react";

function Lang(props){
    return (<div className={`lang ${props.hover}`}>
      <i class={`lang-icon ${props.font}`}></i>
      <h3 className={props.text}> {props.name} </h3>
    </div>)
}




export default Lang;
