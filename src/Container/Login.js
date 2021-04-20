import { Component } from "react"
import axios from 'axios';
import '../custom.css';
import {Route, Link} from 'react-router-dom';
import { useAlert } from 'react-alert'

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
  //Login
    login=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:90/login", this.state)
        .then((response)=>{
            console.log(response);
            //setting token and userid into localstorage
            localStorage.setItem('token',response.data.token)
            localStorage.setItem('userID',response.data.user)
            
            window.location.href = '/home'
            this.setState({
                chkLogin:true
            })  
        })        
        .catch((err)=>{
            alert("Invalid Credential")
            console.log(err.response)
        })
    }
    render(){
        return(
//Login page design
           <div>
               <div class="container">
                            <div class="form-container">
                            <div class="form-body">
                                <div class="header">
                                    <h2>Login</h2>
                                    <p>Dont have an account? <a href="#">Create your account</a></p>
                                </div>
                                <div class="form-group">
                                    <div class="input-group">
                                    <input type="email" placeholder="Email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/>
                                    </div>
                                    <div class="input-group">
                                    <input type="text" placeholder="Password" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}} />
                                    </div>
                                    <div class="input-group flex">
                                        <div class="remember">
                                            <input type="checkbox" name=""/><label for="checkbox">Remember me</label>
                                            </div>
                                        <div class="forgot"><a href="#">Forgot Password</a></div>
                                    </div>
                                    <div class="input-group right">
                                    <button onClick={this.login}>Login</button>
                            
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="form-image">
                                <div class="text">
                                    <h2>Welcome back</h2>
                                    <img src="roomicon1.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default Login