import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import { Button, ButtonToolbar, Container } from 'react-bootstrap';

//import Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Battery_composition = () => {
    return (
        <>



 
            <Container className="py-5 text-center container mt-5">



                <div className="row py-lg-5">

                    <div className='col-lg-6  mx-auto'>
                        
                    <div className='m-lg-5 text-center'>
                    <h1><b>리튬배터리 구성</b></h1>
                </div>




                    </div>

                </div>






            </Container>








            <div className=" text-center container  ">








                <h6 className=' mb-5'>리튬이온 배터리는 양극, 음극, 전해액, 분리막 네 가지로 구성되어 있고, 양극은 리튬이온<br></br>
                    원소로 배터리의 용량과 평균 전압을 결정하며, 음극은 탄소화합물로 양극에서 나온 리튬이<br></br>
                    온을 저장했다가 방출하면서 외부회로를 통해 전류가 흐르게 하는 역할, 양극과 음극에서<br></br>
                    리튬 이온이 이동할 수 있는 매개체 역할을 할 수 있도록 전해액을 넣고, 분리막은 양극과<br></br>
                    음극이 접촉하는 것을 차단한다.
                </h6>

                <img className='className="d-block w-100 vh-200 object-fit-cover "' src='./images/top.png' style={{ height: '100px', width: '2000px' }}></img>

                <Container className='d-flex d-flex justify-content-center'>
                <div>
                <img src='./images/y1.png' style={{ height: '30rem', width: '50rem' }}></img>
                <h3>양극</h3>
                <h6 className=' mb-5'>
                    리튬이온 배터리는 리튬의 화학적 반응으로 전기를 생산하는 배터리로 리튬을 사용하는데<br></br>
                    그 리튬이 양극에 해당된다 하지만 리튬은 원소 상태에서는 반응이 불안정해서 산소와 화합<br></br>
                    하여 리튬산화물로서 화합물질 상태에서 양극으로 사용된다 통상 실제 전극활동에 관한 물<br></br>
                    질을 활물질이라 부르고 리튬이온배터리의 활물질로 사용된다.<br></br>
                    양극의 구성을 보면 알루미늄 기재를 중심으로 양면에 합제를 하여 구성되었으며 합제의<br></br>
                    구성물질은 활물질인 리튬산화물과 도전제, 바인더로를 합쳐 만들어 져있으며, 도전제는 리<br></br>
                    튬산화물의 전도성을 높이기 위하여 첨가하며, 바인더는 알루미늄기재에 활물질과 도전제가<br></br>
                    잘 정착할 수 있도록 도와주는 접착역할은 한다. 이렇게 만들어진 양극 활물질은 배터리의<br></br>
                    용량과 전압을 결정짓는 중요한 요소가 되기도 한다.<br></br>
                    리튬을 많이 포함하면 용량이 커지고, 음극과 양극의 전위차가 크면 전압이 커진다. 일반<br></br>
                    적으로 음극은 종류에 따라 전위의 차이가 작은데 반해 양극은 상대적으로 차이가 크기 때<br></br>
                    문에 양극이 배터리 전압을 결정짓는 데 중요한 역할을 한다.<br></br>
                </h6>
                </div>
                <div>
                <img src='./images/y2.png' style={{ height: '30rem', width: '50rem' }}></img>
                <h3>음극</h3>
                <h6 className=' mb-5'>
                    음극도 양극처럼 음극기재에 활물질이 입혀진 형태로 이루어져있다, 음극 활물질은 양극<br></br>
                    에서 나온 리튬이온을 가역적으로 흡수 또는 방출하면서 외부회로를 통해 전류를 흐르게 하<br></br>
                    는 역할을 수행한다,<br></br>
                    배터리가 충전할 때 리튬이온은 양극이 아닌 음극상태로 존재하고 있다가 양극과 음극이<br></br>
                    도선으로 이어지면 리툼이온은 전해액을 통해 다시 양극으로 이동하게된다, 이런 식으로 리<br></br>
                    튬이온과 분리된 전자는 도선을 따라 이동하고 이동에 따른 전위차로 인하여 전기를 발생한<br></br>
                    다. 음극도 구리지재위에 활물질, 도전제, 바인더가 입혀지는데, 음극에서 안정적인 구조를<br></br>
                    지닌 흑연은 낮은 전자 화학반응과 리튬이온을 많이 저장할 수 있는 조건, 재료비를 낮출<br></br>
                    수 있는 등 장점을 가지고 있어 음극재료로 사용 된다.<br></br>
                </h6>
                </div>

                </Container>
                

                <img className='className="d-block w-100 vh-200 object-fit-cover mt-5 "' src='./images/top.png' style={{ height: '100px', width: '2000px' }}></img>
                
                <Container className='d-flex d-flex justify-content-center'>
                <div>
                
                <img src='./images/y3.png' style={{ height: '30rem', width: '50rem' }}></img>
                <h3>전해액</h3>
                <h6 className=' mb-5'>
                    리튬이온이 전해액을 통해 이동하고, 이동한 리튬이온에서 전자가 분리되어 도선을 이동<br></br>
                    하게 하는 역할을 전해액이 담당하는데, 전해액의 구성은 염, 용매, 첨가제로 구성되며, 염은<br></br>
                    리튬이온이 지나갈 수 있는 이동통로, 용매는 염을 용해시키기 위해 사용되는 유기 액체, 첨<br></br>
                    가제는 특정 목적을 위해 소량으로 첨가되는 물질이다, 이렇게 만들어진 전해액은 이온들만<br></br>
                    전극으로 이동시키고, 전자는 통과하지 못하게 하는 역할을 함, 전해액의 종류에 따라 리튬<br></br>

                    이온의 움직임이 둔해지기도, 빨라지기도 한다.<br></br>

                </h6>
                </div>


                <div>
                <img src='./images/y4.png' style={{ height: '30rem', width: '50rem' }}></img>
                <h3>분리막</h3>
                <h6 className=' mb-5'>
                    분리막은 말 그대로 양극과 음극이 서로 섞이지 않도록 물리적으로 막아주는 역할을 담당<br></br>
                    하고 있고, 전자가 전해액을 통해 직접 흐르지 않도록 하고, 내부의 미세한 구멍을 통해 원<br></br>
                    하는 이온만 이동하게 해준다.<br></br>
                    물리적인 조건과 화학적인 조건을 모두 충족해야한다는 뜻이며, 현재 상용화된 분리막으<br></br>
                    로는 폴리에틸렌, 폴리프로필렌 등 합성수지가 사용되고 있다.<br></br>
                </h6>
                </div>

                </Container>

                <img className='className="d-block w-100 vh-200 object-fit-cover mt-5 mb-5 "' src='./images/top.png' style={{ height: '100px', width: '2000px' }}></img>
                <img className='mb-5' src='./images/y5.png' style={{ height: '30rem', width: '40rem' }}></img>
                <h3>리튬배터리의 작동원리</h3>
                <h6 className=' mb-5'>
                    리튬이온배터리는 양극과 음극 소재의 산화·환원 반응(oxidation-reduction reaction)으로 인해 화학 에너지를 전기 에너지로 변환시킨다. <br></br>
                    해당 반응은 반응물의 전자 이동으로 일어나는 반응이며, 전자를 잃은 경우, 산화, 전자를 얻은 경우,<br></br>
                    환원이라 표현한다. 해당 과정에서 리튬 이온과 분리된 전자가 도선을 따라 양극과 음극 사이를 움직이며 전자가 발생한다.<br></br>
                    방전 과정 시, 리튬 이온이 음극에서 양극으로 이동하며, 충전의 경우에는 리튬 이온이 양극에서 음극으로 이동하는 원리로 작동한다. <br></br>




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

export default Battery_composition
