import React from 'react'
import { Container } from 'react-bootstrap'

const Company = () => {
  return (
    <Container className='pt-5 mt-5' style={{
      minHeight: `calc(100vh - 120px)`,
    }}>

      <div className='m-lg-5 text-center'>
        <h1>회사 소개</h1>
      </div>
    </Container>
  )
}

export default Company