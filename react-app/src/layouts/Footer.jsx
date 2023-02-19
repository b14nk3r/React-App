import React from 'react'
import { Button, ButtonToolbar, Container } from 'react-bootstrap';

<> </>
const Footer = () => {
  return (
    /*<div>Footer 입니다</div>*/
    <>
         <div className='foo_cont bg-dark pt-5 pb-5'>
          <Container>
                        <div className='d-flex '>
                            <p className='text-center fo fo1'>주식회사 마루</p>
                        </div>

                        <div className='d-flex '>
                           {/*   <p className='text-center me-3 fo'>대표 : 정수현</p> */}
                         {/*   <p className='text-center me-3 fo'>사업자번호 : 503-81-11626</p> */}
                            <p className='text-center me-3 fo'>주소 : (12939) 경기도 하남시 미사강변로11 523호</p>
                        </div>

                        <div className='d-flex '>
                            <p className='text-center me-3 fo'>대표번호 : 031-796-9390</p>
                             {/* <p className='text-center me-3 fo'>Tel : 053-564-2201~4</p>*/}
                            <p className='text-center me-3 fo'> Fax : 031 - 796 - 9391</p>
                            <p className='text-center me-3 fo'>Email:  www.maru.biz</p>
                        </div>
                       {/* <p className='fo fo1 mb-2'>Copyright (c)HANKOOKFIRE. All Rights Reserved.</p> */}
                        </Container>



                    </div>


    </>
  )
}

export default Footer
