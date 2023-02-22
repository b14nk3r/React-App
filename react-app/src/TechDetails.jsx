import React from 'react'
import Banner from './Banner'
import { Link, useLocation } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap';


const TechDetails = (props) => {
    const { reportImg, reportTitle } = useLocation().state;
    console.log(reportImg);
    return (
        <>
            <Banner title="기술현황"
                subTitle="마루는 언제나 당신의 안전을 먼저 생각합니다."
                backgroundImg="bg-03"
                isMenu="d-none" />
            <Container style={{
                minHeight: `calc(100vh - 120px)`,
            }}>
                <div class="row relative container2">
                    <div class="col-md-12">
                        <p class="sub_title">성적서</p>
                    </div>
                </div>

                <div className='text-break border py-4 px-4'>
                    <div>
                        <h3 className="border-bottom pb-2 text-wrap">{reportTitle}</h3>
                    </div>
                    <div style={{ width: "100%" }}>
                        <div className='d-flex text-muted justify-content-end' style={{ fontSize: "0.8rem" }}>
                            <span>작성자&nbsp;</span>
                            <span>관리자</span>
                        </div>
                    </div>
                    <div className='contentImg' style={{
                        minHeight: `600px`,
                    }}> 
                        <img src={reportImg} alt="" style={{ maxWidth: "100%" }}/>
                    </div>
                </div>

                <div className='d-flex justify-content-center my-3'>
                    <Link to="/Tech"><Button variant="dark" size='lg'>목록으로</Button></Link>
                </div>
            </Container>
        </>

    )
}

export default TechDetails