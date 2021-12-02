import { Component} from "react";
import {Route} from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom';
import validator from 'validator'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


class ProfileUpdate extends Component{
    state = {
        
        id:this.props.match.params.id,
        fullname:"",
        email:"",
        phone:"", 
        password:"",
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        },
        fullnameError:"",
        emailError:"",
        numberError:"", 
      
}
changeHandler = (e)=>{
    this.setState({
     [e.target.name] : e.target.value
    })
     
}
//get user detail in current page
componentDidMount(){
    axios.get("http://localhost:90/user/"+this.state.id,this.state.config)
    .then((response)=>{
        console.log(response)
        this.setState({
            fullname:response.data.data.fullname,
            email:response.data.data.email,
            phone:response.data.data.phone,
            password:response.data.data.password
        })
    })
    .catch((err)=>{
        console.log(err.response)
    })
}
//updates profile
updateProfile = (e)=>{
    e.preventDefault();
    if(this.validate()){
    axios.put('http://localhost:90/profile/update/'+this.state.id,this.state)
    .then((response)=>{
        console.log(response) 
        toast.success("Profile updated",{delay:1000, autoClose:1000})
        this.props.history.push("/profile")
          
    })
    .catch((err)=>{
        console.log(err.response)
    })
}
}
validate=()=>{
    let fullnameError=""
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

    if(this.state.email){
    if (validator.isEmail(this.state.email)) {
        emailError=""
      } else {
        emailError="Enter valid Email!"
      }
    }

    if(fullnameError || emailError || numberError){
      this.setState({fullnameError,emailError,numberError})
      return false;
    }
    return true;

  }
    render(){
        return(
                 
      <div>
      <div class="container-md pro">
          <div className="row">
              <div class="col-md-4 prohalf">
                  <div class="proimg">
                      <img src="../images.png"/>
                  </div>
                  <div class="proname">
                      <p>{this.state.fullname}</p>
                  </div>
              </div>
              <div class="col-md-8">
                  <div class="myinfo">
                      <h3>Information</h3>
                      <label class="prolabel">Fullname</label>
                      
                      <input type="text" name="fullname" class="form-control" value={this.state.fullname} onChange={this.changeHandler} id="inputTitle" placeholder="Fullname"/>
                      <div style={{fontSize:12, color:"red"}}>{this.state.fullnameError}</div>
                      <label class="prolabel">Email</label>
                      <input type="text" name="email" class="form-control" value={this.state.email} onChange={this.changeHandler} id="inputTitle" placeholder="Email"/>
                      <div style={{fontSize:12, color:"red"}}>{this.state.emailError}</div>
                      <label class="prolabel">Phone</label>
                      <input type="text" name="phone" class="form-control" value={this.state.phone} onChange={this.changeHandler} id="inputTitle" placeholder="Phone"/>
                      <div style={{fontSize:12, color:"red"}}>{this.state.numberError}</div>
                      </div>
                      <hr class="hr1"></hr>
                      <div class="buttons">
                      <button type="submit" onClick={this.updateProfile} class="btn btn-primary btnadd">Update</button>
                      
                      </div>
                  </div>
                  
              </div>
          </div>
          </div>
                 
            
        )}
}
export default ProfileUpdate;