import { useEffect, useState, useMemo } from 'react';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

//import CKeditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

//import ReactHtmlParser
import ReactHtmlParser from 'react-html-parser'
import Axios from 'axios';

import EditorComponent from "./EditorComponent"
//import ReactQuill
import ReactQuill from "react-quill";

import Banner from './Banner';

//500MB 제한
const FILE_SIZE_MAX_LIMIT = 500 * 1024 * 1024;

function Reference() {
    const navigate = useNavigate();
 
    const { pathname } = useLocation();
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 425);
    }, [pathname]);

    //catch 문 넣기
    useEffect(() => {
        console.log("로그인 검증 시작");
        Axios.get('http://localhost:8080/checkuser').then((response) => {
            console.log(response.data);
            setIsLogin(true);

        })
    }, []);

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState()

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }
    const onChangeFile = (e) => {
        setFile(e.target.files[0]);
    }

    const [viewContent, setViewContent] = useState([]);

    function trim(stringToTrim) {
        return stringToTrim.replace(/^\s+|\s+$/g,"");
    }

    let check_title = title;

	const trimmed_title = trim(check_title);
	const trimmed_title_length = trimmed_title.length;

    function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        if (trimmed_title_length === 0) {
            alert("제목을 입력해주세요.");

            return false;
        }
        if (content == "") {
            alert("내용을 입력해주세요.");

            return false;
        }
        
        /*if (file.size !== undefined) {
            if (file.size > FILE_SIZE_MAX_LIMIT) {
                alert("500MB 이하로 업로드 해주세요.")
    
                return false;
            }
        }*/
        if (file !== undefined) {
            if (file.size > FILE_SIZE_MAX_LIMIT) {
                alert("500MB 이하로 업로드 해주세요.")
    
                return false;
            }
            formData.append("file", file);
            formData.append("fileSize", file.size);
        }
        formData.append("name", name);
        formData.append("title", title);
        formData.append("content", content);
        console.log(formData);
        console.log(file);
        //console.log("파일 용량: " + file.size);
        Axios({
            method: "POST",
            url: 'http://localhost:8080/add',
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data; charset=utf-8;",
                "Access-Control-Allow-Origin": "*",
            },
        }).then(function (response) {
            console.log(response);
            navigate('/ReferenceWrite');
        })


        for (let key of formData.keys()) {
            console.log(key, ":", formData.get(key));
        }
        for (let value of formData.values()) {
            console.log(value);
        }

    }

    return (
        <div>
            <Banner title="고객지원" subTitle="한국소방기구제작소는 언제나 당신의 안전을 먼저 생각합니다." backgroundImg="bg-04" isMenu="d-none"></Banner>
            <Container style={{
                minHeight: `calc(100vh - 120px)`,
            }}>
                <div class="row relative container2">
                    <div class="col-md-12">
                        <p class="sub_title">자료실</p>
                    </div>
                </div>
                {isLogin ? <form accept-charset="UTF-8" onSubmit={onSubmit} >
                    <div>
                        <div class="form-group mb-3">
                            <input class="form-control" type="text"
                                placeholder="제목을 입력하세요."
                                onChange={onChangeTitle}
                                name='title'
                            />
                        </div>
                        <div>
                            <input class="form-control mb-3" onChange={onChangeFile} enctype="multipart/form-data" type="file" name="file" />
                        </div>
                        <EditorComponent content={content} setContent={setContent} />

                        {/*} <div class="form-group">

                        <label for="exampleInputContent1" class="form-label mt-4">내용</label>
                        <input class="form-control" type="text"
                            placeholder="내용을 입력하세요."
                            onChange={onChangeContent}
                            name='content'
                        />
                    </div>*/}
                    </div>
                    <div className='d-flex justify-content-center my-5 py-5'>
                        <Button
                            variant='dark'
                            size='lg'
                            className="submit-button"
                            type="submit"
                        >글 쓰기</Button>
                    </div>
                </form>
                : 
                    <div className='d-block text-center' style={{ height: "100%", padding: "4rem 0" }}>
                        <TbError404 size={300} />
                        <h1>접근 할 수 없는 페이지 입니다.</h1>
                        <h4 className='text-muted'>입력하신 주소의 페이지를 찾을 수 없거나 서비스 연결 오류일 수 있습니다. 주소를 확인하셔서 잠시 후 다시 이용해주세요.</h4>
                    </div>}


            
            </Container>
        </div>
    )
}

export default Reference
/*
import { useEffect, useState } from 'react';
import React from 'react';
import { Button, Container } from 'react-bootstrap';

//import CKeditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

//import ReactHtmlParser
import ReactHtmlParser from 'react-html-parser'
import Axios from 'axios'; 

function Reference() {
    const [referenceContent, setReferenceContent] = useState({
        title: '',
        content: ''
    })

    const [viewContent, setViewContent] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:8080/list').then((response)=>{
          setViewContent(response.data);
        })
      },[viewContent])
    //이것이주석이야sdasdasdasdasd

    const submitReview = ()=>{
        Axios.post('http://localhost:8080/add', {
          title: referenceContent.title,
          content: referenceContent.content
          
        }).then(()=>{
          alert('등록 완료!');
          console.log(referenceContent.title);
        })
      };

    const getValue = e => {
        const { name, value } = e.target;
        setReferenceContent({
            ...referenceContent,
            [name]: value
        })
        console.log(name, value);
    }
    return (
        <Container>
            <div class="form-group">
                <h1>자료실</h1>
                <div>
                    {viewContent.map(element =>
                        <div>
                            <h2>{element.제목}</h2>
                            <div>
                                {ReactHtmlParser(element.내용)}
                            </div>
                            <img></img>
                        </div>)}
                </div>
            </div>
            <div>
                <div class="form-group">
                    <label for="exampleInputContent1" class="form-label mt-4">제목</label>
                    <input class="form-control" type="text"
                        placeholder="제목을 입력하세요."
                        onChange={getValue}
                        name='title'
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputWriter1" class="form-label mt-4">이름</label>
                    <input class="form-control" type="text"
                        placeholder="이름을 입력하세요."
                        onChange={getValue}
                        name='title'
                    />
                </div>          
                <div class="form-group">
                    <label for="exampleInputPassword1" class="form-label mt-4">비밀번호</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="비밀번호를 입력하세요." />
                </div>
                <form method="POST" action="/upload" enctype="multipart/form-data" >
                    <input type="file" name="file" />
                    <button type="submit">전송</button>
                </form>
             
                <div class="form-group">
                
                    <label for="exampleInputContent1" class="form-label mt-4">내용</label>
                    <CKEditor class="form-control"
                        editor={ClassicEditor}
                        data="<p>Hello from CKEditor 5!</p>" 
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                            setReferenceContent({
                                ...referenceContent,
                                content: data
                            })
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                </div>
            </div>
            <Button 
            className="submit-button"
            onClick={submitReview}
            >입력</Button>
        </Container>
    )
}

export default Reference
*/