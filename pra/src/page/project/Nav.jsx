



import React, { useState } from 'react';
import { FiDatabase } from "react-icons/fi";
import "../style/nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* First row (icon and menu toggle) */}
      <div className="mean">
        <div className="icon-container">
          <span className="icon" onClick={toggleSidebar}>
            <FiDatabase />
          </span>
        </div>

        {/* Sidebar */}
        <div className={`sidebar ${isOpen ? "open" : ""}`} id="myname">
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;













//::::::::: second row class line start 

// import React from 'react';
// import { FiDatabase } from "react-icons/fi";
// import "../style/nav.css";

// // https://react-icons.github.io/react-icons/icons/fi/

// function Nav() {

//     const Sucks=()=>{
//         if (document.getElementById("myname").style.width === "256px") {
//             document.getElementById("myname").style.width = "0";
//           } else {
//             document.getElementById("myname").style.width = "256px";
//           }
//     }

//   return (
//     <div>
// {/* first row class Line start  */}



//     <div className="mean">


//     <div className="icone">
//     <span class="icon" onClick={Sucks}>
//     <FiDatabase />
// </span>
//     </div>


//     <div className="siders" id="myname">

// <nav>
//     <ul>
//     <li><a href="#">Home</a></li>
//     <li><a href="#">About</a></li>
//     <li><a href="#">Services</a></li>
//     <li><a href="#">Contact</a></li>
//     </ul>
// </nav>


// </div>

//     </div>


// {/* 
//     last row class line start */}
//     </div>
//   )
// }

// export default Nav
