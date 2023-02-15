import React from 'react'
import { Container } from 'react-bootstrap';
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  return (
        <div>
      <div id="sub-visual" class="bg-04">
        <div class="sub_tit">
          <h1>404</h1>
          <h5>not found</h5>
        </div>
      </div>
      <Container>
        <div className='d-block text-center' style={{height:"100%", padding: "4rem 0"}}>
            <TbError404 size={300}/>
            <h1>페이지를 열 수 없습니다.</h1>
            <h4 className='text-muted'>입력하신 주소의 페이지를 찾을 수 없거나 서비스 연결 오류일 수 있습니다. 주소를 확인하셔서 잠시 후 다시 이용해주세요.</h4>
        </div>
      </Container>
    </div>
  )
}

export default NotFound