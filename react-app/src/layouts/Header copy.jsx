import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Home"
import ReferenceWrite from "../ReferenceWrite"
import Board from "../Board"
import Company from '../Company'
import Reference from '../Reference';
import AdminPassword from '../AdminPassword';
import Posting from '../Posting';

const Header = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 0) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header>
      <Router>
        <Navbar fixed="top" bg={navbarBg ? 'light' : 'transparent'} expand="lg" className="py-3 shadow-sm transition navbar-dark">
          <Container>
            <Navbar.Brand href="/">
              <img className='me-5' src='./images/1.png' style={{ height: '50px', width: '60px ' }}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Container className="d-flex justify-content-center">
                <Nav className="d-flex">
                  <Nav.Link className='' as={Link} to="/">홈</Nav.Link>
                  <Nav.Link className='ms-5' href='#company'>회사 소개</Nav.Link>
                  <Nav.Link className='ms-5' href="#product">제품 소개</Nav.Link>
                  <Nav.Link className='ms-5' as={Link} to="/Posting">자료실</Nav.Link>
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
          <Route path="/Posting" element={<Posting />} />
        </Routes>
      </Router>
    </header>
  );
};

export default Header;