import React from 'react'
import SubImage1 from "../images/y1.PNG"
import SubImage2 from "../images/y2.PNG"
import SubImage3 from "../images/y3.PNG"
import SubImage4 from "../images/y4.PNG"
import SubImage5 from "../images/y5.PNG"

const LiionComposition = () => {
  return (
    <div class="con_12">
          <div class="row relative container2">
            <div class="col-md-12">
              <p class="sub_title">리튬배터리 구성</p>
            </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 sub2_title">
            리튬이온 배터리
          </div>
          <div class="sub3_title align-self-center">
            <h6 className='mt-5 g'>리튬이온 배터리는 양극, 음극, 전해액, 분리막 네 가지로 구성되어 있고, 양극은 리튬이온
              원소로 배터리의 용량과 평균 전압을 결정하며, <br></br>음극은 탄소화합물로 양극에서 나온 리튬이
              온을 저장했다가 방출하면서 외부회로를 통해 전류가 흐르게 하는 역할,<br></br>양극과 음극에서
              리튬 이온이 이동할 수 있는 매개체 역할을 할 수 있도록 전해액을 넣고,분리막은 양극과
              음극이 접촉하는 것을 차단한다.
            </h6>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-5 mb-5 sub2_title">
            양극
          </div>
          <div class="sub4_title d-flex flex-wrap ">
            <div class="col-sm-6">
              <img
                className="flex-grow-1 img12 object-fit-cover "
                src={SubImage1}
                alt="First slide"
              />
            </div>
            <div class="col-sm-6 align-self-center">
              <h6 className='mt-5 mb-5 g flex-grow-1'> 리튬이온 배터리는 리튬의 화학적 반응으로 전기를 생산하는 배터리로 리튬을 사용하는데
                그 리튬이 양극에 해당된다.<br></br> 하지만 리튬은 원소 상태에서는 반응이 불안정해서 산소와 화합
                하여 리튬산화물로서 화합물질 상태에서 양극으로 사용된다 <br></br> 통상 실제 전극활동에 관한 물
                질을 활물질이라 부르고 리튬이온배터리의 활물질로 사용된다.<br></br>
                양극의 구성을 보면 알루미늄 기재를 중심으로 양면에 합제를 하여 구성되었으며<br></br> 합제의
                구성물질은 활물질인 리튬산화물과 도전제, 바인더로를 합쳐 만들어 져있으며,<br></br> 도전제는 리
                튬산화물의 전도성을 높이기 위하여 첨가하며, 바인더는 알루미늄기재에 활물질과 도전제가
                잘 정착할 수 있도록 도와주는 접착역할은 한다.<br></br> 이렇게 만들어진 양극 활물질은 배터리의
                용량과 전압을 결정짓는 중요한 요소가 되기도 한다.
                리튬을 많이 포함하면 용량이 커지고,<br></br> 음극과 양극의 전위차가 크면 전압이 커진다. 일반
                적으로 음극은 종류에 따라 전위의 차이가 작은데 반해 양극은 상대적으로 차이가 크기 때
                문에<br></br> 양극이 배터리 전압을 결정짓는 데 중요한 역할을 한다.
              </h6>
            </div>
          </div>


          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-5 mb-5 sub2_title">
            음극
          </div>
          <div class="sub4_title d-flex flex-wrap flex-row-reverse">
            <div class="col-sm-6">
              <img
                className="flex-grow-1 object-fit-cover img12"
                src={SubImage2}
                alt="First slide"
              />

            </div>

            <div class="col-sm-6 align-self-center">
              <h6 className='mt-5 mb-5 g flex-grow-1'> 리튬이온 배터리는 리튬의 화학적 반응으로 전기를 생산하는 배터리로 리튬을 사용하는데
                그 리튬이 양극에 해당된다. <br></br> 하지만 리튬은 원소 상태에서는 반응이 불안정해서 산소와 화합
                하여 리튬산화물로서 화합물질 상태에서 양극으로 사용된다. <br></br> 통상 실제 전극활동에 관한 물
                질을 활물질이라 부르고 리튬이온배터리의 활물질로 사용된다.
                양극의 구성을 보면 알루미늄 기재를 중심으로 양면에 합제를 하여 구성되었으며 <br></br> 합제의
                구성물질은 활물질인 리튬산화물과 도전제, 바인더로를 합쳐 만들어 져있으며, <br></br> 도전제는 리
                튬산화물의 전도성을 높이기 위하여 첨가하며, 바인더는 알루미늄기재에 활물질과 도전제가
                잘 정착할 수 있도록 도와주는 접착역할은 한다. <br></br> 이렇게 만들어진 양극 활물질은 배터리의
                용량과 전압을 결정짓는 중요한 요소가 되기도 한다.<br></br>
                리튬을 많이 포함하면 용량이 커지고, 음극과 양극의 전위차가 크면 전압이 커진다. <br></br> 일반
                적으로 음극은 종류에 따라 전위의 차이가 작은데 반해 양극은 상대적으로 차이가 <br></br> 크기 때
                문에 양극이 배터리 전압을 결정짓는 데 중요한 역할을 한다.
              </h6>
            </div>

          </div>




          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-5 mb-5 sub2_title">
            진해액
          </div>
          <div class="sub4_title d-flex flex-wrap ">
            <div class="col-sm-6">
              <img
                className="flex-grow-1 img12 object-fit-cover "
                src={SubImage3}
                alt="First slide"
              />
            </div>
            <div class="col-sm-6 align-self-center">
              <h6 className='mt-5 mb-5 g flex-grow-1'>리튬이온이 전해액을 통해 이동하고, 이동한 리튬이온에서 전자가 분리되어 <br></br>
                도선을 이동 하게 하는 역할을 전해액이 담당하는데, 전해액의 구성은 <br></br> 염, 용매, 첨가제로 구성되며, 염은 리튬이온이 지나갈 수 있는 이동통로, 용매는 염을 용해시키기 위해 사용되는 유기 액체, 첨 가제는 특정 목적을 위해 소량으로 첨가되는 물질이다, <br></br>
                이렇게 만들어진 전해액은 이온들만 전극으로 이동시키고, <br></br>
                전자는 통과하지 못하게 하는 역할을 함, 전해액의 종류에 따라 리튬 이온의 움직임이 둔해지기도, 빨라지기도 한다.
              </h6>
            </div>
          </div>

          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-5 mb-5 sub2_title">
            분리막
          </div>
          <div class="sub4_title d-flex   flex-wrap flex-row-reverse ">
            <div class="col-sm-6">
              <img
                className="flex-grow-1 object-fit-cover img12"
                src={SubImage4}
                alt="First slide"
              />

            </div>

            <div class="col-sm-6 align-self-center ">
              <h6 className='mt-5 mb-5 g flex-grow-1'> 분리막은 말 그대로 양극과 음극이 서로 섞이지 않도록 물리적으로 막아주는 역할을 <br></br> 담당 하고 있고, 전자가 전해액을 통해 직접 흐르지 않도록 하고, 내부의 미세한 구멍을 통해 <br></br>
                원하는 이온만 이동하게 해준다. 물리적인 조건과 화학적인 조건을 모두 충족해야한다는 뜻이며, <br></br> 현재 상용화된 분리막으 로는 폴리에틸렌, 폴리프로필렌 등 합성수지가 사용되고 있다.
              </h6>
            </div>

          </div>

          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-5 mb-5 sub2_title">
            리튬배터리의 작동원리
          </div>
          <div class="sub4_title d-flex flex-wrap">
            <div class="col-sm-6">
              <img
                className="flex-grow-1 img12 object-fit-cover "
                src={SubImage5}
                alt="First slide"
              />
            </div>
            <div class="col-sm-6 align-self-center">
              <h6 className='mt-5 mb-5 g flex-grow-1 '> 리튬이온배터리는 양극과 음극 소재의 산화·환원 반응(oxidation-reduction reaction)으로 인해 화학 에너지를 전기 에너지로 변환시킨다.<br></br>
                해당 반응은 반응물의 전자 이동으로 일어나는 반응이며, 전자를 잃은 경우, 산화, 전자를 얻은 경우, 환원이라 표현한다.<br></br>
                해당 과정에서 리튬 이온과 분리된 전자가 도선을 따라 양극과 음극 사이를 움직이며 전자가 발생한다. 방전 과정 시, 리튬 이온이 음극에서 양극으로 이동하며, 충전의 경우에는 리튬 이온이 양극에서 음극으로 이동하는 원리로 작동한다.
              </h6>
            </div>
          </div>

        </div>
  )
}

export default LiionComposition