import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../../store/actions/cartActions';

export default function ShoppingCart() {
    
    const shoppingcart = useSelector(state => state.cart.shoppingcart)
    const totalCartAmount = useSelector(state => state.cart.totalCartAmount)
    const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)
    const dispatch = useDispatch()

    
    const clear = (event) => {
        event.stopPropagation()
        dispatch(clearCart())
    }

    return (
        <div className="p-4">
            <div className="mb-2">
                <h4 className="m-3">Shopping Cart</h4>
                {
                shoppingcart.map(product => {
                    return (<CartItem key={product._id} item={product} />)
                })
                }
            </div>            
            
            {shoppingcart.length > 0 ?
            <div>
                <div>
                   <button className="btn btn-danger" onClick={clear}><i className="far fa-trash-alt"></i></button>
                </div>
                <p>Total Amount: {totalCartAmount} :-</p>
                <p>Total Quantity: {totalCartQuantity}</p>
            </div>
           
            : <div className="mb-3">Din kundvagn är tom</div>}
            
            <button className="btn btn-light">CHECKOUT</button>
        </div>
    )
}












