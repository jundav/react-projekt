import actiontypes from "../actiontypes";
import Axios from "axios";

export const addToCart = (product) => {
    return {
        type: actiontypes().cart.add,
        product: product
    }
}

export const removeFromCart = (id) => {
    return {
        type: actiontypes().cart.remove,
        id: id
    }    
}

export const clearCart = (id) => {
    return {
        type: actiontypes().cart.clear,
    
    }  
}

export const checkoutCart = (cart) => {
    return dispatch => {
        if(cart.length > 0)
            Axios.post('http://localhost:9999/api/cart/checkout' + cart)
            .then(res => {
                if(res.status === 200)
                   dispatch(clearCart())
            })
    }
}