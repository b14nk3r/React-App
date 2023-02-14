import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from "react-router-dom"

import LiionComposition from './liionComponent/LiionComposition'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

const LiionBattery = () => {

  const { pathname } = useLocation();

  const [list, setList] = useState(1);

  const changeList = (e) => {
    if (e.currentTarget.id === "1") {
      setList(1);
    } else if (e.currentTarget.id === "2") {
      setList(2);
    } else if (e.currentTarget.id === "3") {
      setList(3);
    } else if (e.currentTarget.id === "4") {
      setList(4);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>

      <div id="sub-visual" class="bg-02">
        <div class="sub_tit">
          <h1>Li-ION</h1>
          <h5>한국소방기구제작소는 언제나 당신의 안전을 먼저 생각합니다.</h5>
        </div>
        <ul class="snb">
          <li><Link to="/LiionBattery">리튬배터리 구성</Link></li>
          <li><Link to="/LiionBattery/LiionRisks">리튬배터리 위험성</Link></li>
          <li><Link to="/LiionBattery/ElectricCarBattery">전기차배터리 구성</Link></li>
          <li><Link to="/LiionBattery/Ess">Energy Storage System</Link></li>
        </ul>
      </div>

      <Container class="sub-container">
       <Outlet />
      


      </Container>

      <div className='add'>

</div>


    </div>

  )
}

export default LiionBattery