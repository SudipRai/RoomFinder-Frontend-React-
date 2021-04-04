import { Component} from "react";
import {Container, Row , Col} from 'react-bootstrap';
import Register from './Register';
import Login from './Login'
import {Route} from 'react-router-dom'
import axios from 'axios';
import '../custom.css';
import Carousel from 'react-bootstrap/Carousel'

class Profile extends Component{
    state = {
        profile : [],
        userID:"{localStorage.getItem('userID')}",
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
}
componentDidMount(){
    axios.get("http://localhost:90/user/"+this.state.userID, this.state.config)
    .then((response)=>{
        console.log(response)
        this.setState({
            profile : response.data.data
        })
    })
    .catch((err)=>{
        console.log(err.response)
    })
}
render(){
    return(
        this.state.profile.map((pro)=>{
                       
            return (
<div class="container pro">
	<div class="row">
		<div class="col-md-4 prohalf">
			<div class="proimg">
				<img src="images.png"/>
			</div>
			<div class="proname">
				<p>{pro.fullname}</p>
			</div>
			
		</div>
		<div class="col-md-8">
			<div class="myinfo">
				<h3>Information</h3>
				<label class="prolabel">Fullname</label>
				<p>{pro.fullname}</p>
				<label class="prolabel">Email</label>
				<p>{pro.email}</p>
				<label class="prolabel">Phone</label>
				<p>{pro.phone}</p>
				</div>
				<hr class="hr1"></hr>
				<div class="buttons">
					<button type="submit" class="btn btn-primary">My Post</button>
					<button type="submit" class="btn btn-primary">My Watchlist</button>
				</div>
			</div>
			
		</div>
	</div>
            )
        })

    )}
}
export default Profile;
