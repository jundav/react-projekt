import actiontypes from '../actiontypes'
import axios from 'axios'



export const getProducts = () => {
    return dispatch => {
        axios.get('http://localhost:9998/api/products/import/all')
        .then(res => {
            if(res.status === 200)               
               dispatch(setProducts(res.data))               
        })
        .catch(error => console.log())        
    }    
}

export const getProduct = (id) => {
    return dispatch => {
        axios.get('http://localhost:9998/api/products/' + id)
        .then(res => {
            if(res.status === 200)               
               dispatch(setProduct(res.data))
        })        
    }   
}

export const setProducts = (products) => {
    console.log(products)
    return {        
        type: actiontypes().products.getProducts,
        payload: products
        
    }
}

export const setProduct = (product) => {
    return {
        type: actiontypes().products.getProduct,
        payload: product
    }
}