import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'

class NavBar extends Component {
    render() {
        return (
           <div className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5">
            {/* 
            https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}

            <Link to ="/">
                <img src = {logo} alt ="store" className ="navbar-brand"/>
            </Link>
           <ul className="navbar-nav align-items-center">
            <li className ="nav-item ml-5">
                <Link to ="/" className ="nav-link">
                    Produit
                </Link>
            </li>
           </ul>

           <Link to ="/cart" className ="ml-auto">
             <button className ="btn btn-success  ml-5">
                <div className="fas fa-cart-plus"/> cart
             </button>
           </Link>
           </div>
        );
    }
}

export default NavBar;