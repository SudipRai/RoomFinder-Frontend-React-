import { Component } from "react"
import axios from 'axios';

class Register extends Component{
    state={
        fullname:"",
        phone:"",
        email:"",
        password:""
    }
    register=()=>{
        const data={
            fullname:this.state.fullname,
            phone:this.state.phone,
            email:this.state.email,
            password:this.state.password
            
        }
        axios.post("http://localhost:90/register",data).then().catch(
           
        )
    }
    render(){
        return(
            <div>
            <p><input type="text" value={this.state.fullname} onChange={(event)=>{this.setState({fullname:event.target.value})}}/></p>
            <p><input type="text" value={this.state.phone} onChange={(event)=>{this.setState({phone:event.target.value})}} /></p>
            <p><input type="email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}} /></p>
            <p><input type="text" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}} /></p>
            <p><button onClick={this.register}>Register</button></p>
            </div>
           
                  )
    }
}
export default Register


  