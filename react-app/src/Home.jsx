import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import { Button, ButtonToolbar, Container } from 'react-bootstrap';

//import Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Routes, Route, Link } from "react-router-dom";
import MainImage1 from "./images/main_img.jpg"
import SubImage1 from "./images/01.jpg"


const Home = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item id='home'>

                    <img
                        className="d-block  vh-100 object-fit-cover "
                        src={MainImage1}
                        alt="First slide"
                    />
                    <Carousel.Caption className=''>
                        <h4 className=' mb-3'>리튬이온 배터리 화재 진압으로 국민의 안전을 생각하는</h4>
                        <h1 className=' mb-3  '>전기자동차 전용 소화장치 </h1>
                        <h3 className=''>Lithium battery fires & Safety Solution Provider </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container>
                <div id='company' className='main_con '>

                    <div className='wrap1'>

                        <div className='wrap2'>

                            <div className='card_b m-auto my-5' >
                                <div className='main_cont '>
                                    <h1 className='d-flex justify-content-center'>
                                        LI-ION
                                    </h1>
                                    <h4 className='d-flex justify-content-center mt-3 po_co '>
                                        리튬이온배터리란?
                                    </h4>
                                </div>
                            </div>
                            <div class="row row-cols-1 row-cols-md-2 border" style={{ textAlign: 'center', }}>
                                <div class="col" style={{ textAlign: 'center', }}>

                                    <div class="card-body border" >
                                        <div className='aa  '>
                                            <div className='d-flex justify-content-center '>

                                                <h2 class="card-title ">리튬배터리</h2>
                                                <h2 class="card-title ms-2 po_co ">구성</h2>

                                            </div>
                                            <a href="#" class="btn btn-primary ">자세히 보기</a>
                                        </div>

                                    </div>
                                </div>
                                <div class="col" style={{ textAlign: 'center', }}>

                                    <div class="card-body border">
                                        <div className='aa  '>
                                            <div className='d-flex justify-content-center'>
                                                <h2 class="card-title  ">리튬배터리</h2>
                                                <h2 class="card-title ms-2 po_co">위험성</h2>
                                            </div>

                                            <a href="#" class="btn btn-primary ">자세히 보기</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col" style={{ textAlign: 'center', }}>

                                    <div class="card-body justify-content-center border">
                                        <div className='aa  '>
                                            <div className='d-flex justify-content-center'>
                                                <h2 class="card-title">전기차배터리</h2>
                                                <h2 class=" card-title ms-2 po_co">구성</h2>
                                            </div>
                                            <a href="#" class="btn btn-primary ">자세히 보기</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col" style={{ textAlign: 'center', }}>

                                    <div class="card-body justify-content-center  border">
                                        <div className='aa  '>
                                            <div className='d-flex justify-content-center'>
                                                <h2 class="card-title ms-2 po_co">Energy Storage System</h2>
                                            </div>
                                            <a href="#" class="btn btn-primary ">자세히 보기</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main_con  mt-5'>

                        <div className='card_b m-auto my-5' >
                            <div className='main_cont '>
                                <h1 className='d-flex justify-content-center'>
                                    회사 소개
                                </h1>
                                <h4 className='d-flex justify-content-center mt-3 po_co'>
                                    회사 소개가 들어가는 곳 입니다.
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="d-flex ">
                            <div class="p-3 bg-body d-flex ">
                                <img class="card-img" src={SubImage1} style={{ height: '500px', width: '800px' }}></img>
                                <div className='ms-5'>
                                    <h2>안녕하세요</h2>
                                    <h5>소제목 및 내용이 들어가는 곳 입니다. 소제목 및 내용이 들어가는 곳 입니다. </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main_con  mt-5'>

                        <div className='card_b m-auto my-5' >
                            <div className='main_cont '>
                                <h1 className='d-flex justify-content-center'>
                                    제품 소개
                                </h1>
                                <h4 className='d-flex justify-content-center mt-3 po_co '>
                                    제품 이름이 들어가는 곳 입니다.
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="d-flex ">
                            <div class="p-3 bg-body d-flex ">
                                <img class="card-img" src={SubImage1} style={{ height: '500px', width: '800px' }}></img>
                                <div className='ms-5'>
                                    <h2>안녕하세요</h2>
                                    <h5>소제목 및 내용이 들어가는 곳 입니다. 소제목 및 내용이 들어가는 곳 입니다. </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card_b m-auto my-5' >
                    <div className='main_cont '>
                        <h1 className='d-flex justify-content-center'>
                            무엇을 도와드릴까요?
                        </h1>
                        <h4 className='d-flex justify-content-center mt-3 po_co '>
                            누구나 안전하게 편리한 생활을 누릴 수 있도록 여러분의 안전수호기업이 되겠습니다.
                        </h4>
                    </div>
                </div>

                <div className='cs-box d-flex flex-wrap '>
                    <div className='blue flex-grow-1'>
                        <h2 >고객지원</h2>
                        <p>제품사용중 발생한 문제점에 대한<br></br> 고객지원이 가능합니다</p>
                    </div>

                    <div class="red flex-grow-1">
                        <h2>1544-2774</h2>
                        <p>월 ~ 금 am 08:00 ~pm 05:00 <br></br> 토,일 국공휴일 휴무</p>

                    </div>
                </div>
                
                <div>
                    <div className='cardd d-flex mt-5 mb-5 justify-content-center '>
                        <div class="card-body m-3 " style={{ height: '10rem', width: '11rem' }}>
                            <h5 class="card-title">찾아오시는 길</h5>
                            <p class="card-text mb-5">
                                오시는 길을 확인하세요.</p>
                            <div className='d-flex justify-content-end '>
                                <a href="#" class="btn btn-primary ">바로가기</a>
                            </div>
                        </div>
                        <div class="card-body  m-3 " style={{ height: '10rem', width: '11rem' }}>
                            <h5 class="card-title">소방관련 법규안내</h5>
                            <p class="card-text mb-5"> 소방관련 법규를 확인하세요.</p>
                            <div className='d-flex justify-content-end '>
                                <a href="#" class="btn btn-primary ">바로가기</a>
                            </div>
                        </div>
                        <div class="card-body m-3" style={{ height: '10rem', width: '11rem' }}>
                            <h5 class="card-title">사용설명서</h5>
                            <p class="card-text mb-5"> 제품별 사용설명서를 확인하세요</p>
                            <div className='d-flex justify-content-end '>
                                <a href="#" class="btn btn-primary ">바로가기</a>
                            </div>
                        </div>
                        <div class="card-body m-3" style={{ height: '10rem', width: '11rem' }}>
                            <h5 class="card-title">온라인 문의</h5>
                            <p class="card-text mb-5"> 친절히 설명해 드리겠습니다</p>
                            <div className='d-flex justify-content-end '>
                                <a href="#" class="btn btn-primary ">바로가기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Home