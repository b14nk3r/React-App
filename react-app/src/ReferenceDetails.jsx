import React from 'react'
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser'
import Axios from 'axios';
import { Routes, Route, Link } from "react-router-dom";

import Reference from "./Reference";
import AdminPassword from './AdminPassword';




const ReferenceWrite = () => {
    
    const [viewContent, setViewContent] = useState([]);
useEffect(()=>{
    Axios.get('http://localhost:8080/list').then((response)=>{
      setViewContent(response.data);
    })
  },[viewContent])
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
            {viewContent.reverse().map((element) => {
          return (
            <tr>
            <td>
                <input type="checkbox"></input>
            </td>
              <td>1</td>
              <td>{element.제목}</td>
              <td>{element.내용}</td>
              <td>2022-03-19</td>
            </tr>
          );
        })}

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