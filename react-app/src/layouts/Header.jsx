import React from 'react'
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
import Board from "../Board"
import Company from '../Company'
import Reference from '../Reference';
import ReferenceDetails from '../ReferenceDetails';
import AdminPassword from '../AdminPassword';
<<<<<<< HEAD
import ReferenceDetails from '../ReferenceDetails';
=======
import Posting from '../Posting';
import Logo from "../images/1.png"




>>>>>>> wngocks2

const Header = () => {
    return (
        <header>
            
            <Router>
                
                <Navbar fixed="top" bg="light" expand="lg"> 
                    <Container className='top_con '>
                        <Navbar.Brand href="#home">
                           <img className='me-5' src={Logo} style={{ height: '50px', width: '60px ' }}></img>
                        </Navbar.Brand>
                     
                        <Navbar.Toggle aria-controls="basic-navbar-nav " />
                        <Navbar.Collapse id="basic-navbar-nav ">

                            <Container className="d-flex justify-content-center">
                                <Nav className="d-flex">
                                    <Nav.Link className='' as={Link} to="/">홈</Nav.Link>
                                    <Nav.Link className='ms-5' href='#company'>회사 소개</Nav.Link>
                                    <Nav.Link className='ms-5' href="#product">제품 소개</Nav.Link>
                                    <Nav.Link className='ms-5' as={Link} to="/ReferenceWrite">자료실</Nav.Link>
                                    <Nav.Link className='ms-5' as={Link} to="/Board">고객 지원</Nav.Link>
                                </Nav>
                            </Container>

                        </Navbar.Collapse>
                    </Container>
                    
                </Navbar>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ReferenceWrite" element={<ReferenceWrite />} />
                    <Route path="/Company" element={<Company />} />
                    <Route path="/Board" element={<Board />} />
                    <Route path="/Reference" element={<Reference />} />
                    <Route path="/AdminPassword" element={<AdminPassword />} />
                    <Route path='/details/:no' element={<ReferenceDetails />} />
                </Routes>
            </Router>
        </header>
    )
}

export default Header