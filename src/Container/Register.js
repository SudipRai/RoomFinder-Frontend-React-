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
            <div class="container">
                         <div class="form-container">
                         <div class="form-body">
                             <div class="header">
                                 <h2>Register</h2>
                                 <p>Already Registered? <a href="#">Login to your account</a></p>
                             </div>
                             <div class="form-group">
                                 <div class="input-group">
                                 <input type="text" placeholder="Fullname" value={this.state.fullname} onChange={(event)=>{this.setState({fullname:event.target.value})}}/>
                                 </div>
                                 <div class="input-group">
                                 <input type="text" placeholder="Phone Number" value={this.state.phone} onChange={(event)=>{this.setState({phone:event.target.value})}} />
                                 </div>
                                 <div class="input-group">
                                 <input type="email" placeholder="Email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}} />
                                 </div>
                                 <div class="input-group">
                                 <input type="text" placeholder="Password" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}} />
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


     // <div>
            //     <p><input type="text" value={this.state.fullname} onChange={(event)=>{this.setState({fullname:event.target.value})}}/></p>
            //     <p><input type="text" value={this.state.phone} onChange={(event)=>{this.setState({phone:event.target.value})}} /></p>
            //     <p><input type="email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}} /></p>
            //     <p><input type="text" value={this.state.password} onChange={(event)=>{this.setState({password:event.target.value})}} /></p>
            //     <p><button onClick={this.register}>Register</button></p>