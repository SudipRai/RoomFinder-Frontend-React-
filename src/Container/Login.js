import { Component } from "react"
import axios from 'axios';
import '../custom.css'
import validator from 'validator'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class Login extends Component{
   
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            hidden:true, 
            fullnameError:"",
            passwordError:"",  
           

        }
    this.toggleShow=this.toggleShow.bind(this)   
    }
    inputHandler =(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    toggleShow(){
        this.setState({
            hidden: !this.state.hidden
        })
    }
  //Login
    login=(e)=>{
        e.preventDefault();
        if(this.validate()){
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
            toast.error("Invalid Credentials",{autoClose:3000})
            console.log(err.response)
        })
    }
}

    validate=()=>{
        let fullnameError=""
        let passwordError=""
        if(!this.state.email){
          fullnameError="Field is empty"
        }
  
        if(!this.state.password){
          passwordError="Field is empty"
        }
        if(this.state.email){
        if (validator.isEmail(this.state.email)) {
            fullnameError=""
          } else {
            fullnameError="Enter valid Email!"
          }
        }
  
        if(fullnameError || passwordError){
          this.setState({fullnameError,passwordError})
          return false;
        }
        return true;
  
      }
     

    render(){
        return(
//Login page design
<div className="container body">
<div className="row rowlogin" >
    <div className="col-md-6 side-logo">
        <div className="logo-img">
            <img src="../roomicon1.png"></img>
        </div>   
    </div>
    <div className="col-md-6 side-logo1">
        <img className="small-logo" src="../roomicon1.png"></img>
    <form className="loginform">
            <div class="form-group log">
                <input type="text" required autoComplete="off" className="form-control logintext"  onChange={this.inputHandler} placeholder="Email" name="email" autoFocus/>
                <div style={{fontSize:12, color:"red"}}>{this.state.fullnameError}</div>
                </div>
            <hr class="hr-2"></hr>
                <div class="form-group log">
                <input type={this.state.hidden ? "password":"text"} autoComplete="off" className="form-control logintext" id="myInput" onChange={this.inputHandler} placeholder="Password" name="password" required/>   
                <div style={{fontSize:12, color:"red"}}>{this.state.passwordError}</div>
            </div>
            <hr className="hr-2"></hr>
            <div className="check">
                <input type="checkbox"  onClick={this.toggleShow}/>
                <p>Show Password</p>
            </div>
            <button type="submit" onClick={this.login} className="btnlogin">Login</button>
            <p className="forgot-pass" onClick={this.forgotpass}>Forgot Password?</p>
        </form>
         
         
    </div>
</div>
</div> 
        )
    }
}
export default Login