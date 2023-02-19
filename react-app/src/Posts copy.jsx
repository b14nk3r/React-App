import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ReferenceDetails from './ReferenceDetails';
import { FaFileDownload } from "react-icons/fa";
const Posts = ({ info }) => {
    
    
    return (
        <>
            {
                info !== undefined ? info.map((data, index) => {
                    return (
                        

                        <li className="list" key={index}>
                            <div className="hd-title">
                            <h5  style={{ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", wordBreak: "break-all" }}>
                                <Link to={`/details/${data._id}`} style={{ textDecoration: "none", color: "black" }}>{data.제목}</Link></h5>
                                </div>
                            <a style={{ textAlign: "center" }}>관리자</a>
                            <a style={{ textAlign: "center" }}>{data.날짜}</a>
                            <a style={{ textAlign: "center" }}>{data.url !== null ? <Link className="download" style={{ color: "black" }} onClick={() => { window.open(data.url) }}>
                                <FaFileDownload className="mx-1"/></Link> : ""}</a>
                        </li>
                      
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