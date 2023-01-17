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
            {/* bootstrap 형식으로 바꿔라 씹새야 */}
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