import React from "react";

const Posts = ({ info }) => {
    return (
        <>
            {
                info !== undefined ? info.map((data) => {
                    return (
                        <tr>
                            <td>
                                <input type="checkbox"></input>
                            </td>
                            <td>1</td>
                            <td>{data.제목}</td>
                            <td>{data.내용}</td>
                            <td>2022-03-19</td>
                        </tr>
                    )
                })
                    : (
                        <div>앙기모디</div>
                    )
            }
        </>
    )

};
export default Posts;