import React from 'react'
import '../Cards/Cards.css'
import { FaCrown, FaGift, FaTruck } from 'react-icons/fa'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlinePayment } from "react-icons/md";

function Cards() {
  return (
    <div>
    <Container>
      <Row>
        <Col className='cards-col'>
        <div className="card-icon"><FaTruck /></div>
        <div className="card-infos">
            <h5>FREE SHIPPING</h5>
        <p style={{color:'gray'}}>On all orders over $75.00</p>
        </div>
        </Col>
          <Col className='cards-col'>
        <div className="card-icon"><FaGift /></div>
        <div className="card-infos">
            <h5>MONEY BACK</h5>
        <p style={{color:'gray'}}>30 days money back guarantee</p>
        </div>
        </Col>
          <Col className='cards-col'>
        <div className="card-icon"><FaCrown /></div>
        <div className="card-infos">
            <h5>FRIENDLY SUPPORT</h5>
        <p style={{color:'gray'}}>Team always ready for you</p>
        </div>
        </Col>
          <Col className='cards-col'>
        <div className="card-icon"><MdOutlinePayment /></div>
        <div className="card-infos">
            <h5>FREE SHIPPING</h5>
        <p style={{color:'gray'}}>On all orders over $75.00</p>
        </div>
        </Col>

      </Row>
    </Container>

        
    </div>
  )
}

export default Cards