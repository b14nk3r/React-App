import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import Axios from 'axios';
import { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser'
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
        <Container>
           <div class="form-group">
                <h1>자료실</h1>
                <div>
                    
                        <div>
                            <h2>{viewContent.제목}</h2>
                            <div>
                                {ReactHtmlParser(viewContent.내용)}
                            </div>
                            <img></img>
                        </div>
                </div>
            </div>
            <div>
                <input type="text" placeholder="제목" />
                <textarea placeholder="내용"></textarea>
            </div>
            <Button>입력</Button>
        </Container>
    )
}


export default Board