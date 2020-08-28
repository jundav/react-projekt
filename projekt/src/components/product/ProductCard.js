import React from 'react'
import { Link } from 'react-router-dom'


export default function ProductCard({product}) {
    return (
    <div>
    
        <div className="col mb-4 align-items-center">

            <div className="card">

                <div className="view overlay">   
                    <Link to={`/products/${product._id}`}>                 
                        <img className="card-img-top imgstyle" src={product.image} alt="product"/>                    
                        <div className="mask rgba-white-slight"></div>                  
                    </Link>
                </div>
              
                <div className="card-body text-center">                        
                    <h4 className="card-title">{product.name}</h4>                        
                    <p className="card-text">{product.short}</p>      
                    <p> {product.price} SEK</p>      
                    <Link to={`/products/${product._id}`}><button onClick={product.id} type="button" className="btn btn-dark btn-lg">Read more</button></Link>
                </div>

            </div>            
            
        </div>
    </div>
  
  
       
    )
}
