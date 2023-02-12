import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Reference from './Reference'
import Button from "react-bootstrap/Button";

import { Routes, Route, Link, useLocation } from "react-router-dom";

const AdminPassword = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    
    return (
        <Container className='pt-5 mt-5' style={{
            minHeight: `calc(100vh - 120px`,
        }}>
            <div className='m-lg-5 text-center'>
                <h1><b>자료실</b></h1>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1" className="form-label mt-4">관리자 비밀번호</label>
                <input type="password" className="form-control mb-3" id="exampleInputPassword1" placeholder="비밀번호를 입력하세요." />
            </div>
            <div className='d-flex justify-content-center' style={{paddingTop:"50px"}}>
                <Link to="/Reference"><Button variant='dark' size='lg'>관리자 로그인</Button></Link>
            </div>

            <Routes>
                <Route path="/Reference" element={<Reference />}></Route>
            </Routes>
        </Container>
    )
}

export default AdminPassword