import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from "react-router-dom"

import LiionComposition from './liionComponent/LiionComposition'

import Banner from './Banner'

import Company1 from './images/company1.jpg'
import Company2 from './images/company2.jpg'
import Company3 from './images/company3.jpg'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

const Company = () => {

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

      <Banner title="회사소개" subTitle="한국소방기구제작소는 언제나 당신의 안전을 먼저 생각합니다." backgroundImg="bg-02" isMenu="snb" linkOne="/Company" linkNameOne="마루" linkTwo="/Company/CompanyMap" linkNameTwo="찾아오시는 길" isLi3="d-none" isLi4="d-none"></Banner>

      <Container class="sub-container">
        <Outlet />
      </Container>

      <div className='add'>

      </div>


    </div>


  )
}

export default Company