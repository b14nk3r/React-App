import React from 'react'
import SubImage1 from "../images/ess.PNG"
import SubImage2 from "../images/ess2.PNG"

const Ess = () => {
  return (
    
    <div class="con_12">
    <div class="row relative container2">
      <div class="col-md-12">
        <p class="sub_title">ESS(Energy Storage System)란?</p>
      </div>
    </div>

  
    <div class="sub3_title align-self-center">
      <h6 className='mt-5 g'>ESS는 생산된 전력에너지를 배터리에 저장한 뒤 이후 전력이 필요한 시기에 저장된 전력을 공급하여
전력 사용에 효율을 높이는 시스템입니다.
일반적으로 경부하(야간) 시간대에 유휴전력을 저장하고 피크부하(주간) 시간대에 방전하도록 동작하여
부하 평준화를 제공할 뿐만 아니라 출력 전력이 일정하지 않은 태양광 풍력 등과 같은 신재생 에너지원과 연계하여 출력 품질을 향상시켜 간헐적
발전 특성을 완화할 수 있는 역할도 수행하는 시스템입니다. ESS는 전력망의 송배전 시스템을 비롯하여 수용가 등 다양한 환경에서 상황별 상이한
목적에 따라 사용될 수 있습니다.

      </h6>
    </div>

    <div class="sub3_title align-self-center">
      <h6 className='mt-5 g'>ESS는 효율적인 전력 활용 고품질의 전력 확보 안정적인 전력 공급 측면에서 그 필요성이 증대되고 있습니다.
현재 전력시스템은 피크타임 전력수요에 맞춰 전력용량을 증설해야 하는 구조로 전력 수요와 공급 간의 불일치가 발생합니다.
그리고 발전소 건설에 많이 비용이 소요되며 심야에 잉여 전력 과다 등의 비효율적인 상황이 발생합니다.
전력은 생산과 소비가 동시에 이루어져 전력계통을 안정되게 운용하기 위해서는 소비되는 전력량보다 발전되는 전력을 향상 많이 공급해야
주파수유지 등 전력품질을 확보할 수 있습니다. 전력시스템을 효율적으로 운용하기 위해서는 전기에너지를 부하가 적은 시간대에 충전하고 필요에 따라
방전하여 사용할 수 있는 시스템이 필요합니다.

      </h6>
    </div>





    <img
      className="flex-grow-1 object-fit-cover mt-5 images2"
      src={SubImage1}
      alt="First slide"
    />


<div class="sub3_title align-self-center">
      <h6 className='mt-5 g'>SS는 전력수요가 적은 심야시간에 전기에너지를 배터리에 저장하고 전력수요가 많은 피크시간에 방전 하면서
일정부분의 피크부하를 분담하여 부하율을 개선할 수 있습니다.
Time Shifting은 낮에 발전한 태양광발전 에너지를 저녁시간의 수요에 사용하도록 방전하는 방법으로 .
에너지 수급을 맞추거나 전력 수요가 적을 때 충전하고 피크시간대 방전을 통하여 계통에 전력을 공급하는 개념으로,
최대 피크를 줄이고 계통의 예비율 확보가 가능합니다. 또한 Peak Shaving을 도입하여 일정 부분의 피크 부하를 분담함으로써 부하율을 개선하고
전력설비를 효율적으로 운용할 수 있으며 발전설비의 건설을 회피하거나 지연시킬 수 있습니다.

      </h6>
    </div>









   

    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-5 mb-5 sub2_title">
    ESS(Energy Storage System)의 구성
    </div>
  
      
        <img
          className="flex-grow-1 object-fit-cover images2"
          src={SubImage2}
          alt="First slide"
        />

     
<div class="sub3_title align-self-center">
      <h6 className='mt-5 g'>ESS가 에너지 저장 시스템이기 때문에 ESS 자체를 배터리라고 알고 계시지만, 
      사실 배터리는 ESS의 구성부품입니다. ESS는 전기를 저장하는 배터리와 배터리를 효율적으로 관리해 주는 다른 관련 제품들로 이루어져 있습니다.
       위 그림에서 보는 것과 같이 ESS는 배터리와 BMS, PCS, EMS 등 다양한 장치들을 하나로 연동하여 관리와 통제, 제어를 하는 통합적인 시스템입니다.
        배터리: 배터리는 에너지를 저장하는 매체로서 ESS의 핵심이라고 할 수 있습니다. 배터리는 PCS를 거쳐 전기를 저장하였다가 필요할 때 전기를 방전하는
         역할을 합니다. ESS의 가격의 50~70%를 차지합니다. BMS: BMS는 Battery Management의 약자로 배터리 관리 시스템을 말합니다. 배터리의 전압과 전류,
          온도를 실시간으로 측정하여 과충전 또는 방전 등의 보호 기능을 수행합니다. PCS 및 운영시스템과 통신하여 배터리의 데이터를 제공하여 배터리의 안전성과
           신뢰성을 높여줍니다. PCS: PCS는 Power Conversion System의 약자로 전력 변환 장치를 말합니다. ESS에 저장되는 전기는 직류이고 사용하는 전기는
           교류입니다. PCS는 배터리에 저장된 직류전력을 교류로 변환하여 전력계통에 전력을 공급하거나 전력계통으로부터 교류전력을 직류로 변환하여 배터리에 
           저장하는 기능을 수행합니다. EMS: EMS는 Energy Management System의 약자로 에너지관리시스템을 말합니다. EMS는 실시간으로 배터리와 PCS의 상태를
            모니터링 및 제어하여 효율적인 전력운영이 가능하도록 해주는 운영 시스템입니다.

      </h6>
    </div>



  </div>


  )
}

export default Ess