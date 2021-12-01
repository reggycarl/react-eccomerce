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
        {this.state.products.map((prod) =>{
            return <Product key ={prod.id}id={prod.id} productName={prod.productName} 
            price={prod.price} quantity={prod.quantity} product={prod}
            onincrement={this.handleincrement} ondecrement={this.handledecrement}>
               <button className="btn btn-primary">Buy Now</button>
            </Product>
        })}
        </div>
    </div>
}
// getting all products then updating the state with a js method
handleincrement =(product,maxValue) =>{
    let allPorduct =[...this.state.products]
    let index= allPorduct.indexOf(product)
    
//updating the state of the component by using setstate 
if(allPorduct[index].quantity < maxValue){
    allPorduct[index].quantity++
    this.setState({products:allPorduct})
}
   
    
   
    console.log(allPorduct[index])
    }
// getting all products then updating the state with a js method

handledecrement =(product,minValue) =>{
    
    let allPorduct =[...this.state.products]
    let index= allPorduct.indexOf(product)
 //updating the state of the component by using setstate
 if(allPorduct[index].quantity > minValue){
    allPorduct[index].quantity--
    this.setState({products: allPorduct})
 }
    
    
    console.log("handleIncrement",product,index)
    
    }
}

