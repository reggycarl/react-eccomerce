import React, { Component } from "react";

export default class Product extends Component{
   state ={id:this.props.product.id,productName:this.props.product.productName
        ,price:this.props.product.price,quantity:this.props.product.quantity,product:this.props.product}
    render() {
        return (
            // receiving info from parent class to child class
        <div className="col-lg-6">
            <div className="card m-2">
                <div className="card-body">
                   
                    <div className="text-muted">
                
                    Product #{this.props.id}</div>
                    <h5 className="p-2 border-top">{this.props.productName}</h5>
                    <div className="">${this.props.price}</div>

                   
                </div>

               <div className="card-footer">
                  <div className="float-left">
                    <span className="badge">
                        {this.props.quantity}
                    </span>
                    <div className="btn-group">
                        <button className="btn btn-outline-success"
                        onClick={()=>{this.props.onincrement(this.state.product,20)}}>
                            + 
                        </button>
                        <button className="btn btn-outline-success"
                        onClick={()=>{this.props.ondecrement(this.state.product,0)}}>
                            -
                        </button>
                    </div>
                  </div>
                  <div className="float-right">
                   {this.props.children}
                   </div>
                </div> 

            
            </div>
        </div>
        )
    }
} 