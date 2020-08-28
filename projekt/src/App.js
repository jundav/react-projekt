import React from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';
import ProductCardDeck from './components/product/ProductCardDeck';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Accessoarer from './views/Accessoarer';
import Kläder from './views/Kläder';
import Skor from './views/Skor';
import ProductView from './views/ProductView';

function App() {

  return ( 

  <BrowserRouter>
    <Navbar />   

       <Switch>
         <Route path="/" exact component={ProductCardDeck}/>
         <Route path="/products/:id" exact component={ProductView}/>
         <Route path="/accessoarer" exact component={Accessoarer}/>
         <Route path="/clothes" exact component={Kläder}/>
         <Route path="/shoes" exact component={Skor} /> 
       </Switch>       
    
  </BrowserRouter>     
  
    
  );
}

export default App;






    
  
   