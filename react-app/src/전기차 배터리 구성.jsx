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

          

                <Container className="py-5 text-center container mt-5">

                    <div className="row py-lg-5">

                        <div className='col-lg-6 col-md-8 mx-auto'>
                            <h3 className=''>Electric Vehicles 전기차 배터리의 구성 </h3>
                            <h5 className=''> 셀 /  모듈  / 팩  </h5>



                        </div>

                    </div>






                </Container>


             

            

              
             
            <div className=" text-center container  ">

                <div className="row py-lg-5 ">

                    <div className='col-lg-12 col-md-12 mx-auto '>

                        <img src='./images/car.jpg' style={{ height: '40rem', width: '70rem' }}></img>

                        <h6 className='mt-5'>최근 전기차 시장이 점차 확대되면서 전기차의 동력원인 리튬이온 배터리에 대해서도 관심이 많아지고 있습니다. <br></br>
                            그런데 전기차 관련 뉴스나 보고서를 보다 보면 배터리를 뜻하는 다양한 용어가 있어 때론 헷갈리지 않으신가요? <br></br>
                            '배터리 셀', '배터리 모듈', '배터리 팩' 평소엔 '배터리'라고 통칭하기도 하지만 사실은 조금씩 다른 걸 지칭하는 말인데요. </h6>

                        <h2 className='mt-5'>전기차 배터리 '셀 → 모듈 → 팩'으로 구성된다</h2>


                        <img src='./images/cell.png'></img>
                        <h6 className='mt-5 mb-5'> 전기차 가동을 위해서는 스마트폰의 수천 배에 달하는 엄청난 양의 전력이 필요합니다.<br></br>
                            때문에 배터리 셀이 수십 개에서 많게는 수천 개까지 필요하죠. 전기차 종류에 따라 구성이 조금씩 차이가 있을 수 있겠지만, <br></br>
                            일반적으로 전기차 배터리는 셀(Cell), 모듈(Module), 팩(Pack)으로 구성됩니다.<br></br>

                            수 많은 배터리 셀을 안전하게 그리고 효율적으로 관리하기 위해 모듈과 팩이라는 형태를 거쳐 전기차에 탑재하는 것입니다.<br></br>
                            셀, 모듈, 팩은 쉽게 배터리를 모으는 단위로 생각하면 됩니다. 배터리 셀을 여러 개 묶어서 모듈을 만들고, 모듈을 여러 개 묶어서 팩을 만드는 것이죠.<br></br>
                            전기차에는 최종적으로 배터리가 하나의 팩 형태로 들어가게 됩니다.<br></br>


                        </h6>

                        <h2 className='mt-5 mb-5'>전기차 배터리 팩</h2>

                        <img src='./images/bo.png'></img>
                        <h6 className='mt-5'> 
                            대표적인 순수 전기차(EV) BMW i3의 배터리를 예로 들어 볼까요? BMW i3에는 배터리 셀이 총 96개 탑재됩니다.<br></br>
                             셀 12개를 하나의 모듈로 묶고, 8개의 모듈을 묶어 하나의 팩 형태로 들어가는 것이죠.<br></br>
                            하나씩 살펴보면, 먼저 배터리의 기본이 되는 셀은 자동차 내 제한된 공간에서 최대한의 성능을 발현할 수 있도록<br></br>
                             단위 부피당 높은 용량을 지녀야 하고, 일반 모바일 기기용 배터리에 비해 훨씬 긴 수명이 필요합니다.<br></br>
                              또한, 주행 중에 전달되는 충격을 견디고, 저온/고온에서도 끄덕 없을 만큼 높은 신뢰성과 안정성을 지녀야 하죠<br></br>.
                            여러 개의 셀은 열과 진동 등 외부 충격에서 좀 더 보호될 수 있도록 하나로 묶어 프레임에 넣게 되는데요,<br></br>
                             이 상태를 모듈이라고 부릅니다. 그리고 모듈 여러 개를 모아 배터리의 온도나 전압 등을 관리해 주는<br></br>
                              배터리 관리시스템(BMS, Battery Management System)과 냉각장치 등을 추가한 것이 배터리 팩입니다.<br></br>
                               이런 방식으로 전기차에는 배터리 셀 여러 개가 하나의 팩 형태로 들어가는 것이랍니다.



                        </h6>



                        </div>

                    </div>






                </div>
              


                   
                         
               
           
              
              
             

          

            

          

            


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
