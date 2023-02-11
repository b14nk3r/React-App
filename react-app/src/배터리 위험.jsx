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

                        <div className='col-lg-6  mx-auto'>
                            <h3 className=''>리튬이온 배터리의 위험</h3>
                           



                        </div>

                    </div>






                </Container>


             

            

              
             
            <div className=" text-center container  ">

            <img src='./images/fi.jpg' style={{ height: '30rem', width: '50rem' }}></img>

                <h4>1. 열적 위험</h4>

              

           

                        <h6 className=' mb-5'>리튬이온 배터리의 내부 소재인 전해질과 전해질 첨가제는 약 60℃ 부근에서 분해되기 시작하며, <br></br>
                         온도가 더욱 상승하여 약 100℃까지 상승하면 리튬이온 배터리의 탄소 음극표면에 생성된 SEI(solid electrolyte interphase)막이 <br></br> 
                         분해되면서 내부에서 발열이 시작되며, 이로 인해 분리막이 용융되어 배터리의 내부단락이 발생될 수 있다. <br></br>
                         분리막의 융점은 PE의 경우 125℃, PP는 155℃ 정도이다. 내부단락은 양극과 음극이 직접 접촉되는 현상으로서, <br></br>
                         내부단락이 발생되면 음극으로부터 양극으로의 급격한 전자의 이동이 일어나면서 전기저항에 의한 <br></br>
                         줄열이 발생함과 동시에 음극피막 및 음극피막과 충전된 음극과 전해질의 화학반응에 의해 발열이 발생된다.<br></br> 
                         이것이 촉매제 역할을 하게 되어 결국 양극에서의 열에 의한 붕괴가 일어나고 폭발적인 발열반응이 발생한다.<br></br>
                         </h6>

                         <img src='./images/fi2.jpg' style={{ height: '40rem', width: '50rem' }}></img>

                <h4>2. 과충전에 의한 위험</h4>



                <h6 className=' mb-5'>  과충전은 배터리의 정상적인 작동전압 이상으로 충전되는 현상으로서 충전기 또는 보호회로의 오동작으로 인해 발생되는 경우가 많다. <br></br>
                과충전 상태가 되면 양극의 전위가 상승하고 전위값이 전해질의 분해전위 이상이 되어 발열을 동반한 전해질의 산화 발열반응이 발생된다.<br></br>
                 또한 과충전 시 양극에서 리튬이온이 과도하게 석출되어 배터리 내부 전해질의 리튬이온 농도가 증가하게 된다. <br></br>
                 양극에서 리튬이온이 70% 이상 빠져나와 음극에 삽입되지 못한 리튬이 전해질에 녹아 리튬의 농도가 일정수준 이상으로 높아지게 되면 <br></br>
                 포화수준을 넘긴 상태에서 수지상의 석출물이 생성된다. 이러한 수지상의 석출물이 배터리 내에서 만들어지게 되면 분리막을 찢고 <br></br>
                 배터리 내부단락을 발생시키게 된다.<br></br>
                </h6>

                <img src='./images/fi3.jpg' style={{ height: '30rem', width: '50rem' }}></img>

                
                <h4>3. 과방전에 의한 위험</h4>



                <h6 className=' mb-5'>    방전이란 음극인 흑연에서 리튬이온이 빠져나가는 현상이며, 과방전은 배터리의 방전 제한전압 이하까지 방전되는 현상이다.<br></br>
                    흑연 속에서 리튬이 모두 빠져나간 후에도 계속 방전이 이루어지면 동박(copper foil)이 산화되면서 구리이온이 전해액으로 빠져나오게 된다.<br></br>
                    전해액에 녹아있는 구리 금속이온은 배터리 내에서 분리막을 뚫고 내부단락을 발생시킬 수 있다.<br></br>
                </h6>

                <img src='./images/fi4.jpg' style={{ height: '30rem', width: '50rem' }}></img>

                <h4>4. 고전류 방전에 의한 위험</h4>



                <h6 className=' mb-5'>     방전은 음극에서 리튬이온이 탈리되어 양극으로 삽입되는 화학반응이며, 이러한 화학반응은 그 자체가 자발적인 발열반응이다.<br></br>
                    방전에 의한 화학반응에 의해 배터리 내부에서 열이 발생되며, 배터리 내부의 리튬이온이 단위시간당 많은 전하량이 방전되는 경우 <br></br>
                    배터리 각 셀의 방열보다 발열이 더욱 높아 배터리는 열적 위험상태에 놓이게 된다.<br></br>
                </h6>

                <img src='./images/fi6.jpg' style={{ height: '30rem', width: '50rem' }}></img>

                
                <h4>5. 물리적 손상으로 인한 위험</h4>



                <h6 className=' mb-5'>    리튬이온 배터리가 찍힘, 놀림, 꺾임, 과도한 압력 등의 물리적 손상을 입는 경우 배터리 내부에서 단락이 발생되어 화재로 진행될 수 있다. <br></br>
                이러한 물리적 손상의 원인은 생산과정에서 발생할 수도 있지만, 대부분 배터리를 사용하는 과정에서 사용자의 실수로 발생되는 경우가 더욱 많다.<br></br>
                </h6>

                <img src='./images/fi7.jpg' style={{ height: '30rem', width: '50rem' }}></img>

                <h4>6. 제조과정 중 위험</h4>



<h6 className=' mb-5'>  리튬이온 배터리의 제조공정은 크게 전극 제조공정, 전지 제조공정 그리고 화성공정으로 이루어져 있다.<br></br>
 화성공정은 최초 충전인 포메이션 공정, 전해액 채널을 안정시키는 에이징공정, 이물질이 혼입된 불량 전지를 선별하는 공정으로 구성되며, <br></br>
 이 화성공정은 최장 28일 동안 이루어지는데 화성공정 중 보관하는 과정에서 화재 및 폭발사고가 종종 발생된다. <br></br>
 이러한 사고의 원인은 제조공정 중 이물질이 배터리 내부로 침투 또는 비정상적인 수지상 석출물 발생으로 인한 내부단락으로 추정된다.<br></br>
</h6>






                       


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
