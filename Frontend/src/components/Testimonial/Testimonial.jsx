import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Testimonial/Testimonial.css'
function Testimonial() {
    return (
        <div>



            <Container className='testi-contain'>
                <Row>
                    <Col className='test-col '>
                        <div className="testi-img"><img src="https://rivon-demo.myshopify.com/cdn/shop/files/avator-test-2.png?v=1733907245&width=120" alt="" /></div>
                        <div className="testi-info">
                            <p>Smart Home Assistant</p>
                            <p>“Thanks guys, keep up the good work! Great job, I will
                                definitely be ordering again! Thanks guys, keep up the good work!
                                Garden was worth a fortune to my company.”</p>
                            <p><b>Michael L.</b></p>
                            <p style={{color:'gray'}}>London, UK</p>
                        </div>
                    </Col>

                     <Col className='test-col  discard'>
                        <div className="testi-img"><img src="https://rivon-demo.myshopify.com/cdn/shop/files/avator-test-4.png?v=1733907264&width=120" alt="" /></div>
                        <div className="testi-info">
                            <p>Smart Home Assistant</p>
                            <p>“Thanks guys, keep up the good work! Great job, I will
                                definitely be ordering again! Thanks guys, keep up the good work!
                                Garden was worth a fortune to my company.”</p>
                            <p><b>Michael L.</b></p>
                            <p style={{color:'gray'}}>London, UK</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonial