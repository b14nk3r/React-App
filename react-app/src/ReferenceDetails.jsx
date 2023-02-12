import { Button, Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import Axios from 'axios';
import { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//footer 컴포넌트 따로만들기
//목록으로 버튼만들기
//부트스트랩 클래스네임 보면서 멋있게 바꾸기
//가능하다면 게시판 상세 axios말고 props로 가지고오기 
//사진같은거 애니메이션 추가
const Board = () => {
  const [viewContent, setViewContent] = useState([]);
  const { no } = useParams();
  console.log("가져온파라미터입니다:"+no);
  useEffect(() => {
    Axios.get(`http://localhost:8080/details/${no}`).then((response) => {
      setViewContent(response.data);
      const json = JSON.stringify(response.data);
      console.log("가져온결과입니다:"+json);
    })
  }, [])
    return (
      <Container className='pt-5 mt-5' style={{
        minHeight: `calc(100vh - 120px)`,
      }}>
        <div className='m-lg-5 text-center'>
            <h1><b>자료실</b></h1>
        </div>

        <div className='border py-4 px-4' style={{
        minHeight: `600px`,
      }}>
            <div>
                <h3 className="border-bottom pb-2"><b>{viewContent.제목}</b></h3>
            </div>
            <div style={{width:"100%"}}>
                <div className='d-flex text-muted justify-content-end' style={{ fontSize: "0.8rem" }}>
                    <span>작성자&nbsp;</span>
                    <span>관리자</span>
                    <span className='vr mx-2'></span>
                    <span>작성일&nbsp;</span>
                    <span>{viewContent.날짜}&nbsp;</span>
                </div>
            </div>
            <div className='d-flex justify-content-end mt-2' style={{width: "100%"}}>
                <Button variant="outline-dark" size='sm' onClick={()=>{window.open(viewContent.url)}}>첨부파일</Button>
            </div>
            <div className='contentImg'>{ReactHtmlParser(viewContent.내용)}</div>
        </div>

        <div className='d-flex justify-content-center my-3'>
          <Link to="/ReferenceWrite"><Button variant="dark" size='lg'>목록으로</Button></Link>
        </div>
    </Container>
    )
}


export default Board