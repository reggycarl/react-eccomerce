import { Component } from "react";

export default class CustomersList extends Component{
    state ={
        pageTitile:"Customer",
        customerCount:5,
        customers:[
            {
                id:1 ,name:"scott",phone:" 123-456",address:{city:"accra",town:"weija"},photo:"https://picsum.photos/id/0/60 "
            },
            {
                id:2 ,name:"jones",phone:" 123-456",address:{city:"new jersey"},photo:"https://picsum.photos/id/1014/60 "
            },
            {
                id:3 ,name:"john",phone:" 123-456",address:{city:"seoul"},photo:"https://picsum.photos/id/1015/60 "
            },
            {
                id:4 ,name:"allen",phone:" 123-456",address:{city:"illinois"},photo:"https://picsum.photos/id/1013/60 "
            },
            {
                id:5 ,name:"allen Prost",address:{city:"illinois"},photo:"https://picsum.photos/id/1012/60 "
            },
            {
                id:6 ,name:"Aryton Senna",address:{city:"illinois"},photo:"https://picsum.photos/id/1011/60 "
            }
        ]
    };
    // creating a method to style page based on name character
    CustomerNameStyle =(custName) =>{
        if(custName.startsWith("s")) return "green-highlight"
        else if(custName.startsWith("a")) return "red-highlight"
        else{}
    }

    render()
    {
        return<div>
            <h1>{this.state.pageTitile}
            <span className="badge badge-secondary m-2">{this.state.customerCount}</span>
           <button className="btn btn-info" onClick={this.onRefreshClick} >Refresh</button>
            </h1>
            <table className="table">
            <thead>
            <tr>
            <th>id</th>
            <th>Photo</th>
            <th>name</th>
            <th>number</th>
            <th>Address</th>
            </tr>
            </thead>
            <tbody>
                {
                    //.map is used to map customers to each value
                    this.state.customers.map((cust,index)=>{
                        return(
                        <tr key ={cust.id}>
                            <td>
                            {cust.id} 
                            </td>
                            <td>
                               <img src={cust.photo} alt = " Customer"/>
                               <div>
                                   <button className="btn btn-success" onClick={()=>{
                                       this.onChangePictur(cust,index)
                                   }}>
                                       CHange picture
                                   </button>
                               </div>
                            </td>    
                            <td className={this.CustomerNameStyle(cust.name)}>
                              {cust.name}  
                            </td> 
                            <td>
                                {this.getPhoneRendered(cust.phone)}
                            </td> 
                            <td>
                            {cust.address.city}
                             </td> 
            
                         </tr>
                        )
                    })
                }
               
            </tbody>
            </table>
        </div>
    }
    onChangePictur =(cust,index)=>{
        console.log(cust)
        var custArr = this.state.customers
        custArr[index].photo ="https://picsum.photos/id/102/60 "

        this.setState({customers:custArr})
    }
    // adding event when refresh button is clicked
    onRefreshClick =() =>
    {
        this.setState({
            customerCount:7
        })
        console.log("refresh button clicked")
    }
    // creating a method to render conditional statement
    getPhoneRendered =(phone) => {
        { 
        if(phone)return phone
            else
            // return add to help display in front end 
           return (<div className="bg-warning p-1 ">No phoneNumber </div>)
            }
    }
   
}