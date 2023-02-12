import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ReferenceDetails from './ReferenceDetails';
const Posts = ({ info }) => {
    return (
        <>
            {
                info !== undefined ? info.map((data, index) => {
                    return (
                        <Link to  ={`/details/${data._id}`}>
                        <tr>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>1</td>
                            <td>{data.제목}</td>
                            <td>{data.제목}</td>
                            <td>{data.날짜}</td>
                        </tr>
                        </Link>
                    )
                })
                    : (
                        <div>로딩중입니다</div>
                    )
            }
      <Routes>
        <Route path='/details/:no' element={<ReferenceDetails />} />
      </Routes>
        </>
        
    )

};
export default Posts;