import { Component} from "react";
import {Container, Row , Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import {Route} from 'react-router-dom'
import axios from 'axios';

class Viewdetail extends Component{
    state = {
        room : [],
        profile : [],
        userID:localStorage.getItem('userid'),
        id : this.props.match.params.id,
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
}
componentDidMount(){
    Promise.all([
        axios.get("http://localhost:90/home/getroom/"+ this.state.id)
        .then((response)=>{
            console.log(response)
            localStorage.setItem('userid',response.data.data.userID)
            this.setState({
                room : response.data.data
                
                
            })
            
        })
        .catch((err)=>{
            console.log(err.response)
        }),

  
    
    axios.get("http://localhost:90/home/owner/"+ this.state.userID)
    .then((response)=>{
        console.log(response)
        console.log(this.state.userID)
        this.setState({
            profile : response.data.data
        })
    })
    .catch((err)=>{
        console.log(err.response)
    })
])
}



render(){
    return(<div>

        <div class="container-fluid">
        <div class="row">
        <div class="col-md-7">
	<div class="detail-img">
    <img src={`http://localhost:90/uploads/${this.state.room.image}`} />
    
	</div>
    </div>
    <div class="col-md-5">
	<div class="detail-room">
		<h1 class="tit">{this.state.room.title}</h1>
		<h2 class="tit">{this.state.room.price}</h2>
		<div class="row">
			<div class="col-md-6">
				<div class="property-det">
					<h4>Property Detail</h4>
					<div class="type">
					<label>Property Type</label>
					<p>{this.state.room.propertytype}</p>

				</div>
					<div class="type">
					<label>Number of Rooms</label>
					<p>{this.state.room.roomnumber}</p>
					
				</div>
					<div class="type">
					<label>Facility</label>
					<p>{this.state.room.facility}</p>
					
				</div>

				</div>
				

			</div>
			<div class="col-md-6">

				<div class="property-det">
					<h4>Location</h4>
					<div class="type">
					<label>District</label>
					<p>{this.state.room.district}</p>

				</div>
					<div class="type">
					<label>City</label>
					<p>{this.state.room.city}</p>
					
				</div>
					<div class="type">
					<label>Street</label>
					<p>{this.state.room.street}</p>
					
				</div>

				</div>
				

				
			</div>
            

			
		
		</div>
        </div>
        <div class="owner">
				<h4>Owner Detail</h4>
                <div class="myinfo">
				
				<label class="prolabel">Fullname</label>
				
				<p>{this.state.profile.fullname}</p>
		
				<label class="prolabel">Email</label>
				<p>{this.state.profile.email}</p>
				<label class="prolabel">Phone</label>
				<p>{this.state.profile.phone}</p>
				</div>
			</div>
        </div>
        <div class="description">
				<h4>Description</h4>
				<p>{this.state.room.descrption}</p>
			
			</div>		
           
	</div>
   

</div>


</div>
    )
}
}
export default Viewdetail;