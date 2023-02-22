import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from "react-router-dom"

import Company1 from '../images/company1.jpg'
import Company2 from '../images/company2.jpg'
import Company3 from '../images/company3.jpg'

const CompanyInfo = () => {
    const { pathname } = useLocation();

    const [list, setList] = useState(1);

    const changeList = (e) => {
        if (e.currentTarget.id === "1") {
            setList(1);
        } else if (e.currentTarget.id === "2") {
            setList(2);
        } else if (e.currentTarget.id === "3") {
            setList(3);
        } else if (e.currentTarget.id === "4") {
            setList(4);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <div class="row relative container2">
                <div class="col-md-12">
                    <p class="sub_title">마루</p>
                </div>

                <div class="sub4_title d-flex flex-wrap ">
                    <div class="col-sm-5 align-self-center">
                        <img
                            className="flex-grow-1 img12 object-fit-cover "
                            src={Company1}
                            alt="First slide"
                        />
                    </div>
                    <div class="col-sm-7 align-self-center li_b ">
                        <div className='mt-5 mb-5 flex-grow-1 border-2 py-5 img12'>
                            <h4 className='sub_title2-1 mb-3'>계속 다양해지는 리튬이온 배터리 사용 분야</h4>
                            <h6 className='sub_title4'>
                                최근 리튬이온 배터리 사용분야가 다양해지면서 배터리 화재시 소화 방법에 대한 관심이 증폭되고 있습니다. 리튬배터리 및 금속 화재는 가연성금속이 연소하는 화재이며 반드시 금속화재 진압용 소화약제를 사용한 소화장치로 화재를 진압해야합니다.</h6>

                        </div>
                    </div>
                </div>

                <div class="sub4_title d-flex flex-wrap flex-row-reverse">
                    <div class="col-sm-5 align-self-center">
                        <img
                            className="flex-grow-1 img12 object-fit-cover "
                            src={Company2}
                            alt="First slide"
                        />
                    </div>
                    <div class="col-sm-7 align-self-center li_b ">
                        <div className='mt-5 mb-5 flex-grow-1 border-2 py-5 img12'>
                            <h4 className='sub_title2-1 mb-3'>EGS-L 시리즈는 특별합니다</h4>
                            <h6 className='sub_title4'>
                                저희 소화기는 국내에서 유일하게 방재시험 연구원으로부터 리튬배터리의 열폭주 소화효과를 인정 및 테스트를 통과한 제품입니다. 자동차 분야/ESS/
                                로봇/전자정보기기등 다양한 분야에서 사용되고있는 리튬배터리의 화재시 최적의 소화효과를 발휘할수 있는 제품입니다.</h6>

                        </div>
                    </div>
                </div>

                <div class="sub4_title d-flex flex-wrap ">
                    <div class="col-sm-5 align-self-center">
                        <img
                            className="flex-grow-1 img12 object-fit-cover "
                            src={Company3}
                            alt="First slide"
                        />
                    </div>
                    <div class="col-sm-7 align-self-center li_b ">
                        <div className='mt-5 mb-5 flex-grow-1 border-2 py-5 img12'>
                            <h4 className='sub_title2-1 mb-3'>마루는 항상 당신의 안전을 먼저 생각합니다</h4>
                            <h6 className='sub_title4'>
                                저희 마루는 화재로부터 고객님들의 소중한 재산과 안전을 보호하고 안전한 생활을 만들기 위해서 끊임없이 노력하겠습니다. 감사합니다.</h6>

                        </div>
                    </div>
                </div>
            </div>
            <div className='add'>
            </div>
        </div>


    )
}

export default CompanyInfo