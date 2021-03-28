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
                                    <button onClick={this.login}>Register</button>
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
                    
                {/* <h1>Login</h1>
                <p><input type="email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/></p>
                <p><input type="text" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}} /></p>
                <p><button onClick={this.login}>Register</button></p> */}
            </div>
        )
    }
}
export default Login