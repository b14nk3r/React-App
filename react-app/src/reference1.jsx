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

          

                <section className="py-5 text-center container mt-5">

                    <div className="row py-lg-5">

                        <div className='col-lg-6 col-md-8 mx-auto'>
                            <h1 className=''>게시판</h1>



                        </div>

                    </div>






                </section>


             

                <Container id='company' className='main_con border mb-5'>

                <div class="my-3 p-3 ">
                <h3 class="border-bottom pb-2 mb-0 ms-2 ">게시글 제목이 들어가는 곳 입니다.</h3>                
                </div>

                <div className="d-flex">

                <div class="p-3   d-flex ">
                <h5 class="ms-2 me-3" >작성자:</h5>    
                <h5 class=" ms-2">관리자</h5>            
                </div>
                
                <div class="p-3 bg-body rounded shadow-sm d-flex">
                <h5 class="ms-5 me-3" >날짜:</h5>    
                <p class="">2023-01-29</p>            
                </div>

                <div class="p-3 bg-body rounded shadow-sm d-flex">
                <h5 class=" ms-5 me-3" >첨부파일:</h5>    
                <p class="">직박구리.zip</p>            
                </div>

                </div>

                <div class="p-3 bg-body rounded shadow-sm d-flex border">
                   
                <p class="ms-5 me-5 mt-5">첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~
                첨부파일 어디다 넣을래 개새끼야 씹새끼야 씨발새끼야~

                </p>            
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
