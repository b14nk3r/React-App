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
import { useLocation, useNavigate } from "react-router-dom";
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
import AOS from "aos";
import "aos/dist/aos.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Tech from '../Tech';
import TechDetails from '../TechDetails';
import ReferenceEdit from '../ReferenceEdit';
import CompanyInfo from '../companyComponent/CompanyInfo';
import CompanyMap from '../companyComponent/CompanyMap';


import { Fab } from '@mui/material';
import { Call } from '@mui/icons-material';



const Header = () => {

    const [isLogin, setIsLogin] = useState(false);


    useEffect(() => {
        AOS.init();
    })

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
            window.location.replace("/");
        })
    }

    return (
        <header>

                <Fab className="floating-text" variant="extended" style={{ position: "fixed", bottom: "20px", right: "20px", boxShadow: "none", backgroundColor: "#4caf50", color: "white" }}>
                    <Call sx={{ mr: 1 }} />
                    031-796-9390
                </Fab>
        

            <Router>

                <Navbar fixed="top" expand="lg" variant='dark' className={navbar ? 'bg-dark' : 'bg-transparent'} >
                    <Container className='top_con '>

                    
                    <Nav.Link as={Link} to="/">
                            <img className='' src={Logo} style={{ height: '50px', width: '60px ' }}></img>
                            </Nav.Link>
                   
                   
                        
                        
                        <Navbar.Toggle aria-controls="basic-navbar-nav " />



                        <Navbar.Offcanvas className='bg-dark'>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>

                                <Nav.Link as={Link} to="/">
                                <img className='' src={Logo} style={{ height: '50px', width: '60px ' }}></img>
                                </Nav.Link>

                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>

                            <Container className="d-flex justify-content-center">
                                <Nav className="d-flex header-font" >
                           
                                    <Nav.Link className='mx-3 text-white' as={Link} to="/LiionBattery">Li-Ion</Nav.Link>
                                    <Nav.Link className='mx-3 text-white' as={Link} to="/Product">제품 소개</Nav.Link>
                                    <Nav.Link className='mx-3 text-white' as={Link} to="/Tech">기술현황</Nav.Link>
                                    <Nav.Link className='mx-3 text-white' as={Link} to="/ReferenceWrite">자료실</Nav.Link>
                                    <Nav.Link className='mx-3 text-white' as={Link} to="/Company">회사 소개</Nav.Link>
                                </Nav>

                        

                            </Container>
                            
                            {isLogin ? <Button onClick={logout} variant="outline-success">로그아웃</Button> : ""}
                         
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
         
   
                             


                      
                    </Container>

                </Navbar>




                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ReferenceWrite" element={<ReferenceWrite />} />
                 
                    <Route path="/Company" element={<Company />}>
                        <Route path='/Company' element={<CompanyInfo />} />
                        <Route path='/Company/CompanyMap' element={<CompanyMap />} />
                    </Route>

                    <Route path="/LiionBattery" element={<LiionBattery />} >
                        <Route path='/LiionBattery/' element={<LiionComposition />} />
                        <Route path='/LiionBattery/LiionRisks' element={<LiionRisks />} />
                        <Route path='/LiionBattery/ElectricCarBattery' element={<ElectricCarBattery />} />
                        <Route path='/LiionBattery/Ess' element={<Ess />} />
                    </Route>

                    <Route path="/Product" element={<Product />} />
                    <Route path="/Tech" element={<Tech />} />
                    <Route path='/TechDetails/:no' element={<TechDetails />} />
                    <Route path='/edit/:no' element={<ReferenceEdit />} />
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