import React from 'react'
import './Join.css'
import { Container } from 'react-bootstrap'

const Join = () => {
  return (
    <Container className='join'>
      <h1 className="joinTxt">join us</h1>
      <form className='joinForm'>
        <input className='joinInput' type='text' placeholder="Your Email" />
        <button className="joinBtn">Subscribe</button>
      </form>
    </Container>
  )
}

export default Join