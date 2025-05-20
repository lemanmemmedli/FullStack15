import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Rivon/rivon.css'

function Rivon() {
  return (
    <div className='rivon-main'>


        <Container>
      <Row>
        <Col>
        <img className='rivon-img' src="https://rivon-demo.myshopify.com/cdn/shop/files/fashen-banner-11.png?v=1733907052" alt="" />
        </Col>

         <Col className='rivon-right'>
        <h2>Shop the look</h2>
        <p style={{color:'gray'}}>Here is your chance to upgrade your wardrobe with a variation</p>
        <p style={{color:'gray'}}>of styles and fits that are both.</p>
        <button className='rivon-btn'>DISCOVER NOW</button>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Rivon