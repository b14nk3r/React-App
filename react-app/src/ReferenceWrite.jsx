import React from 'react'
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { Routes, Route, Link } from "react-router-dom";

import Reference from "./Reference";
import AdminPassword from './AdminPassword';


const ReferenceWrite = () => {
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
                    <tr>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>1</td>
                        <td>게시글1</td>
                        <td>artistJay</td>
                        <td>2022-03-19</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>2</td>
                        <td>게시글2</td>
                        <td>artistJay</td>
                        <td>2022-03-19</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox"></input>
                        </td>
                        <td>3</td>
                        <td>게시글2</td>
                        <td>artistJay</td>
                        <td>2022-03-19</td>
                    </tr>
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