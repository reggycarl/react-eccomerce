import React,{Component} from "react";
import Product from "./Product";

export default class ShoppingCart extends Component{
   constructor(props) {
       console.log("inside of constructor")
       super(props);
   this.state = {
        products:[
           
        ]
    }
   }
    
render(){
    console.log("inside render")

    // passing information from parent to child class using props 
    return <div className="container-fluid">
        <h4>
            shopping cart
        </h4>
        <div className="row">
        {this.state.products.map((prod) =>{
            return <Product key ={prod.id}id={prod.id} productName={prod.productName} 
            price={prod.price} quantity={prod.quantity} product={prod} photo={prod.photo}
            onincrement={this.handleincrement} ondecrement={this.handledecrement} 
            onDelete ={this.handledelete}>
               <button className="btn btn-primary">Buy Now</button>
            </Product>
        })}
        </div>
    </div>
}
componentDidUpdate(prevProps,prevState) { 
    // accepts http request
    console.log("inside of component did update"
    ,prevState,
    this.props,this.state ,prevState)

}
componentDidMount= async()=>{
    // accepts http request
    //console.log("inside of component did mount")
 var response =await fetch("http://localhost:5000/products",{method: "GET"})
  var prods = await response.json()
  this.setState({products: prods})
 console.log(prods)
}
componentWillUnmount(){
    console.log("inside of component did will unmount")

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
handledelete =(product) =>{
    let allPorduct =[...this.state.products]
    let index= allPorduct.indexOf(product)
    if(window.confirm("Are you sure you want to delete")){
        allPorduct.splice(index, 1)
        this.setState({products: allPorduct})


    }
    // delete product using index
     //updating the state of the component by using setstate


}

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

