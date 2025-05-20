import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaHeartBroken } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
function Wishlist() {
    let {favorites,setFavorites}=useContext(FavoriteContext)


    function handledelete(product) {

        let deleted=favorites.filter(x=>x._id !== product._id)
        setFavorites(deleted)
        
    }
    return (
        <div style={{ height: '100vh' }}>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlist</title>      
            </Helmet>
            <Container>
                <Row>
                    {
                        favorites.map(product => (
                            <Col>
                                <Card className='detail-card' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" style={{ width: "250px" }} src={product.image} />
                                    <Card.Body>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            {product.price}$
                                        </Card.Text>
                                        <Button variant='danger' onClick={()=>handledelete(product)}><FaHeartBroken /></Button>
                                    </Card.Body>
                                </Card>

                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </div>
    )
}

export default Wishlist