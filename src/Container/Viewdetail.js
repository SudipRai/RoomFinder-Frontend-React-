import { Component} from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import MessageIcon from '@mui/icons-material/Message';
import ErrorIcon from '@mui/icons-material/Error';
import { fontSize } from "@mui/system";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

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
        <div class="col-md-8">
	<div class="detail-img">
    <img src={`http://localhost:90/uploads/${this.state.room.image}`} />
    
	</div>
	<div class="detail-room">
		<p class="tit">{this.state.room.title} ({this.state.room.price}/ per month)</p>

		<div class="row">
			<div class="col-md-6">
				<div class="property-det">
					<h4>Property Detail</h4>
					<hr class="hr-4"></hr>
					<div class="type">
					<label>Property Type: </label>
					<p>{this.state.room.propertytype}</p>

				</div>
				<hr class="hr-4"></hr>
					<div class="type">
					<label>Number of Rooms: </label>
					<p>{this.state.room.roomnumber}</p>
					
				</div>
				<hr class="hr-4"></hr>
					<div class="type">
					<label>Facility: </label>
					<p>{this.state.room.facility}</p>
					
				</div>

				</div>
				

			</div>
			<div class="col-md-6">

				<div class="property-det">
					<h4>Location</h4>
					<hr class="hr-4"></hr>
					<div class="type">
					<label>District: </label>
					<p>{this.state.room.district}</p>

				</div>
				<hr class="hr-4"></hr>
					<div class="type">
					<label>City: </label>
					<p>{this.state.room.city}</p>
					
				</div>
				<hr class="hr-4"></hr>
					<div class="type">
					<label>Street: </label>
					<p>{this.state.room.street}</p>
				</div>
				</div>
			</div>
		</div>
        </div>
    </div>
    <div class="col-md-4">
	<div class="owner">
				<h4>Owner Detail</h4>
                <div class="ownerinfo">
				
				<label class="prolabel">Fullname : {this.state.profile.fullname}</label>
				
				
		
				<label class="prolabel">Email: {this.state.profile.email}</label>
				
				<label class="prolabel">Phone: {this.state.profile.phone} </label>
		
	
				
				</div>
			</div>
			<div class="btnmore2">
			<button><AddCircleIcon/> Add to Watchlist</button>
			</div>
			{/* <p className="share">Share </p> */}
			<div className="iconss">
				<FacebookIcon style={{fontSize:"40"}}/>
				<WhatsAppIcon style={{fontSize:"40"}}/>
				<TwitterIcon style={{fontSize:"40"}}/>
				<MessageIcon style={{fontSize:"40"}}/>
			</div>

			<div className="scam">
				<p><ErrorIcon/> Be aware of scammers!! Read the safety tips.</p>
			</div>
        </div>
		
    
        		
           
	</div>
	
	<div class="description">
				<h4>Description</h4>
				<p>{this.state.room.descrption}</p>
				<div class="btnmore1">
			<button><LocationOnIcon/> Show on the Map</button>
			</div>
			
			</div>
			

			
</div>



<div className="sim">
<p className="similar">Property in Similar Location</p>
</div>
<div class="row row7"> 

      
      {
         
        this.state.rooms.map((rooom)=>{
                       
                        return (

                          <div class="col-md-6 room-item">
                            <hr class="hr-3"></hr>
                                    <div class="left-side">
                                    <img src={`http://localhost:90/uploads/${rooom.image}`} />
                                        
                                    </div>
                                    <div class="right-side">
                                        <div class="details">
                                            <p class="title">{rooom.title}</p>
                                            <p class="desc">{rooom.descrption}</p>
                                            <p class="location"><LocationOnIcon/>{rooom.city}</p>
                                            <p class="price">{rooom.price}/ per month</p>
                                            <div class="btnmore">
                                            
      
                                            <button onClick={this.newDetail.bind(this, rooom._id)}>View Detail</button>
                                            
      
                                        </div>
                                      

                                            
                                        </div>
                                    </div>
                                </div>

                            
                            
                            ) 
                    })
                }
                </div>
     
	</div>

    
)
}
}
export default Viewdetail;
