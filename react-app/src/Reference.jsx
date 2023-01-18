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
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState()

    const onChangeName = (e) => {
        setName({
            ...name,
            [e.target.name]: e.target.value
        });
    }

    const onChangeTitle = (e) => {
        setTitle({
            ...title,
            [e.target.name]: e.target.value
        });
    }

    const onChangeContent = (e) => {
        setContent({
            ...content,
            [e.target.name]: e.target.value
        });
    }

    const [viewContent, setViewContent] = useState([]);

    useEffect(()=>{
        Axios.get('http://localhost:8080/list').then((response)=>{
          setViewContent(response.data);
        })
      },[viewContent])
    //이것이주석이야sdasdasdasdasd

    function onSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", et.target.files[0]);
        formData.append("name", name);
        formData.append("title", title);
        formData.append("content", content);

        Axios({
            headers: {
              "Content-Type": "multipart/form-data",
              "Access-Control-Allow-Origin": "*",
            },
            url: "ttp://localhost:8080/add", // 파일 업로드 요청 URL
            method: "POST",
            data: formData,
          });
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
            <form onSubmit={onSubmit} enctype="multipart/form-data" >
                <div>
                    <div class="form-group">
                        <label for="exampleInputContent1" class="form-label mt-4">제목</label>
                        <input class="form-control" type="text"
                            placeholder="제목을 입력하세요."
                            onChange={onChangeTitle}
                            name='title'
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputWriter1" class="form-label mt-4">이름</label>
                        <input class="form-control" type="text"
                            placeholder="이름을 입력하세요."
                            onChange={onChangeName}
                            name='name'
                        />
                    </div>
                    <div>
                        <input class="form-control" type="file" name="file" />
                    </div>
                    <div class="form-group">

                        <label for="exampleInputContent1" class="form-label mt-4">내용</label>
                        <input class="form-control" type="text"
                            placeholder="내용을 입력하세요."
                            onChange={onChangeContent}
                            name='content'
                        />
                    </div>
                </div>
                <Button
                    className="submit-button"
                    type="submit"
                >입력</Button>
            </form>
        </Container>
    )
}

export default Reference