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
                        

                  

                        <div className="list d-flex flex-wrap" >
                            <div className="hd-title">

                                <h5>
                                    <Link className="text-dark" to={`/details/${data._id}`} style={{ textDecoration: "none", }}>{data.제목}</Link>

                                </h5>

                                <div className="hd-info-col ms-3">
                                    <spen style={{ textAlign: "center" }}>{data.url !== null ? <Link className="download" onClick={() => { window.open(data.url) }}>
                                        <FaFileDownload className="mx-1" size={20} /></Link> : ""}</spen>

                                </div>
                            </div>

                            <div className="hd-info d-flex">
                                <div className="hd-info-col text-muted">
                                    <spen>관리자</spen>
                                </div>

                                <div className="hd-info-col ms-3 text-muted">
                                    <spen>{data.날짜}</spen>
                                </div>



                            </div>
                        </div>



                      
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