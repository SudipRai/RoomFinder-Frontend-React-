import { Component} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

class Viewdetail extends Component{
	
    state = {
        room : [],
        profile : {},
		rooms:[],
        userId:localStorage.getItem('userId'),
		city:localStorage.getItem('city'),
        id : this.props.match.params.id,
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
}
componentDidMount(){

    Promise.all([

	//gets all the post
        axios.get("http://localhost:90/home/getroom/"+ this.state.id)
        .then((response)=>{
            console.log(response)
            const ownerid=response.data.data.userID
			localStorage.setItem('city',response.data.data.city)
            this.setState({
                room : response.data.data,   
            })

			//show the details of person who uploaded the post
			axios.get("http://localhost:90/home/owner/"+ ownerid)
				.then((response)=>{
				console.log(response)
				console.log(this.state.userId)
				this.setState({	
				profile : response.data.data
			})
				
			})
			.catch((err)=>{
				console.log(err.response)
			})
						
        })
        .catch((err)=>{
            console.log(err.response)
        }),  
  // showing the realted post
		axios.get("http://localhost:90/related/room/"+ this.state.city)
		.then((response)=>{
			console.log(response)
			console.log(this.state.userId)
			this.setState({
				rooms : response.data.data
			})
		})
		.catch((err)=>{
			console.log(err.response)
		})

			])

} 

//showing the details of related post
newDetail = (did) =>{
	
axios.get("http://localhost:90/home/getroom/"+ did)
.then((response)=>{
	console.log(response)
	localStorage.setItem('userid',response.data.data.userID)
	localStorage.setItem('city',response.data.data.city)
	this.setState({
		room : response.data.data	
	})
	
})
.catch((err)=>{
	console.log(err.response)
})
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
		<h2 class="tit">{this.state.room.price}/ per month</h2>
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
        <div class="description">
				<h4>Description</h4>
				<p>{this.state.room.descrption}</p>
			
			</div>
        </div>
        <div class="owner">
				<h4>Owner Detail</h4>
                <div class="ownerinfo">
				
				<label class="prolabel">Fullname : {this.state.profile.fullname}</label>
				
				
		
				<label class="prolabel">Email: {this.state.profile.email}</label>
				
				<label class="prolabel">Phone: {this.state.profile.phone} </label>
		
	
				
				</div>
			</div>
        		
           
	</div>
   

</div>


<h2 className="similar">Property in Similar Location</h2>
<div class="container-fluid" related>
		<div class="row"> 
{
	
this.state.rooms.map((rooom)=>{
                       
					   return (
						 

						
			<div class="col-md-6">
				<div class="detail-img">
					<img src={`http://localhost:90/uploads/${rooom.image}`}/>
				</div>
					<div class="">
				<h1 class="title">{rooom.title}</h1>
				<p class="location"><i class="fas fa-map-marker-alt"></i> {rooom.city}</p>
				<p class="price">{rooom.price}/ per month</p>
				<div class="btnmore">
				<button onClick={this.newDetail.bind(this, rooom._id)}>View Detail</button>
			</div>

				
			</div>
			</div>
			
			
	


)}
					   )}
					   	</div>
	</div>
</div>
    
)
}
}
export default Viewdetail;