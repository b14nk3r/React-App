import React from 'react'
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
import Board from "../Board"
import Company from '../Company'
import Reference from '../Reference';
import AdminPassword from '../AdminPassword';

const Header = () => {
    return (
        <header>
            <Router>
                <Navbar fixed="top" bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">회사명</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">홈</Nav.Link>
                                <Nav.Link href='#company'>회사 소개</Nav.Link>
                                <Nav.Link href="#product">제품 소개</Nav.Link>
                                <Nav.Link as={Link} to="/ReferenceWrite">자료실</Nav.Link>
                                <Nav.Link as={Link} to="/Board">고객 지원</Nav.Link>
                            </Nav>
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
                </Routes>
            </Router>
        </header>
    )
}

export default Header