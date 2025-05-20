import React from 'react'
import '../Products/Products.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';
import { BasketContext } from '../../context/BasketContext';
import { useEffect } from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FaHeart, FaInfoCircle, FaShoppingBasket } from 'react-icons/fa';

function Products() {
    let [products, setProducts] = useState([])
    let [orginal, setOrginal] = useState([])
    let { favorites, setFavorites } = useContext(FavoriteContext)
    let { basket, setBasket } = useContext(BasketContext)



    useEffect(() => {
        getallproducts()
    }, [])

    async function getallproducts() {
        let products = await axios.get("http://localhost:3000/fullstack15")
        setProducts(products.data)
        setOrginal(products.data)

    }

       function handlesearchtitle(e) {
            let search=e.target.value.toLowerCase()
            let searchtitle=orginal.filter((products)=>products.title.trim().toLowerCase().includes(search))
            setProducts(searchtitle)
        }

        function handlesortprice(e) {
            let sort=e.target.value
            let sortprice=([...orginal])

            switch (sort) {
                case "A-Z":
                    sortprice=[...orginal].sort((a,b)=> a.title.localeCompare(b.title))
                    break;
                    case "Z-A":
                    sortprice=[...orginal].sort((a,b)=> b.title.localeCompare(a.title))
                    break;
                    case "Higher":
                    sortprice=[...orginal].sort((a,b)=> a.price -b.price)
                    break;
                    case "Lower":
                    sortprice=[...orginal].sort((a,b)=> b.price -a.price)
                    break;
            
                default:"All"
                    break;
            }
            setProducts(sortprice)
        }

        function handleaddfavorite(favitem) {
            let finded=favorites.find(x=>x._id == favitem._id)
            console.log(finded)
            if(finded){
                alert('This product is already in your Wishlist')
            }else{
                
                setFavorites([...favorites,favitem])
            }
            
        }

        function handleaddbasket(basketitem) {
            let finded=basket.find(x=>x._id == basketitem._id)
            if(finded){
                finded.count++
                setBasket([...basket])
            }else{
                setBasket([...basket,{...basketitem,count:1}])
            }
            
        }
    return (
        <div className='products-main'>
            <div className="products-text">
                <h2>Featured Products</h2>
                <p style={{ color: 'gray' }}>We have your occasion covered</p>
            </div>

            <form action="" className='search-form'> 
                <input type="text" placeholder='Search by title'  onChange={(e)=>handlesearchtitle(e)}/>
                <select name="" id="" onChange={(e)=>handlesortprice(e)}>
                    <option value="All">All</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="Higher">Higher</option>
                    <option value="Lower">Lower</option>
                    
                </select>
            </form>

            <Container>
                <Row>
                    {
                        products.map(product => (
                            <Col className='my-3 product-col'>
                                <div className="product-card">
                                    <img style={{ width: "250px" }} src={product.image} alt="" />
                                    <div className="product-info">
                                        <h5>{product.title}</h5>
                                        <p><i>{product.price}$</i></p>
                                    </div>
                                    <div className="product-btns">
                                        <Link to={`detail/${product._id}`}><Button><FaInfoCircle /></Button></Link>
                                        <Button className='mx-2' variant='danger'  onClick={()=>handleaddfavorite(product)}><FaHeart /></Button>
                                        <Button variant='warning'  onClick={()=>handleaddbasket(product)}><FaShoppingBasket /></Button>
                                    </div>
                                </div>

                            </Col>
                        ))

                    }

                </Row>
            </Container>
        </div>
    )
}

export default Products