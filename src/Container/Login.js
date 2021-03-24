import { Component } from "react"
import axios from 'axios';

class Login extends Component{
    state={
        email:"",
        password:""
    }
    changeHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        }
           
        )
    }
    login=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/login", this.state)
        .then((response)=>{
            console.log(response);
            localStorage.setItem('token',response.data.token)
            this.setState({
                chkLogin:true
            })
        })        
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <p><input type="email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/></p>
                <p><input type="text" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}} /></p>
                <p><button onClick={this.login}>Register</button></p>
            </div>
        )
    }
}
export default Login