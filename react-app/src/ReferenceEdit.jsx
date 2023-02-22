import { useEffect, useState, useMemo, useRef } from 'react';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Routes, Route, Link, useLocation, useNavigate, useParams } from "react-router-dom";
import AWS from 'aws-sdk';
//import CKeditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

//import ReactHtmlParser
import ReactHtmlParser from 'react-html-parser'
import Axios from 'axios';
import EditorComponent from "./EditorComponent"
//import ReactQuill
import ReactQuill from "react-quill";

//500MB 제한
const FILE_SIZE_MAX_LIMIT = 500 * 1024 * 1024;

function ReferenceEdit() {
    console.log(process.env.REACT_APP_AWS_ACCESS_KEY_ID)
    console.log(process.env.REACT_APP_AWS_SECRET_ACCESS_KEY)
    const s3 = new AWS.S3({
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
        region: "ap-northeast-2"
    });
    /*AWS.config.update({
        apiVersion: "2010-12-01",
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
        region: "ap-northeast-2"
      })
      */
    const inputRef = useRef(null);
    const selectFilename = '';
    const navigate = useNavigate();
    let utfurl;
    const pathname = useLocation();
    const { no } = useParams();
    let fileName;
    const [fFile, setfFile] = useState()
    useEffect(() => {
        window.scrollTo(0, 425);
    }, [pathname]);

    const [name, setName] = useState('');
    const [title, setTitle] = useState(pathname.state.제목);
    const [content, setContent] = useState(pathname.state.내용);
    const [file, setFile] = useState()
    useEffect(() => {
        if (pathname.state.url !== null) {
            fileName = decodeURIComponent(pathname.state.url.replace('https://mymarubucket.s3.ap-northeast-2.amazonaws.com/', ''));
            console.log("pathname url 이다 이다이다이다" + fileName);
            const getObjectParams = {
                Bucket: "mymarubucket", // 다운할 버킷
                Key: fileName, // 다운할 파일 경로
            };
            s3.getObject(getObjectParams, (error, data) => {
                if (error) {
                    console.log(error);
                } else {
                    const file = new File([data.Body], fileName, { type: data.ContentType });
                    setName(fileName);
                    setFile(file);
                    console.log(file)
                }
            });
        }
    }, []);







    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeContent = (e) => {
        setContent(e.target.files[0].name);
    }
    const onChangeFile = (e) => {
        setFile(e.target.files[0]);
        setName(e.target.files[0].name);
        console.log(e.target.files[0].name)
    }

    const [viewContent, setViewContent] = useState([]);

    function trim(stringToTrim) {
        return stringToTrim.replace(/^\s+|\s+$/g, "");
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
            url: `http://localhost:8080/edit/${no}`,
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

                <form accept-charset="UTF-8" onSubmit={onSubmit} >
                    <div>
                        <div class="form-group mb-3">
                            <input class="form-control " type="text"
                                placeholder="제목을 입력하세요."
                                defaultValue={title}
                                onChange={onChangeTitle}
                                name='title'
                            />
                        </div>
                        <div>
                            <div className='d-flex mb-3'>
                            <label className="input-file-button edit-load" for="input-file"><spen className="edit-btn">파일 선택</spen></label>
                            <input class="upload-name form-control load-name" onChange={onChangeFile} value={name} disabled="disabled"></input>
                            </div>
                            <input class="form-control mb-3" style={{ display: "none" }} id="input-file" onChange={onChangeFile} enctype="multipart/form-data" type="file" ref={inputRef} defaultValue={fFile} name="file" />
                        </div>

                        <EditorComponent content={content} setContent={setContent} />

                        {/*} <div class="form-group">
<form onChange={onChangeFile}>
                        <div>
                            <input class="form-control mb-3" enctype="multipart/form-data" type="file" ref={inputRef} defaultValue={fFile} name="file" />
                            
                        </div>
                        </form>
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
                            className="submit-button write-btn1"
                            type="submit"
                        >수정하기</Button>
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default ReferenceEdit
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