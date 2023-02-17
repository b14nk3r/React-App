import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import Axios from "axios";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";


//상단 사진 컴포넌트화

const AdminPassword = () => {

    const { pathname } = useLocation();
    const navigate = useNavigate();
 

    useEffect(() => {
        window.scrollTo(0, 425);
    }, [pathname]);

    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const onChangeId = (e) => {
        setId(e.target.value);
    }

    const onChangePw = (e) => {
        setPw(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(id);
        console.log(pw);
        //console.log("파일 용량: " + file.size);
        Axios({
            url: "http://localhost:8080/login",
            method: "POST",
            withCredentials: true,
            data: {
                id: id,
                pw: pw,
            },
        }).then(function (response) {
            if (response.status === 200) {
                navigate('/');
            } 
            console.log("하이"+ response.status);
        }).catch(function (error) {
            if (error.response.status === 404) {
                alert("회원 정보가 없습니다.")
            }
        })
    };

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
                <form accept-charset="UTF-8" onSubmit={onSubmit} className="form-group">
                    <div className='form-group'>
                        <label for="exampleInputPassword1" className="form-label mt-4">관리자 로그인</label>
                        <input type="text" className="form-control mb-3" name='id' onChange={onChangeId} placeholder="아이디를 입력하세요." />
                        <input type="password" className="form-control mb-3" name='pw' onChange={onChangePw} placeholder="비밀번호를 입력하세요." />
                        <div className='d-flex justify-content-center' style={{ paddingTop: "50px" }}>
                            <Button
                                variant='dark'
                                size='lg'
                                className="submit-button"
                                type="submit"
                            >관리자 로그인</Button>
                        </div>
                    </div>
                </form>
            </Container>

        </div>
    )
}

export default AdminPassword