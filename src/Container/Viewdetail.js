import { Component} from "react";
import {Container, Row , Col} from 'react-bootstrap';

import {Route} from 'react-router-dom'
import axios from 'axios';

class Viewdetail extends Component{
    state = {
        rooms : []
}
componentDidMount(){
    axios.get("http://localhost:90/room")
    .then((response)=>{
        console.log(response)
        this.setState({
            rooms : response.data.data
        })
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

render(){
    return(
        <div class="container-lg">
	<div class="detail-img">
		<img src="123.jpg"/>
	</div>
	<div class="detail-room">
		<h1 class="tit">Title</h1>
		<h2 class="tit">Price</h2>
		<div class="row">
			<div class="col-md-6">
				<div class="property-det">
					<h4>Property Detail</h4>
					<div class="type">
					<label>Property Types</label>
					<p>Room</p>

				</div>
					<div class="type">
					<label>Number of Rooms</label>
					<p>4</p>
					
				</div>
					<div class="type">
					<label>Facility</label>
					<p>Room</p>
					
				</div>

				</div>
				

			</div>
			<div class="col-md-6">

				<div class="property-det">
					<h4>Location</h4>
					<div class="type">
					<label>District</label>
					<p>Room</p>

				</div>
					<div class="type">
					<label>City</label>
					<p>4</p>
					
				</div>
					<div class="type">
					<label>Street</label>
					<p>Room</p>
					
				</div>

				</div>
				

				
			</div>

			<div class="description">
				<h4>Description</h4>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			</div>
			<div class="owner">
				<h4>Owner Detail</h4>
			</div>
		</div>
		
	</div>
</div>
    )
}
}
export default Viewdetail;