import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Reference from './Reference'
import Button from "react-bootstrap/Button";

import { Routes, Route, Link, useLocation } from "react-router-dom";

//상단 사진 컴포넌트화

const AdminPassword = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 425);
    }, [pathname]);
    
    return (
        <div>
            
            <div id="sub-visual" class="bg-04">
                <div class="sub_tit">
                    <h1>고객지원</h1>
                    <h5>한국소방기구제작소는 언제나 당신의 안전을 먼저 생각합니다.</h5>
                </div>
            </div>

            <Container style={{
                minHeight: `calc(100vh - 120px`,
            }}>
                <div class="row relative container2">
                    <div class="col-md-12">
                        <p class="sub_title">자료실</p>
                    </div>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1" className="form-label mt-4">관리자 비밀번호</label>
                    <input type="password" className="form-control mb-3" id="exampleInputPassword1" placeholder="비밀번호를 입력하세요." />
                </div>
                <div className='d-flex justify-content-center' style={{ paddingTop: "50px" }}>
                    <Link to="/Reference"><Button variant='dark' size='lg'>관리자 로그인</Button></Link>
                </div>

                <Routes>
                    <Route path="/Reference" element={<Reference />}></Route>
                </Routes>
            </Container>

        </div>
    )
}

export default AdminPassword