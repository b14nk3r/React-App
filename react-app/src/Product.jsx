
import React from 'react'
import { Container } from 'react-bootstrap'
import SubImage6 from "./images/top.png"
import SubImage7 from "./images/w1.png"
import SubImage8 from "./images/test.png"




const Company = () => {
  return (
    <div>
  
    <div id="sub-visual" class="bg-03">
      <div class="sub_tit">
        <h1>제품소개</h1>
        <h5>한국소방기구제작소는 언제나 당신의 안전을 먼저 생각합니다.</h5>
      </div>
     </div>

    <Container class="sub-container">
      <div class="row relative container2">
        
          <p class="sub_title">“ EGS-L시리즈 ”</p>
        
      </div>

      <div class="sub2_title">
        EGS-L시리즈 소개
      </div>
      <div class="sub3_title">
      <div className='d-inline-block border-bottom su'>
                
                <h4 className='mt-5'>빠른 초기진압</h4>
                <h6>리튬이온 배터리 전용 소화장치를 사용하여 빠른 약제침투에 의한 초기진압</h6>
                <h4 className='mt-5'>차별화 된 소화약제</h4>
                <h6>칩윤제[수계]타입의 리튬이온 배터리 전용 소화약제</h6>
                <h6>기존의 분할, 가스계 소화 약제와는 다른 냉각 및 질식 소화방식</h6>
                <h4 className='mt-5'>우수한 침투력</h4>
                <h6>표면 장력을 낮춰 리튬이온 배터리 셀 내부까지 침투가 빨라 냉각효과가 뛰어남</h6>
                <h4 className='mt-5'>용이한 사용방법</h4>
                <h6>분진 발생이 없어 사용중 시야확보 용이[2차 피해가 없음]</h6>
                <h6>가압식 방출 방식으로 약제 소진 시까지 분사 압력이 일정</h6>
                <h4 className='mt-5'>긴 사용기간 및 재사용</h4>
                <h6>약제의 물성변화가 없어 사용 기간이 길다</h6>
                <h6>약제를 재충전 하여 재사용 가능</h6>
                </div>

              
                </div>

                <div class=" my-5 col-xs-12 col-sm-12 col-md-12 col-lg-12 sub2_title">
        제품경쟁력
      </div>

      <img className='className="d-block w-100 vh-200 object-fit-cover"' src={SubImage6} style={{ height: '100px', width: '2000px' }}></img>


      <table class="tb text-center">
    <tbody>
        <tr class="tr-bt">
            <th>구분</th>
            <th>침윤제</th>
            <th>물</th>
            <th>분말형</th>
            <th>가스계</th>
        </tr>
        </tbody>
        
        <tbody>
        <tr class="tr-bt">
            <th>소화방식</th>
            <td class="point">질식,냉각</td>
            <td>질식,냉각</td>
            <td>부촉매 질식</td>
            <td>부촉매 부족</td>
        </tr>
        </tbody>

<tbody>
        <tr class="tr-bt">
            <th>소화효과</th>
            <td class="point">우수</td>
            <td>미흡</td>
            <td>미흡</td>
            <td>미흡</td>
        </tr>
        </tbody>

        <tbody>
        <tr class="tr-bt">
            <th>표면장력</th>
            <td class="point">우수 [15dyn/m]</td>
            <td>보통 [70dyn/m]</td>
            <td>없음</td>
            <td>없음</td>
        </tr>
        </tbody>

        <tbody>
        <tr class="tr-bt">
            <th>리튬이온 배터리<br></br> 적응성</th>
            <td class="point">우수</td>
            <td>보통</td>
            <td>미흡</td>
            <td>미흡</td>
        </tr>
    </tbody>
    
</table>





               


<div class=" my-5 col-xs-12 col-sm-12 col-md-12 col-lg-12 sub2_title">
    제품규격
      </div>

      <img className='className="d-block w-100 vh-200 object-fit-cover"' src={SubImage6} style={{ height: '100px', width: '2000px' }}></img>

      <img class="se" src={SubImage7}></img>
   

<table class="tb text-center">
    <tbody>
        <tr class="tr-bt">
            <th>규격</th>
            <th>방사시간</th>
            <th>약제용량</th>
            <th>총 용량</th>
           
        </tr>
        </tbody>
        
        <tbody>
        <tr class="tr-bt">
            <td>425(W)*385(D)*935(H)mm</td>
            <td>300초</td>
            <td>20L</td>
            <td>52.25lg</td>
           
        </tr>
        </tbody>
        </table>

<div class=" my-5 col-xs-12 col-sm-12 col-md-12 col-lg-12 sub2_title">
    시험인증
      </div>

      <img className='className="d-block w-100 vh-200 "' src={SubImage6} style={{ height: '100px', width: '2000px' }}></img>

      <img className='className="d-flex w-100  ' src={SubImage8}></img>
 
 
<div className='d-flex justify-content-center mb-5'>
<h6 className='mt-5 '>방재시험연구원 리튬이온 배터리 화재진압 성능시험</h6>
<h6 className='mt-5 ms-5 '>한국 소방산업기술원 [KIF]형식승인 취득</h6>
</div>





    </Container>

    </div>
  )
}

export default Company