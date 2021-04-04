import { Component} from "react";
import {Container, Row , Col} from 'react-bootstrap';
import Register from './Register';
import Login from './Login'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom';
import axios from 'axios';

import Carousel from 'react-bootstrap/Carousel'

class Profile extends Component{
    state = {
        profile : [],
        id:localStorage.getItem('userID'),
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
}
componentDidMount(){
    axios.get("http://localhost:90/user/"+ this.state.id, this.state.config)
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
        
      <div>
<div class="container-md pro">
	<div className="row">
		<div class="col-md-4 prohalf">
			<div class="proimg">
				<img src="images.png"/>
			</div>
			<div class="proname">
				<p>{this.state.profile.fullname}</p>
			</div>
			
		</div>
		<div class="col-md-8">
			<div class="myinfo">
				<h3>Information</h3>
				<label class="prolabel">Fullname</label>
				
				<p>{this.state.profile.fullname}</p>
		
				<label class="prolabel">Email</label>
				<p>{this.state.profile.email}</p>
				<label class="prolabel">Phone</label>
				<p>{this.state.profile.phone}</p>
				</div>
				<hr class="hr1"></hr>
				<div class="buttons">
                <Link to={'/mypost'}><button type="submit" class="btn btn-primary">My Post</button></Link>
                <Link to={'/mywatchlist'}><button type="submit" class="btn btn-primary">My Watchlist</button></Link>
				</div>
			</div>
			
		</div>
	</div>
    </div>
           
    )}
}
export default Profile;
