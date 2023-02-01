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
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>선택</th>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <Posts info={postsData(viewContent)} />
          <Pagination
            activePage={page}
            itemsCountPerPage={limit}
            totalItemsCount={viewContent.length}
            pageRangeDisplayed={5}
            prevPageText="‹"
            nextPageText="›"
            onChange={handlePageChange}
          />
        </tbody>
      </Table>
      <Link to="/AdminPassword"><Button>글쓰기</Button></Link>
      <Button variant="secondary">수정하기</Button>
      <Button variant="danger">삭제하기</Button>

      <Routes>
        <Route path="/AdminPassword" element={<AdminPassword />}></Route>
      </Routes>
    </div>

  )
}

export default ReferenceWrite