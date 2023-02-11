import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ReferenceDetails from './ReferenceDetails';
const Posts = ({ info }) => {
    return (
        <>
            {
                info !== undefined ? info.map((data) => {
                    return (
                        //<Link to  ={`/details/${data._id}`}/>
                        <tr>
                            <td>1</td>
                            <td><Link to={`/details/${data._id}`} style={{ textDecoration: "none" }} ><a style={{color: "black"}}>{data.제목}</a></Link></td>
                            <td>관리자</td>
                            <td>{data.날짜}</td>
                        </tr>
                       // </Link>
                    )
                })
                    : (
                        <div>앙기모디</div>
                    )
            }
      <Routes>
        <Route path='/details/:no' element={<ReferenceDetails />} />
      </Routes>
        </>
        
    )

};
export default Posts;