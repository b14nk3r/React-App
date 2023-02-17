import { Button, Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import Axios from 'axios';
import { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";
//*완료 footer 컴포넌트 따로만들기
//*완료 목록으로 버튼만들기
//*완료 유효하지 않은 주소 페이지 만들기
//*완료 메인화면 레이아웃 다시 짜기

//부트스트랩 클래스네임 보면서 멋있게 바꾸기
//가능하다면 게시판 상세 axios말고 props로 가지고오기 
//사진같은거 애니메이션 추가
//헤더 하나로 묶어서 between 옵션으로 수정 하던지 바꾸기
//회사소개 제품소개등 띄어쓰기 붙히기
//BSONTypeError 404띄우기
//게시글 눌렀을때 스크롤
//글쓰기 alert 넣을지 말지 고민하기
//상단배너 컴포넌트화
//reference referencewrite 서로 이름바꾸기
//관리자 페이지 jwt refrash 토큰으로 설정하기 코딩애플 보고 보안이슈 해결하기 리액트 권한별 라우팅
//크롬 탭 로고 바꾸기
//빌드할때 난독화 할지 생각하기
//웹사이트 컬러정하기
//웹사이트 메인, 배너 사진 찾기
//게시글 수정, 삭제 만들기
//src 폴더 구조 설계하기
//사용하지 않는 모듈, 코드 제거
//모든 글씨 폰트 적용하기
//버튼 부트스트랩 사용안하고 꾸미기
//Header toggle 수정!!!! 중요
//폰트 크기 반응형으로 바꾸기
//배포전에 콘솔로그 제거
//로고 pptx 고화질로 저장 레지스트리편집


const Board = () => {
  console.log("렌더링");
  let isFile = "파일 없음";
  let fileName;
  let fileSize;
  let sFileSize;

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const [viewContent, setViewContent] = useState([]);
  const { no } = useParams();
  console.log("가져온파라미터입니다:" + no);
  useEffect(() => {
    Axios.get(`http://localhost:8080/details/${no}`).then((response) => {
      setViewContent(response.data);
      const json = JSON.stringify(response.data);
      console.log("가져온결과입니다:" + json);
    })
  }, [])

  if (viewContent.url === null || viewContent.url === undefined) {
    isFile = false;
    console.log("파일 있냐?" + isFile);
    console.log("주소" + viewContent.url)
  } else {
    isFile = true;
    console.log("파일 있냐?" + isFile);
    fileName = decodeURIComponent(viewContent.url.replace('https://mymarubucket.s3.ap-northeast-2.amazonaws.com/original/', ''));

    if (viewContent.fileSize >= 1048576) {
      //메가바이트
      fileSize = viewContent.fileSize / 1024 / 1024;
      sFileSize = String(fileSize.toFixed(2)) + "MB";
    } else if (viewContent.fileSize > 1024 && viewContent.fileSize < 1048576 ) {
      //킬로바이트
      fileSize = viewContent.fileSize / 1024 ;
      sFileSize = String(fileSize.toFixed(0)) + "KB";
    } else if (viewContent.fileSize >= 0 && viewContent.fileSize < 1024) {
      //바이트
      fileSize = viewContent.fileSize;
      sFileSize = String(fileSize) + "Bytes";
    };

    console.log(sFileSize);
  }

  //const fileName = viewContent.url.replace('https://mymarubucket.s3.ap-northeast-2.amazonaws.com/original/');
  //console.log(fileName);
  return (
    <div>
      <div id="sub-visual" class="bg-04">
        <div class="sub_tit">
          <h1>고객지원</h1>
          <h5>한국소방기구제작소는 언제나 당신의 안전을 먼저 생각합니다.</h5>
        </div>
      </div>
      <Container style={{
        minHeight: `calc(100vh - 120px)`,
      }}>
        <div class="row relative container2">
          <div class="col-md-12">
            <p class="sub_title">자료실</p>
          </div>
        </div>

        <div className='text-break border py-4 px-4'>
          <div>
            <h3 className="border-bottom pb-2 text-wrap">{viewContent.제목}</h3>
          </div>
          <div style={{ width: "100%" }}>
            <div className='d-flex text-muted justify-content-end' style={{ fontSize: "0.8rem" }}>
              <span>작성자&nbsp;</span>
              <span>관리자</span>
              <span className='vr mx-2'></span>
              <span>작성일&nbsp;</span>
              <span>{viewContent.날짜}&nbsp;</span>
            </div>
          </div>
          <div className='contentImg' style={{
          minHeight: `600px`,
        }}>{ReactHtmlParser(viewContent.내용)}</div>
          <div className={isFile ? 'd-flex justify-content-between align-items-center mt-3 p-4 bg-light' : 'd-none'}>
            <div>
              <Link className="download" style={{ color: "black" }} onClick={() => { window.open(viewContent.url) }}>{fileName}</Link>
              <div className='text-muted'><i>{sFileSize}</i></div>
            </div>
            <IoMdDownload size={30} color={"black"}></IoMdDownload>
          </div>
        </div>

        <div className='d-flex justify-content-center my-3'>
          <Link to="/ReferenceWrite"><Button variant="dark" size='lg'>목록으로</Button></Link>
        </div>
      </Container>
    </div>
  )
}


export default Board