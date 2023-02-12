import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import { Button, ButtonToolbar, Container } from 'react-bootstrap';

//import Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Routes, Route, Link } from "react-router-dom";



const Home = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item id='home'>
           
                    <img
                        className="d-block w-100 vh-100 object-fit-cover"
                        src="./images/01.jpg"
                        alt="First slide"
                    />
                   
                  
                    
                
                    <Carousel.Caption className=''>
                        <h4 className=' mb-3'>리튬이온 배터리 화재 진압으로 국민의 안전을 생각하는</h4>
                        <h1 className=' mb-3  '>전기자동차 전용 소화장치 </h1>
                        <h3 className=''>Lithium battery fires & Safety Solution Provider </h3>

                    </Carousel.Caption>
                    
                </Carousel.Item>

               
            </Carousel>




            <Container id='company' className='main_con '>

                <div className='wrap1'>

                    <div className='wrap2'>

                        <Container className='card_b m-auto' style={{ height: '200px', width: '1500px' }}>
                            <div className='main_cont mt-5'>
                                <h1 className='d-flex '>
                                    LI-ION
                                </h1>
                                <h2 className='d-flex  mt-5 mb-5 text-info '>
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
                                            <h2 class="card-title text-info">ESS</h2>
                                            <p class="card-title ms-2">(Energy Storage System)</p>
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

                

             

                <Container id='product' className='main_con  mt-5'>

                <div class="p-3 ">
                <h1 class="pb-2 mb-0 ms-2 ">제품 소개</h1>                
                </div>

                

             
          


                </Container>

                <Container >
                    <div class="d-flex ">

                        <div class="p-3 bg-body rounded shadow-sm d-flex ">

                            
                                <img class="card-img" src="./images/01.jpg"  style={{ height: '500px', width: '800px' }}></img>
                               

                              

                      
                            <div className='ms-5'>
                                <h2>안녕하세요</h2>
                                <h5>소제목 및 내용이 들어가는 곳 입니다. 소제목 및 내용이 들어가는 곳 입니다. </h5>
                           

                            </div>
                        </div>
                    </div>











                </Container>

               


                

          

             

                    



            





            </Container>

            <div className='card_b m-auto text-bg-primary  ' >
                <div className='main_cont mt-5'>
                    <h3 className='d-flex justify-content-center text-white  '>
                        무엇을 도와드릴까요?
                    </h3>
                    <h6 className='d-flex justify-content-center text-white '>
                        누구나 안전하게 편리한 생활을 누릴 수 있도록 여러분의 안전수호기업이 되겠습니다.
                    </h6>
                </div>

             
                <Container>
                <div className='d-flex flex-wrap mt-5 '>
                    <div className=' bg-dark text-white border ' style={{ height: '10rem', width: '40rem' }}>
                        <a className='text-decoration-none' href='#'>


                            <div className='mt-3 ms-5 text-white d-flex justify-content-between  '>
                                <div className='d-inline-block'>
                                    <h3 >고객지원</h3>
                                    <h5 >제품사용중 발생한 문제점에 대한</h5>
                                    <h5 > 고객지원이 가능합니다</h5>
                                </div>

                                

                            </div>
                        </a>
                    </div>

                    <div className=' bg-dark text-white border' style={{ height: '10rem', width: '40rem' }}>
                        <a className='text-decoration-none' href='#'>


                            <div className='mt-3 ms-5 text-white d-flex justify-content-between'>
                                <div className='d-inline-block'>
                                    <h3>1544-2774</h3> <h6>월 ~ 금 am 08:00 ~pm 05:00</h6> <h6>토,일 국공휴일 휴무</h6>
                                </div>

                                <img className='me-5'
                                    src="./images/phonecall.png"></img>





                            </div>
                        </a>
                    </div>

                </div>
                </Container>

      


            </div>


 

            <Container>

<div className='d-flex mt-5 mb-5 justify-content-center '>
  <div class="card-body "style={{ height: '10rem', width: '11rem' }}>
    <h5 class="card-title">찾아오시는 길</h5>
    <p class="card-text"> 
   오시는 길을 확인하세요.</p>
    <a href="#" class="btn btn-primary">바로가기</a>
  </div>

  <div class="card-body "style={{ height: '10rem', width: '11rem' }}>
    <h5 class="card-title">소방관련 법규안내</h5>
    <p class="card-text">소방관련 법규를 확인하세요.</p>
    <a href="#" class="btn btn-primary">바로가기</a>
  </div>

  <div class="card-body" style={{ height: '10rem', width: '11rem' }}>
    <h5 class="card-title">사용설명서</h5>
    <p class="card-text">제품별 사용설명서를 확인하세요</p>
    <a href="#" class="btn btn-primary">바로가기</a>
  </div>


  <div class="card-body" style={{ height: '10rem', width: '11rem' }}>
    <h5 class="card-title">온라인 문의</h5>
    <p class="card-text">친절히 설명해 드리겠습니다</p>
    <a href="#" class="btn btn-primary">바로가기</a>
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
