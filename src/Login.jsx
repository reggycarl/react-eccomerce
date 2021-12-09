import React, { Component }from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email:"", password:"",message:""}
    }
    render() {
         return (
             <div className="col-lg-9">
                 <h4 className="m-1p-2 border-bottom">
                 login
                 </h4>
                 <div className="form-group form-row">
                    <label className="col-lg-4">
                        Email
                    </label>
                    <input type="email" className="form-control" 
                    value={this.state.email}
                    onChange ={(e)=>{this.setState({email: e.target.value})
                       }}
                    >

                    </input>
                    </div>
                    <div className="form-group form-row">
                    <label className="col-lg-4">password</label>
                    <input type="password" className="form-control" 
                    value={this.state.password}
                    onChange ={(e)=>{this.setState({password: e.target.value})
                    }}>

                    </input>
                    </div>
                    <div className="text-right">
                    {this.state.message}
                        <button className="btn btn-danger m1" onClick={this.onLoginClick}>
                            Login
                        </button>
                        
                    </div>
                 </div>
             
         )
    }
    onLoginClick=async(e)=>{
        e.preventDefault();
        var response = await fetch(`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
        {method:"GET"})
        var promise =await response.json();
        console.log(promise)
        if(promise.length > 0)
       
        { 
            this.setState({message: <span className="text-success">Login Succesful</span>})
        }
        else
        {
            this.setState({message: <span className="text-danger">Login failed please try agaain </span>})

            }
           
    
        
    }
    }
  