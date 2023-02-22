import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import { Button, ButtonToolbar, Container } from 'react-bootstrap';


//import Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Routes, Route, Link } from "react-router-dom";


import { useLocation } from "react-router-dom"
import SubImage1 from "./images/main_img_c.jpg"
import SubImage2 from "./images/main_img_a.jpg"
import SubImage3 from "./images/ff2.png"
import CardImg1 from "./images/file.png"
import CardImg2 from "./images/youtube.png"
import CardImg3 from "./images/map.png"
import CardImg4 from "./images/call.png"

import useScrollFadeIn from "./useScrollFadeIn"





const Home = () => {

    const { pathname } = useLocation();



    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>

            <Carousel>

                <Carousel.Item id='home' className='vh-100'>

                    <Carousel.Caption className='main_tit'>

                        <h4 className='main_tit1 mb-3'>리온 배터리 화재 진압으로 국민의 안전을 생각하는</h4>
                        <h1 className='main_tit2 mb-3 '> <spen className="sub_tit">전기자동차 전용 <spen className='sub_text'>소화장치</spen> </spen></h1>
                        <h6 className='main_tit3'>Lithium battery fires & Safety Solution Provider</h6>

                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item id='home2' className='vh-100'>

                    <Carousel.Caption className='main_tit'>

                        <h4 className='main_tit4 mb-3'>매년 늘어가는 전기차화재 </h4>
                        <h1 className='main_tit5 '>전용소화기는 필수입니다 </h1>

                    </Carousel.Caption>

                </Carousel.Item>

            </Carousel>

            <Container>

                <div id='company' className='main_con '>

                    <div className='d-flex  mt-5 flex-wrap'>

                        <div className='main_cont1 col-md-4 align-self-center' >

                            <div className='con_txt' >

                                <h1 className=''
                                    data-aos="fade-zoom-in"
                                    data-aos-delay="50"
                                    data-aos-offset="0">
                                    Li-Ion
                                </h1>

                                <h4 className='point_col'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="100"
                                    data-aos-offset="0">
                                    리튬이온 배터리 화재는 <br /> 전용 소화기로 진압해야합니다.
                                </h4>

                                <Link className='card-link' to="/LiionBattery">
                                <p className='mb-3 view_more'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="200"
                                    data-aos-offset="0">
                                    VIEW MORE
                                </p>
                                </Link>

                            </div>

                        </div>

                        <div class="subimage col-md-8">

                            <img
                            data-aos="zoom-in"
                                className="flex-grow-1 object-fit-cover sub_img1"
                                src={SubImage1}
                                alt="First slide"
                            />

                        </div>

                    </div>


                    <div className='d-flex  mt-5 flex-wrap flex-row-reverse'>

                        <div className='main_cont2 col-md-4 align-self-center text-end' >

                            <div className='con_txt'>

                                <h1 className=''
                                    data-aos="fade-zoom-in"
                                    data-aos-delay="50"
                                    data-aos-offset="0">
                                    회사소개
                                </h1>

                                <h4 className='point_col'
                                    data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="100"
                                    data-aos-offset="0">
                                    마루를 소개합니다.
                                </h4>
                                <Link className='card-link' to="/Company">
                                <p data-aos="fade-zoom-in"
                                    data-aos-easing="ease-in-back"
                                    data-aos-delay="200"
                                    data-aos-offset="0"
                                    className='mb-3 view_more'>VIEW MORE
                                </p>
                                </Link>

                            </div>

                        </div>

                        <div class="col-md-8">

                            <img
                              data-aos="zoom-in"
                          
                                className="flex-grow-1  object-fit-cover sub_img1"
                                src={SubImage2}
                                alt="First slide"
                            />

                        </div>

                    </div>

                </div>


                <div className='d-flex '>

                    <div className='con_txt mt-5 col-md-12' >

                        <h1 className='d-flex '
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0">
                            제품소개
                        </h1>

                        <h4 className='d-flex  mt-3 point_col'
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="500"
                            data-aos-offset="0">
                            "EGS-L20"
                        </h4>

                        <div class="text-break">

                            <div className='d-flex d-flex flex-wrap'>

                                <div className='d-inline-block col-md-4 px-4 word-wrap sub_tex'>

                                    <div className='sub_tex1' data-aos="zoom-in-right">

                                        <h4 className='mt-5'>빠른 초기진압</h4>
                                        <h6>리튬이온 배터리 전용 소화장치를 사용하여 빠른 약제침투에 의한 초기진압</h6>

                                    </div>

                                    <div className='sub_tex1' data-aos="zoom-in-right">

                                        <h4 className='mt-5'>차별화 된 소화약제</h4>
                                        <h6>칩윤제[수계]타입의 리튬이온 배터리 전용 소화약제 기존의 분할, 가스계 소화 약제와는 다른 냉각 및 질식 소화방식</h6>

                                    </div>

                                    <div className='sub_tex1' data-aos="zoom-in-right">

                                        <h4 className='mt-5'>우수한 침투력</h4>
                                        <h6>표면 장력을 낮춰 리튬이온 배터리 셀 내부까지 침투가 빨라 냉각효과가 뛰어남</h6>

                                    </div>

                                </div>

                                <div className='d-inline-block col-md-4 px-4 sub_tex'>

                                    <div className='sub_tex1' data-aos="zoom-in-left">

                                        <h4 className='mt-5'>용이한 사용방법</h4>
                                        <h6>분진 발생이 없어 사용중 시야확보 용이[2차 피해가 없음] 가압식 방출 방식으로 약제 소진 시까지 분사 압력이 일정</h6>

                                    </div>

                                    <div className='sub_tex1' data-aos="zoom-in-left">

                                        <h4 className='mt-5'>긴 사용기간 및 재사용</h4>
                                        <h6>약제의 물성변화가 없어 사용 기간이 길다 약제를 재충전 하여 재사용 가능</h6>

                                    </div>

                                    <Link className='card-link' to="/Product">
                                    <p className='align-bottom v_more' data-aos="zoom-in-left">
                                        VIEW MORE
                                    </p>
                                    </Link>

                                </div>

                                <div className='col-md-4 p-3 '>

                                    <img
                                        data-aos="fade-zoom-in"
                                        data-aos-easing="ease-in-back"
                                        data-aos-delay="500"
                                        data-aos-offset="10"
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

                    <div className='con_txt '>

                        <h1 className='d-flex justify-content-center'
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0">
                            고객지원
                        </h1>

                        <h4 className='d-flex justify-content-center mt-3 point_col '
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="600"
                            data-aos-offset="0">
                            누구나 안전하게 편리한 생활을 누릴 수 있도록 여러분의 안전수호기업이 되겠습니다.
                        </h4>

                    </div>

                </div>

                <div className='card_box '>

               
                    <div className='card-box d-flex flex-wrap '>

                    <Link className='card-link d-flex col-md-6 flex-grow-1 ' to="/ReferenceWrite">
                        <div className='d-flex file'
                             data-aos="zoom-in-right">
                                   
                            <div className='mid'>
                            <img
                                className="CardImg1 "
                                src={CardImg1}
                                alt="First slide"
                            />
                            </div>

                            <div className='card_text' >

                                <h2  >자료실</h2>

                                <p>사용영상을 <br /> 확인해보세요</p>

                            </div>
                           

                        </div>
                        </Link>
                      
                      
                   
                        <Link className='card-link d-flex col-md-6 flex-grow-1' to="/Product">
                        <div className='d-flex youtube'
                        data-aos="zoom-in-right"
                           >
                            
                            <div className='mid'>
                            <img
                                className="CardImg2 "
                                src={CardImg2}
                                alt="First slide"
                            />
                            </div>
                      


                            <div class="card_text">

                                <h2>사용영상</h2>
                                <p>사용영상을 <br /> 확인해보세요</p>

                            </div>

                        </div>
                        </Link>
                       

                    </div>


                    <div className='card-box d-flex flex-wrap  '>


                    <Link className='card-link d-flex col-md-6 flex-grow-1 ' to="/Product">
                        <div className='d-flex map'
                            data-aos="zoom-in-right">

<div className='mid'>
                            <img
                                className="CardImg3 "
                                src={CardImg3}
                                alt="First slide"
                            />
                            </div>
                      


                            <div class="card_text">

                                <h2>찾아오시는 길</h2>
                                <p>찾아오시는길을<br /> 확인해보세요</p>

                            </div>

                        </div>
                        </Link>
                     

                        <Link className='card-link d-flex col-md-6 flex-grow-1 ' to="tel:031-796-9390">

                        <div className='d-flex call'
                        data-aos="zoom-in-right"
                        >
                            
                            <div className='mid'>
                            <img
                                className="CardImg4 "
                                src={CardImg4}
                                alt="First slide"
                            />
                            </div>

                            <div class="card_text">

                                <h2>1544-2774</h2>
                                <p>전화번호를 <br></br> 확인해보세요</p>

                            </div>

                        </div>
                        </Link>
                       

                    </div>

                </div>

            </Container>

        </>
    )
}

export default Home
