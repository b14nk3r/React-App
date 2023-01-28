import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import { Button, ButtonToolbar, Container } from 'react-bootstrap';

//import Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Home = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100 object-fit-cover"
                        src="./images/sss.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>리튬배터리</h3>
                        <p>LI-ION</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100 object-fit-cover"
                        src="./images/family.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>리튬배터리</h3>
                        <p>LI-ION</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>




            <Container id='company' className='main_con border '>

                <div className='wrap1'>

                    <div className='wrap2'>

                        <Container className='card_b m-auto' style={{ height: '200px', width: '1500px' }}>
                            <div className='main_cont mt-5'>
                                <h1 className='d-flex justify-content-center'>
                                    LI-ION
                                </h1>
                                <h2 className='d-flex justify-content-center mt-5 mb-5 text-info '>
                                    리튬이온배터리란?
                                </h2>
                            </div>
                        </Container>




                        <div class="row row-cols-1 row-cols-md-2 g-4 ms-5 me-5" style={{ textAlign: 'center', }}>
                            <div class="col" style={{ textAlign: 'center', }}>
                                <div class="card" >

                                    <div class="card-body justify-content-center mt-5" style={{ height: '300px', width: '300x' }}>
                                        <div className='d-flex mt-3 justify-content-center'>
                                            <h2 class="card-title mb-5 ">리튬배터리</h2>
                                            <h2 class="text-info card-title ms-2 mb-5">구성</h2>
                                        </div>

                                        <a href='#'>
                                            <img
                                                src="./images/awd.png"></img>
                                        </a>

                                    </div>
                                </div>
                            </div>

                            <div class="col" style={{ textAlign: 'center', }}>
                                <div class="card" >

                                    <div class="card-body justify-content-center mt-5" style={{ height: '300px', width: '300x' }}>
                                        <div className='d-flex mt-3 justify-content-center'>
                                            <h2 class="card-title mb-5 ">리튬배터리</h2>
                                            <h2 class="text-info card-title ms-2 mb-5">위험성</h2>
                                        </div>

                                        <a href='#'>
                                            <img
                                                src="./images/awd.png"></img>
                                        </a>

                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card">

                                    <div class="card-body justify-content-center mt-5" style={{ height: '300px', width: '300x' }}>
                                        <div className='d-flex mt-3 justify-content-center text-alugn-center'>
                                            <h2 class="card-title mb-5 ">전기차배터리</h2>
                                            <h2 class="text-info card-title ms-2 mb-5">구성</h2>
                                        </div>

                                        <a href='#'>
                                            <img
                                                src="./images/awd.png"></img>
                                        </a>

                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card">

                                    <div class="card-body justify-content-center mt-5" style={{ height: '300px', width: '300x' }}>
                                        <div className='mt-3 justify-content-center'>
                                            <h2 class="card-title ">ESS</h2>
                                            <p class="text-info card-title ms-2">(Energy Storage System)</p>
                                        </div>

                                        <a href='#'>
                                            <img
                                                src="./images/awd.png"></img>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>


             

                    






            </Container>

            <div className='border'>

                < Container className='main_con  '>

                    <div className='foo_cont '>
                        <div className='d-flex'>
                            <p className='text-center'>(주)한국소방기구제작소</p>
                        </div>

                        <div className='d-flex'>
                            <p className='text-center me-3'>대표 : 정수현</p>
                            <p className='text-center me-3'>사업자번호 : 503-81-11626</p>
                            <p className='text-center me-3'>주소 : 대구광역시 달성군 구지면 국가산단대로50길 40(응암리)</p>
                        </div>

                        <div className='d-flex'>
                            <p className='text-center me-3'>대표번호 : 1544-2774</p>
                            <p className='text-center me-3'>Tel : 053-564-2201~4</p>
                            <p className='text-center me-3'> Fax : 053-564-0708</p>
                            <p className='text-center me-3'>Email: blank@naver.com</p>
                        </div>
                        <p className='mt-3 ms-5 text-center'>Copyright (c)HANKOOKFIRE. All Rights Reserved.</p>



                    </div>
                </Container>
            </div>







        </>
    )
}

export default Home
