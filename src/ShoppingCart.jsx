import React,{Component} from "react";
import Product from "./Product";

export default class ShoppingCart extends Component{
    state = {
        products:[
            {
                id:1,productName:"iphone",price:8900,quantity:10
            },
            {
                id:2,productName:"Sony Camera",price:4999,quantity:10
            },
            {
                id:3,productName:"ipad pro",price:1999,quantity:10
            },
            {
                id:4,productName:"xbox",price:599,quantity:10
            },
            {
                id:5,productName:"samsung",price:6000,quantity:10
            },
            {
                id:6,productName:"samsung curve",price:6000,quantity:10
            }
        ]
    }
render(){
    // passing information from parent to child class using props 
    return <div className="container-fluid">
        <h4>
            shopping cart
        </h4>
        <div className="row">
        {this.state.products.map(product =>{
            return <Product key ={product.id}id={product.id} productName={product.productName} price={product.price} quantity={product.quantity} onincrement={this.handleincrement} ondecrement={this.handledecrement}>
               <button className="btn btn-primary">Buy Now</button>
            </Product>
        })}
        </div>
    </div>
}
handleincrement =() =>{
    console.log("handleIncrement")
    }

handledecrement =() =>{
    console.log("handledecrement")
    
    }
}

