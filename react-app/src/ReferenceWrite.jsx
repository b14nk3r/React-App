import React from 'react'
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser'
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Reference from "./Reference";
import AdminPassword from './AdminPassword';

import Posts from './Posts'
import Pagination from 'react-js-pagination'
import { Container } from 'react-bootstrap';
import './css/pagination.css'
import { useLocation } from "react-router-dom";

import Banner from './Banner';

//모바일 반응형 테이블로 수정
const ReferenceWrite = () => {
  console.log("렌더링");

  const [viewContent, setViewContent] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const [page, setPage] = useState(1); //페이지
    const handlePageChange = page => {
    setPage(page);
  };
  
  const limit = 15; // posts가 보일 최대한의 갯수
  const offset = (page - 1) * limit; // 시작점과 끝점을 구하는 offset

  const postsData = (posts) => {
    if (posts) {
      let result = posts.slice(offset, offset + limit);
      return result;
    }
  }

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("스크롤 탑");
  }, [pathname]);

  //catch 문 넣기
  useEffect(() => {
    console.log("로그인 검증 시작");
    Axios.get('http://localhost:8080/checkuser').then((response) => {
      console.log(response.data);
      setIsLogin(true);

    })
  }, []);


  useEffect(() => {
    Axios.get('http://localhost:8080/list').then((response) => {
      setViewContent(response.data);
    })
  }, []);


  return (
    <div>
   

      <Banner title="고객지원" subTitle="한국소방기구제작소는 언제나 당신의 안전을 먼저 생각합니다." backgroundImg="bg-04" isMenu="d-none"></Banner>

  
      <Container className='' style={{
        minHeight: `calc(100vh - 120px`,
      }}>

        <div class="row relative container2">
          <div class="col-md-12">
            <p class="sub_title">자료실</p>
          </div>
        </div>

        <div className='write_btn'>
        <Link className={isLogin ? 'mb-3' : 'd-none'} to="/Reference"><Button className='btn-a' variant="dark" size='lg'>글쓰기</Button></Link>
        </div>
      
         
        
            <Posts info={postsData(viewContent)} />
        
        <div style={{ width: "100%" }}>
          <Pagination
            activePage={page}
            itemsCountPerPage={limit}
            totalItemsCount={viewContent.length}
            pageRangeDisplayed={5}
            prevPageText="‹"
            nextPageText="›"
            onChange={handlePageChange}/>
        </div>
        











                        


                       
                
        <Routes>
          <Route path="/AdminPassword" element={<AdminPassword />}></Route>
        </Routes>
      </Container>
    </div>

  )
}

export default ReferenceWrite