import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Import BrowserRouter
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Home from "../Home"
import ReferenceWrite from "../ReferenceWrite"
import Company from '../Company'
import Reference from '../Reference';
import ReferenceDetails from '../ReferenceDetails';
import AdminPassword from '../AdminPassword';
import Posting from '../Posting';
import Logo from "../images/1.png"
import Product from "../Product"
import { useLocation } from "react-router-dom";
import LiionComposition from '../liionComponent/LiionComposition';
import LiionRisks from '../liionComponent/LiionRisks';
import ElectricCarBattery from '../liionComponent/ElectricCarBattery';
import Ess from '../liionComponent/Ess';
import { useCallback } from 'react';
import NotFound from '../NotFound';
import LiionBattery from '../LiionBattery';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
//Header toggle 수정!!!! 중요

const Header = () => {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        console.log("로그인 검증 시작");
        Axios.get('http://localhost:8080/checkuser').then((response) => {
            console.log(response.data);
            setIsLogin(true);
        })
    });

    const [navbar, setNavbar] = useState(false);

    const changeBackground = useCallback(() => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }, []);

    window.addEventListener('scroll', changeBackground);

    function logout() {
        Axios.post('http://localhost:8080/logout').then((response) => {
            console.log(response.data);
            setIsLogin(false);
        })
    }

    return (
        <header>

            <Router>

                <Navbar fixed="top" bg="light" expand="lg" className={navbar ? 'bg-white border-bottom' : 'bg-transparent'} >
                    <Container className='top_con '>
                        <Navbar.Brand href="#home">
                            <img className='me-5' src={Logo} style={{ height: '50px', width: '60px ' }}></img>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav " />
                        <Navbar.Collapse id="basic-navbar-nav ">

                            <Container className="d-flex justify-content-center">
                                <Nav className="d-flex" >
                                    <Nav.Link className={navbar ? 'text-black' : 'text-white'} as={Link} to="/">홈</Nav.Link>
                                    <Nav.Link className={navbar ? 'ms-5 text-black' : 'ms-5 text-white'} as={Link} to="/LiionBattery">Li-Ion</Nav.Link>
                                    <Nav.Link className={navbar ? 'ms-5 text-black' : 'ms-5 text-white'} as={Link} to="/Company">회사 소개</Nav.Link>
                                    <Nav.Link className={navbar ? 'ms-5 text-black' : 'ms-5 text-white'} as={Link} to="/Product">제품 소개</Nav.Link>
                                    <Nav.Link className={navbar ? 'ms-5 text-black' : 'ms-5 text-white'} as={Link} to="/ReferenceWrite">고객 지원</Nav.Link>
                                </Nav>


                            </Container>
                            {isLogin ? <Button onClick={logout} variant="outline-success">로그아웃</Button> : ""}

                        </Navbar.Collapse>
                    </Container>

                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ReferenceWrite" element={<ReferenceWrite />} />
                    <Route path="/Company" element={<Company />} />

                    <Route path="/LiionBattery" element={<LiionBattery />} >
                        <Route path='/LiionBattery/' element={<LiionComposition />} />
                        <Route path='/LiionBattery/LiionRisks' element={<LiionRisks />} />
                        <Route path='/LiionBattery/ElectricCarBattery' element={<ElectricCarBattery />} />
                        <Route path='/LiionBattery/Ess' element={<Ess />} />
                    </Route>
                    <Route path="/Product" element={<Product />} />
                    <Route path="/Reference" element={<Reference />} />
                    <Route path="/AdminPassword" element={<AdminPassword />} />
                    <Route path='/details/:no' element={<ReferenceDetails />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </Router>
        </header>
    )
}

export default Header