import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from "react-router-dom"

import LiionComposition from './liionComponent/LiionComposition'
import Banner from './Banner'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

const LiionBattery = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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

      <Banner title="Li-Ion" 
              subTitle="마루는 언제나 당신의 안전을 먼저 생각합니다." 
              backgroundImg="bg-02" 
              isMenu="snb" 
              linkOne="/LiionBattery" 
              linkNameOne="리튬배터리 구성"
              linkTwo="/LiionBattery/LiionRisks" 
              linkNameTwo="리튬배터리 위험성"
              linkThree="/LiionBattery/ElectricCarBattery" 
              linkNameThree="전기차배터리 구성"
              linkFour="/LiionBattery/Ess"
              linkNameFour="ESS"></Banner>

      <Container class="sub-container">
       <Outlet />
      


      </Container>

      <div className='add'>

</div>


    </div>

  )
}

export default LiionBattery