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
                        <h3 className=''>제품소개</h3>



                    </div>

                </div>

        







            </section>

            


            <section className="py-5 text-center container mt-5">

<div className="row py-lg-5">

    <div className='col-lg-6 col-md-8 mx-auto'>
    <div className='d-inline-block'>
    <h2>“EGS-L시리즈 ”</h2>  <img src='./images/soo.png'></img>
    <div class="d-flex">
       
      
            <div className='d-inline-block me-5 border-bottom'>
                
                <h4 className='mt-5'>1. 빠른 초기진압</h4>
                <h6>○ 리튬이온 배터리 전용 소화장치를 사용하여 빠른 약제침투에 의한 초기진압</h6>
                <h4 className='mt-5'>2. 차별화 된 소화약제</h4>
                <h6>○ 칩윤제[수계]타입의 리튬이온 배터리 전용 소화약제</h6>
                <h6>○ 기존의 분할, 가스계 소화 약제와는 다른 냉각 및 질식 소화방식</h6>
                <h4 className='mt-5'>3. 우수한 침투력</h4>
                <h6>○ 표면 장력을 낮춰 리튬이온 배터리 셀 내부까지 침투가 빨라 냉각효과가 뛰어남</h6>
                <h4 className='mt-5'>4. 용이한 사용방법</h4>
                <h6>○ 분진 발생이 없어 사용중 시야확보 용이[2차 피해가 없음]</h6>
                <h6>○ 가압식 방출 방식으로 약제 소진 시까지 분사 압력이 일정</h6>
                <h4 className='mt-5'>5. 긴 사용기간 및 재사용</h4>
                <h6>○ 약제의 물성변화가 없어 사용 기간이 길다</h6>
                <h6>○ 약제를 재충전 하여 재사용 가능</h6>
                </div>

              
                </div>



            </div>







    </div>

</div>

<h1>제품 경쟁력</h1>

<div class="container text-center border">
  <div class="row row-cols-5 border">
    <div class="col  border bg-primary text-white">구분</div>
    <div class="col  border bg-primary text-white">침윤제</div>
    <div class="col  border bg-primary text-white">물</div>
    <div class="col  border bg-primary text-white">분말형</div>
    <div class="col  border bg-primary text-white">가스계</div>
    <div class="col  border bg-primary text-white">소화방식</div>
    <div class="col  border bg-warning text-white">질식,냉각</div>
    <div class="col  border">질식,냉각</div>
    <div class="col  border">부촉매 질식 </div>
    <div class="col  border">부촉매 부족</div>
    <div class="col  border bg-primary text-white">소화효과</div>
    <div class="col  border bg-warning text-white">우수</div>
    <div class="col  border">미흡</div>
    <div class="col  border">미흡</div>
    <div class="col  border">미흡</div>
    <div class="col  border bg-primary text-white">표면장력
(침투력)</div>
    <div class="col  border bg-warning text-white">우수
[15dyn/m]</div>
    <div class="col  border">보통
[70dyn/m]</div>
    <div class="col  border">없음</div>
    <div class="col  border">없음</div>
    <div class="col  border bg-primary text-white">리튬이온

배터리 적응성 </div>
    <div class="col  border bg-warning text-white">우수</div>
    <div class="col  border">보통</div>
    <div class="col  border">미흡</div>
    <div class="col  border">미흡</div>
  </div>
</div>

<h1 className='mt-5'>제품 규격</h1>



<h4 className='d-inline-block'>규격:425(W)*385(D)*935(H)mm <br></br>
방사시간:300초<br></br>
약제용량:20L<br></br>
총 용량:52.25lg<br></br>
</h4>
<img src='./images/w1.png'></img>

<h1 className='mt-5'>시험인증</h1>

<div className='d-flex justify-content-center mb-5'>
<h6 className='mt-5 '>방재시험연구원 리튬이온 배터리 화재진압 성능시험</h6>
<h6 className='mt-5 ms-5 '>한국 소방산업기술원 [KIF]형식승인 취득</h6>
</div>

<img src='./images/test.png'></img>








</section>


        </>
    )
}

export default Home
