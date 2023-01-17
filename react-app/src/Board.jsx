import React from 'react'
import { Button, Container } from 'react-bootstrap';

const Board = () => {

    return (
        <Container>
            <div>
                <h1>자료실</h1>
                <div>
                    <h2>제목</h2>
                </div>
                <div>
                    내용
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