import React from 'react'
import { Container } from 'react-bootstrap'
import Reference from './Reference'
import Button from "react-bootstrap/Button";

import { Routes, Route, Link } from "react-router-dom";

const AdminPassword = () => {
    return (
        <Container>
            <div class="form-group">
                <label for="exampleInputPassword1" class="form-label mt-4">관리자 비밀번호</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="비밀번호를 입력하세요." />
            </div>
            <Link to="/Reference"><Button>관리자 로그인</Button></Link>

            <Routes>
                <Route path="/Reference" element={<Reference />}></Route>
            </Routes>
        </Container>
    )
}

export default AdminPassword