import React from 'react'
import SubImage1 from "../images/cell.PNG"
import SubImage2 from "../images/bo.PNG"


const ElectricCarBattery = () => {
  return (

    <div>

      <div class="row relative">

        <div class="col-md-12">
          <p class="sub_title">Electric Vehicles 전기차 배터리의 구성</p>
        </div>

      </div>

      <div
        data-aos="fade-down"
        class="col-xs-12 col-sm-12 col-md-12 col-lg-12 sub_title2">
        전기차 배터리란?
      </div>

      <div class="sub3_title align-self-center">

        <h6
          data-aos="fade-down"
          className='mt-5 sub_title4'>최근 전기차 시장이 점차 확대되면서 전기차의 동력원인 리튬이온 배터리에 대해서도 관심이 많아지고 있습니다.
          그런데 전기차 관련 뉴스나 보고서를 보다 보면 배터리를 뜻하는 다양한 용어가 있어 때론 헷갈리지 않으신가요?
          '배터리 셀', '배터리 모듈', '배터리 팩' 평소엔 '배터리'라고 통칭하기도 하지만 사실은 조금씩 다른 걸 지칭하는 말인데요.
        </h6>

      </div>

      <div
        data-aos="fade-down"
        class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-5 mb-5 sub_title2">
        전기차 배터리는 '셀 → 모듈 → 팩'으로 구성된다
      </div>


      <div class="d-flex flex-wrap ">

        <div class="col-sm-6 align-self-center">

          <img
            data-aos="fade-down"
            className="flex-grow-1 img12 object-fit-cover "
            src={SubImage1}
            alt="First slide"
          />

        </div>

        <div class="col-sm-6 align-self-center">

          <h6
            data-aos="fade-down"
            className='mt-5 mb-5 flex-grow-1 border-top border-bottom border-2 py-5 border-dark sub_title4'> 전기차 가동을 위해서는 스마트폰의 수천 배에 달하는 엄청난 양의 전력이 필요합니다.
            때문에 배터리 셀이 수십 개에서 많게는 수천 개까지 필요하죠. 전기차 종류에 따라 구성이 조금씩 차이가 있을 수 있겠지만,
            일반적으로 전기차 배터리는 셀(Cell), 모듈(Module), 팩(Pack)으로 구성됩니다.
            수 많은 배터리 셀을 안전하게 그리고 효율적으로 관리하기 위해 모듈과 팩이라는 형태를 거쳐 전기차에 탑재하는 것입니다.
            셀, 모듈, 팩은 쉽게 배터리를 모으는 단위로 생각하면 됩니다. 배터리 셀을 여러 개 묶어서 모듈을 만들고, 모듈을 여러 개 묶어서 팩을 만드는 것이죠.
            전기차에는 최종적으로 배터리가 하나의 팩 형태로 들어가게 됩니다.
          </h6>

        </div>

      </div>

      <div
        data-aos="fade-down"
        class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-5 mb-5 sub_title2">
        전기차 배터리 팩
      </div>

      <div class="sub4_title d-flex flex-wrap flex-row-reverse">

        <div class="col-sm-6 align-self-center">

          <img
            data-aos="fade-down"
            className="flex-grow-1 object-fit-cover img12"
            src={SubImage2}
            alt="First slide"
          />

        </div>

        <div class="col-sm-6 align-self-center mb-5">

          <h6
            data-aos="fade-down"
            className='mt-5 mb-5 flex-grow-1 border-top border-bottom border-2 py-5 border-dark sub_title4'> 대표적인 순수 전기차(EV) BMW i3의 배터리를 예로 들어 볼까요? BMW i3에는 배터리 셀이 총 96개 탑재됩니다.
            셀 12개를 하나의 모듈로 묶고, 8개의 모듈을 묶어 하나의 팩 형태로 들어가는 것이죠.
            하나씩 살펴보면, 먼저 배터리의 기본이 되는 셀은 자동차 내 제한된 공간에서 최대한의 성능을 발현할 수 있도록
            단위 부피당 높은 용량을 지녀야 하고, 일반 모바일 기기용 배터리에 비해 훨씬 긴 수명이 필요합니다.
            또한, 주행 중에 전달되는 충격을 견디고, 저온/고온에서도 끄덕 없을 만큼 높은 신뢰성과 안정성을 지녀야 하죠
            . 여러 개의 셀은 열과 진동 등 외부 충격에서 좀 더 보호될 수 있도록 하나로 묶어 프레임에 넣게 되는데요,
            이 상태를 모듈이라고 부릅니다. 그리고 모듈 여러 개를 모아 배터리의 온도나 전압 등을 관리해 주는
            배터리 관리시스템(BMS, Battery Management System)과 냉각장치 등을 추가한 것이 배터리 팩입니다.
            이런 방식으로 전기차에는 배터리 셀 여러 개가 하나의 팩 형태로 들어가는 것이랍니다.
          </h6>

        </div>

      </div>

    </div>


  )
}

export default ElectricCarBattery