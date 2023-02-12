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

//모바일 반응형 테이블로 수정
const ReferenceWrite = () => {

  const [viewContent, setViewContent] = useState([]);

  const [page, setPage] = useState(1); //페이지
    const handlePageChange = page => {
    setPage(page);
  };
  
  const limit = 10; // posts가 보일 최대한의 갯수
  const offset = (page - 1) * limit; // 시작점과 끝점을 구하는 offset

  const postsData = (posts) => {
    if (posts) {
      let result = posts.slice(offset, offset + limit);
      return result;
    }
  }

  useEffect(() => {
    Axios.get('http://localhost:8080/list').then((response) => {
      setViewContent(response.data);
    })
  }, [viewContent])

  return (
    <Container className='pt-5 mt-5' style={{
      minHeight: `calc(100vh - 120px`,
    }}>
      <div className='m-lg-5 text-center'>
        <h1><b>자료실</b></h1>
      </div>
      <Link className='float-end' to="/AdminPassword"><Button variant="dark">글쓰기</Button></Link>
      <Table striped hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <Posts info={postsData(viewContent)} />
        </tbody>
      </Table>
      <div style={{width:"100%"}}>
        <Pagination
          activePage={page}
          itemsCountPerPage={limit}
          totalItemsCount={viewContent.length}
          pageRangeDisplayed={5}
          prevPageText="‹"
          nextPageText="›"
          onChange={handlePageChange}
        />
      </div>

      <Routes>
        <Route path="/AdminPassword" element={<AdminPassword />}></Route>
      </Routes>
    </Container>

  )
}

export default ReferenceWrite