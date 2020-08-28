import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/actions/productActions';


export default function ProductCardDeck() {



    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)

    useEffect(()=> {
        dispatch(getProducts())
    },[dispatch])

    return (
        <div className="m-5 row row-cols-1 row-cols-md-4">
            {                
                products.map(product => {
                return <ProductCard key={product._id} product={product}/>
                    
                })           
            }
          
        </div>
    

    )
}


