import { Component } from "react"
import axios from 'axios';
import '../custom.css';
import validator from 'validator'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class Register extends Component{
    state={
        fullname:"",
        phone:"",
        email:"",
        password:"",
        fullnameError:"",
        passwordError:"", 
        emailError:"",
        numberError:"", 
    }
    register=()=>{
        const data={
            fullname:this.state.fullname,
            phone:this.state.phone,
            email:this.state.email,
            password:this.state.password
            
        }
        if(this.validate()){
        axios.post("http://localhost:90/register",data)
        .then((response)=>{
            console.log(response);
            window.location.href = '/login'
        })   
         
        .catch((err)=>{
            toast.error("Invalid inputs",{autoClose:3000})
            console.log(err.response)
        })
    }
}
    validate=()=>{
        let fullnameError=""
        let passwordError=""
        let emailError=""
        let numberError=""
        if(!this.state.fullname){
          fullnameError="Field is empty"
        }
        if(!this.state.email){
            emailError="Field is empty"
          }

          if(!this.state.phone){
            numberError="Field is empty"
          }
  
        if(!this.state.password){
          passwordError="Field is empty"
        }
        if(this.state.email){
        if (validator.isEmail(this.state.email)) {
            emailError=""
          } else {
            emailError="Enter valid Email!"
          }
        }
  
        if(fullnameError || passwordError || emailError || numberError){
          this.setState({fullnameError,passwordError,emailError,numberError})
          return false;
        }
        return true;
  
      }
     
    render(){
        return(
            <div>
            <div class="container">
                         <div class="form-container">
                         <div class="form-body">
                             <div class="header">
                                 <h2>Register</h2>
                                 <p>Already Registered? <a href="/login">Login to your account</a></p>
                             </div>
                             <div class="form-group">
                                 <div class="input-group">
                                 <input type="text" placeholder="Fullname" value={this.state.fullname} onChange={(event)=>{this.setState({fullname:event.target.value})}}/>
                                 <div style={{fontSize:12, color:"red"}}>{this.state.fullnameError}</div>
                                 </div>
                                 <div class="input-group">
                                 <input type="text" placeholder="Phone Number" value={this.state.phone} onChange={(event)=>{this.setState({phone:event.target.value})}} />
                                 <div style={{fontSize:12, color:"red"}}>{this.state.numberError}</div>
                                 </div>
                                 <div class="input-group">
                                 <input type="email" placeholder="Email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}} />
                                 <div style={{fontSize:12, color:"red"}}>{this.state.emailError}</div>
                                 </div>
                                 <div class="input-group">
                                 <input type="text" placeholder="Password" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}} />
                                 <div style={{fontSize:12, color:"red"}}>{this.state.passwordError}</div>
                                 </div>
                            
                                 <div class="input-group right">
                                 <button onClick={this.register}>Register</button>
                                 </div>
                             </div>
                         </div>
                         <div class="form-image">
                             <div class="text">
                                 <h2>Welcome to........! Room Finder</h2>
                                 <img src="roomicon1.png"/>
                             </div>
                         </div>
                     </div>
                 </div>
            
            </div>
        )
    }
}
export default Register


