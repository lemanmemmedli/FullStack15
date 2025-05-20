import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';
import { FaTrash } from 'react-icons/fa';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import '../Add/add.css'
import { useEffect } from 'react';
import axios from 'axios'
import {Helmet} from "react-helmet";
function Add() {
    let [products, setProducts] = useState([])

    useEffect(() => {
        getallproducts()
    }, [])

    async function getallproducts() {
        let products = await axios.get("http://localhost:3000/fullstack15")
        setProducts(products.data)


    }

     const SignupSchema = Yup.object().shape({
   image: Yup.string()
   .url('please imge!')
     .min(2, 'Too Short!')
     .max(250, 'Too Long!')
     .required('Required'),
   title: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
 price: Yup.number()
     .min(2, 'Too Short!')
     .max(5000, 'Too Long!')
     .required('Required'),
 });

  const formik = useFormik({
     initialValues: {
       image: '',
       title: '',
       price: '',
     },
     onSubmit: async(values) => {
       await axios.post("http://localhost:3000/fullstack15",values)
       setProducts([...products,values])
     },
     validationSchema:SignupSchema
   });

 async function handledelete(_id) {
    await axios.delete(`http://localhost:3000/fullstack15/${_id}`)
    let deleted=products.filter(x=>x._id !== _id)
    setProducts(deleted)
    
}
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ADD</title>      
            </Helmet>

 <form onSubmit={formik.handleSubmit} className='add-form'>
       <label htmlFor="image">Image</label>
       <input
         id="image"
         name="image"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.image}
       />
       {formik.errors.image ? <div>{formik.errors.image}</div> : null}
 
       <label htmlFor="title">Title</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.title}
       />
       {formik.errors.title ? <div>{formik.errors.title}</div> : null}
 
       <label htmlFor="price">Price </label>
       <input
         id="price"
         name="price"
         type="number"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.price}
       />
       {formik.errors.price ? <div>{formik.errors.price}</div> : null}
 
       <button type="submit">Submit</button>
     </form>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr>
                                <td>{product._id}</td>
                                <td><img style={{width:'150px'}} src={product.image} alt="" /></td>
                                <td>{product.title}</td>
                                <td>{product.price}$</td>
                                <td><Button variant='danger'  onClick={()=>handledelete(product._id)}><FaTrash /></Button></td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default Add