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

//모바일 반응형 테이블로 수정
const ReferenceWrite = () => {
  console.log("렌더링");

  const [viewContent, setViewContent] = useState([]);

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
  }, [pathname]);

  useEffect(() => {
    Axios.get('http://localhost:8080/list').then((response) => {
      setViewContent(response.data);
    })
  }, []);

  return (
    <div>
    <div id="sub-visual" class="bg-04">
    <div class="sub_tit">
      <h1>고객지원</h1>
      <h5>한국소방기구제작소는 언제나 당신의 안전을 먼저 생각합니다.</h5>
    </div>
   </div>

  
      <Container className='' style={{
        minHeight: `calc(100vh - 120px`,
      }}>

        <div class="row relative container2">
          <div class="col-md-12">
            <p class="sub_title">자료실</p>
          </div>
        </div>

        <Link className='float-end mb-3' to="/AdminPassword"><Button variant="dark">글쓰기</Button></Link>
        <Table style={{tableLayout : "fixed"}} hover>
          <thead>
            <tr>
              <th style={{width : "5%", textAlign:"center"}}>번호</th>
              <th style={{width : "65%", textAlign:"center"}}>제목</th>
              <th style={{width : "10%", textAlign:"center"}}>작성자</th>
              <th style={{width : "10%", textAlign:"center"}}>작성일</th>
              <th style={{width : "10%", textAlign:"center"}}>첨부 파일</th>
            </tr>
          </thead>
          <tbody>
            <Posts info={postsData(viewContent)} />
          </tbody>
        </Table>
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