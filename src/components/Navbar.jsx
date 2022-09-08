import React from "react";


function Navbar(props){
  return(<nav>

    <h3><i class="fa-solid fa-code"></i> Mevsworld</h3>
    <ul>
    <li className="nav-items"><a href="#"> Home </a> </li>
    <li className="nav-items"><a href="#about"> About </a> </li>
    <li className="nav-items"><a href="#skills"> Skills </a> </li>
    </ul>
  </nav>)
}



export default Navbar;
