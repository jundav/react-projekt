  
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/actions/cartActions';
import './Cartitem.css'

export default function CartItem({item}) {
    const dispatch = useDispatch()

    const add = (e) => {
        e.stopPropagation();
        dispatch(addToCart(item))
    }
    const remove = (e) => {
        e.stopPropagation();
        dispatch(removeFromCart(item._id))
    }

    return (
        <div className="cart-item">
            <div className="p-2 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <div><strong>{item.name}</strong></div>
                        <img className="img-fluid img-width" src={item.image} alt=""/>
                        <div className="text-muted">{item.quantity} x {item.price} :-</div>
                </div>                
                
                <div>
                    <button className="btn btn-sm white-text btn-dark" onClick={add}>+</button>
                    <button className="btn btn-sm white-text btn-dark" onClick={remove}>-</button>
                </div>
            </div>
            
        </div>
    )
}