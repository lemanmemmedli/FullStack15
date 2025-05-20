import React from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import '../Detail/detail.css'
import { Helmet } from 'react-helmet';
function Detail() {

    let [product, setProduct] = useState([])
    let { id } = useParams()

    useEffect(() => {
        getallproducts()
    }, [])

    async function getallproducts() {
        let products = await axios.get(`http://localhost:3000/fullstack15/${id}`)
        setProduct(products.data)

    }
    return (
        <div style={{ height: '100vh' }}>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Detail</title>      
            </Helmet>
            <Card className='detail-card' style={{ width: '24rem' }}>
                <Card.Img variant="top" style={{ width: "380px",height:'400px' }} src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        {product.price}$
                    </Card.Text>
                    <Link to='/'><Button>Go Home</Button></Link>
                </Card.Body>
            </Card>


        </div>
    )
}

export default Detail