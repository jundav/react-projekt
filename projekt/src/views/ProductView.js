import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../store/actions/productActions'
import { addToCart } from '../store/actions/cartActions'


export default function ProductDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.products.product )

    const add = () => {
      dispatch(addToCart(product))
    }

    useEffect(() => {
        dispatch(getProduct(id))
    },[dispatch,id])


    return(   
    
<div className="container my-5 py-5 z-depth-1">

  <section className="text-center">
      <div className="row">
        <div className="col-lg-6">
            <div className="carousel-inner text-center text-md-left" role="listbox">
              <div className="carousel-item active">
                <img src={product.image} alt="Product Detail" className="img-fluid imgStyleDesc" />
              </div>
            </div>
        </div>
        <div className="col-lg-5 text-center text-md-left mt-5">
          <h2 className="h1-responsive text-center text-md-left product-name font-weight-bold mb-4 ml-xl-0 ml-4">
            <strong>{product.name}</strong>
          </h2>
          <h4 className="h4-responsive text-center text-md-left mb-4 ml-xl-0 ml-4">{product.short}</h4>
          <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
            <span className="font-weight-bold dark-grey-text">
              <strong>{product.price} :-</strong>
            </span>
          </h3>
          <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
            <div className="card">
              <div className="card-header">
                  <h5 className="mb-0">Description</h5>
              </div>
              <div>
              <div className="card-body">{product.description}</div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
            <button type="button" className="btn btn-dark blue-grey lighten-1 btn-lg" onClick={add} >Purchase</button>
            </div>
          </div>
        </div>
      </div>
  </section>
</div>
    )

}