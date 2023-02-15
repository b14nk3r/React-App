import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import { Button, ButtonToolbar, Container } from 'react-bootstrap';

//import Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Routes, Route, Link } from "react-router-dom";
import MainImage1 from "./images/main_img.jpg"
import SubImage1 from "./images/01.jpg"
import { useLocation } from "react-router-dom"
import SubImage2 from "./images/fi7.jpg"
import SubImage3 from "./images/ff2.png"


const Home = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
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

                    <div className='main_con d-flex  mt-5 flex-wrap'>


                        <div className='main_cont col-md-4 align-self-center'>
                            <h1 className=''>
                                Li-Ion
                            </h1>
                            <h4 className='po_co'>
                                소제목이 들어가는 곳 입니다.
                            </h4>
                            <p className='mb-3 aed'>VIEW MORE</p>
                        </div>


                        <div class="col-md-8">

                            <img
                                className="flex-grow-1 object-fit-cover img13"
                                src={SubImage2}
                                alt="First slide"
                            />

                        </div>
                    </div>


                    <div className='main_con d-flex  mt-5 flex-wrap flex-row-reverse'>

                        <div className='main_cont col-md-4 align-self-center text-end' >
                            <h1 className=''>
                                회사소개
                            </h1>
                            <h4 className='po_co'>
                                소제목이 들어가는 곳 입니다.
                            </h4>
                            <p className='aed mb-3'>VIEW MORE</p>
                        </div>

                        <div class="col-md-8">

                            <img
                                className="flex-grow-1  object-fit-cover img13"
                                src={SubImage2}
                                alt="First slide"
                            />

                        </div>



                    </div>



                </div>


                <div className='d-flex '>


                    <div className='main_cont mt-5 col-md-12'>
                        <h1 className='d-flex '>
                            제품소개
                        </h1>
                        <h4 className='d-flex  mt-3 po_co '>
                            "EGS-L20"
                        </h4>

                        <div class="text-break a ">
                            <div className='d-flex su3  d-flex flex-wrap '>
                                <div className='d-inline-block su col-md-4 px-4 word-wrap '>

                                    <h4 className='mt-5'>빠른 초기진압</h4>
                                    <h6>리튬이온 배터리 전용 소화장치를 사용하여 빠른 약제침투에 의한 초기진압</h6>
                                    <h4 className='mt-5'>차별화 된 소화약제</h4>
                                    <h6>칩윤제[수계]타입의 리튬이온 배터리 전용 소화약제 기존의 분할, 가스계 소화 약제와는 다른 냉각 및 질식 소화방식</h6>
                                    

                                    <h4 className='mt-5'>우수한 침투력</h4>
                                    <h6>표면 장력을 낮춰 리튬이온 배터리 셀 내부까지 침투가 빨라 냉각효과가 뛰어남</h6>
                                </div>

                                <div className='d-inline-block  col-md-4 su1 px-4'>


                                    <h4 className='mt-5'>용이한 사용방법</h4>
                                    <h6>분진 발생이 없어 사용중 시야확보 용이[2차 피해가 없음] 가압식 방출 방식으로 약제 소진 시까지 분사 압력이 일정</h6>
                                 
                                    <h4 className='mt-5'>긴 사용기간 및 재사용</h4>
                                    <h6>약제의 물성변화가 없어 사용 기간이 길다 약제를 재충전 하여 재사용 가능</h6>


                                 
                                    <p className='align-bottom aed1 '>VIEW MORE</p>
                                    
                          
                                  
                                </div>
                                <div className='col-md-4 p-3 '>
                                    <img
                                        className="img00 "
                                        src={SubImage3}
                                        alt="First slide"
                                    />
                                </div>
                            </div>





                        </div>






                       
                    </div>
                    
                            
                          
                            </div>
                            
                          

                    
                       
                           
                       

                     

                    

                <div className='card_b m-auto my-5' >
                    <div className='main_cont '>
                        <h1 className='d-flex justify-content-center'>
                            고객지원
                        </h1>
                        <h4 className='d-flex justify-content-center mt-3 po_co '>
                            누구나 안전하게 편리한 생활을 누릴 수 있도록 여러분의 안전수호기업이 되겠습니다.
                        </h4>
                    </div>
                </div>

                <div className='ccs-box '>

                <div className='cs-box d-flex flex-wrap '>

                    <div className='file  flex-grow-1 col-md-6 ' >
                        <h2  >자료실</h2>
                        <p >제품사용중 발생한 문제점에 대한<br></br> 고객지원이 가능합니다</p> 
                    </div>
                  

                    <div class="youtube flex-grow-1 col-md-6 ">
                        <h2>사용영상</h2>
                        <p>사용영상을 <br/> 확인해보세요</p>
                    </div>
                </div>

                
                <div className='cs-box d-flex flex-wrap  '>

                    <div class="map flex-grow-1 col-md-6 ">
                        <h2>찾아오시는 길</h2>
                        <p>찾아오시는 길을 <br></br> 확인해보세요</p>
                    </div>
                  

                    <div class="call flex-grow-1 col-md-6 ">
                        <h2>1544-2774</h2>
                        <p>월 ~ 금 am 08:00 ~pm 05:00 <br></br> 토,일 국공휴일 휴무</p>
                    </div>

                </div>

                </div>

  

        
               
                        
                  
               
            </Container>
        </>
    )
}

export default Home