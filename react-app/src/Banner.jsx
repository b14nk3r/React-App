import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet
  } from "react-router-dom";
  

const Banner = (props) => {
  return (
      <div id="sub-visual" className={props.backgroundImg}>
          <div className="sub_tit">
              <h1>{props.title}</h1>
              <h5>{props.subTitle}</h5>
          </div>
          
          <ul className={props.isMenu}>
          <li><Link to={props.linkOne}>{props.linkNameOne}</Link></li>
          <li><Link to={props.linkTwo}>{props.linkNameTwo}</Link></li>
          <li><Link to={props.linkThree}>{props.linkNameThree}</Link></li>
          <li><Link to={props.linkFour}>{props.linkNameFour}</Link></li>
        </ul> : 
      </div>
  )
}

export default Banner