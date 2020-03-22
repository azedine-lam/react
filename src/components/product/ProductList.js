import React, { Component } from 'react';

import { ProductConsumer } from '../../ProductProvider';
import Product from './Product';
import Title from '../Title';


class ProductList extends Component {
    render() {
        return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                <Title  name="our" title ="product"/>
                    <div className="row">
                        <ProductConsumer>
                        {(value) => {
                               return value.products.map(p =>{
                                   return <Product key ={p.id} product = {p}/>
                               })
                                
                            }
                        }
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        </React.Fragment>
        );
    }
}

export default ProductList;