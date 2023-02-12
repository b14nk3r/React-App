import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../wngocks.css';

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

const Header = () => {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

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
                                    <Nav.Link className={navbar ? 'ms-5 text-black' : 'ms-5 text-white'} as={Link} to="/Company">회사 소개</Nav.Link>
                                    <Nav.Link className={navbar ? 'ms-5 text-black' : 'ms-5 text-white'} as={Link} to="/Product">제품 소개</Nav.Link>
                                    <Nav.Link className={navbar ? 'ms-5 text-black' : 'ms-5 text-white'} as={Link} to="/ReferenceWrite">고객 지원</Nav.Link>
                                </Nav>
                            </Container>

                        </Navbar.Collapse>
                    </Container>
                    
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ReferenceWrite" element={<ReferenceWrite />} />
                    <Route path="/Company" element={<Company />}>
                        <Route path='/Company/' element={<LiionComposition />} />
                        <Route path='/Company/LiionRisks' element={<LiionRisks />} />
                        <Route path='/Company/ElectricCarBattery' element={<ElectricCarBattery />} />
                        <Route path='/Company/Ess' element={<Ess />} />
                    </Route>
                    <Route path="/Product" element={<Product />} />
                    <Route path="/Reference" element={<Reference />} />
                    <Route path="/AdminPassword" element={<AdminPassword />} />
                    <Route path='/details/:no' element={<ReferenceDetails />} />
                </Routes>
            </Router>
        </header>
    )
}

export default Header