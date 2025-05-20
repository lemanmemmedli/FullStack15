import React from 'react'
import { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'
import Button from 'react-bootstrap/esm/Button'
import Table from 'react-bootstrap/esm/Table'
import { FaTrash } from 'react-icons/fa'
import { Helmet } from 'react-helmet'

function Basket() {


    let { basket, setBasket } = useContext(BasketContext)


    function handleincrease(product) {
        let finded = basket.find(x => x._id == product._id)
        finded.count++
        setBasket([...basket])
    }

    function handledecrease(product) {
        let finded = basket.find(x => x._id == product._id)
        if (finded.count == 1) {
            let deleted = basket.filter(x => x._id !== product._id)
            setBasket(deleted)
        } else {
            finded.count--
            setBasket([...basket])

        }


    }
    function handledelete(product) {
        let deleted = basket.filter(x => x._id !== product._id)
        setBasket(deleted)

    }

    function calctotalprice() {
        let totalprice=basket.reduce((sum,item)=>sum + ( item.count * item.price),0)
        return totalprice
    }
    return (
        <div style={{ height: '100vh' }}>

         <Helmet>
                <meta charSet="utf-8" />
                <title>BASKET</title>      
            </Helmet>
            {
                basket.length > 0 ? (
                    <>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#ID</th>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Price</th>
                                    <th>Total Price</th>
                                    <th>Increase</th>
                                    <th>Count</th>
                                    <th>Decrease</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    basket.map(product => (
                                        <tr>
                                            <td>{product._id}</td>
                                            <td><img style={{ width: '150px' }} src={product.image} alt="" /></td>
                                            <td>{product.title}</td>
                                            <td>{product.price}$</td>
                                            <td>{product.price * product.count}$</td>
                                            <td><Button variant='success' onClick={() => handleincrease(product)}>+</Button></td>
                                            <td>{product.count}</td>
                                            <td><Button variant='danger' onClick={() => handledecrease(product)}>-</Button></td>
                                            <td><Button variant='danger' onClick={() => handledelete(product)}><FaTrash /></Button></td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </Table>
                        
                        <span><b>Total Price: {calctotalprice()}$</b></span>
                        </>
                ) : (<h1 style={{marginTop:'100px', textAlign:'center'}}>Your Basket is currently empty</h1>)
            }
        </div>
    )
}

export default Basket