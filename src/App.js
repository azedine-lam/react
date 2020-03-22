import React from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route } from 'react-router-dom';
import ProductList from './components/product/ProductList';
import Cart from './components/cart/Cart';
import Default from './components/product/Default';
import ProductDetails from './components/product/ProductDetails';
import Modal from './components/Modal';
import NavBar from './components/NavBar';


function App() {
  return (
      <React.Fragment>
        <NavBar/>
        <Switch>
        <Route exact path="/" component ={ProductList}/>
        <Route path="/details" component ={ProductDetails}/>
        <Route path="/cart" component ={Cart}/>
          <Route  component ={Default}/>
        </Switch>
        <Modal></Modal>
      </React.Fragment>
  );
}

export default App;
