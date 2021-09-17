import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { sidebarData } from "./sidebarData";
import "./sidenav.css";

const Side = (props) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState(sidebarData);
  }, []);

  console.log(state);

  const handleClick = () => {

  }

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  return (
    <>
      <div class="sidenav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
        <button class="dropdown-btn" onClick={handleClick}>
          Dropdown
          <i class="fa fa-caret-down"></i>
        </button>
        <ul class="dropdown-container">
          <li href="#">Link 1</li>
          <li href="#">Link 2</li>
          <li href="#">Link 3</li>
        </ul>
        <a href="#contact">Search</a>
      </div>


    </>

    // <>
    //   <ul>
    //     {state.map((tab) => (
    //       <li class="dropdown cssState" key={tab.id}>
    //         {tab.name}
    //         <ul>
    //           {tab.childData &&
    //             tab.childData.map((child) => (
    //               <li key={child.id}>
    //                 {child.name}
    //                 <ul>
    //                   {child.subChildData &&
    //                     child.subChildData.map((subChild) => (
    //                       <li>{subChild.name}</li>
    //                     ))}
    //                 </ul>
    //               </li>
    //             ))}
    //         </ul>
    //       </li>
    //     ))}
    //   </ul>
    // </>
  );
};
const Sidebar = withRouter(Side);
export default Sidebar;
