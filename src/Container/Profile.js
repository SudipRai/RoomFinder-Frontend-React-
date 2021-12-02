import { Component} from "react";
import {Container, Row , Col} from 'react-bootstrap';
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import MessageIcon from '@mui/icons-material/Message';
import Carousel from 'react-bootstrap/Carousel'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class Profile extends Component{
    state = {
		rooms : [],
        profile : [],
        id:localStorage.getItem('userID'),
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
}

//get the detail of user
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
	axios.get("http://localhost:90/room/"+this.state.id,this.state.config)
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

deleteRoom = (rid) =>{
    axios.delete('http://localhost:90/room/' + rid,  this.state.config)
    .then((response)=>{
        console.log(response)
        window.location.reload()
		
    })
    .catch((err)=>{
        console.log(err.response)
    })

 }


render(){
    return(
        //design of profile page
      <div>
<div class="container-fluid pro">
	<div className="row">
		<div class="col-md prohalf">
			<div class="proimg">
				<img src="images.png"/>
                
                <div className="editbtn1">
			<Link to={'/mywatchlist'}><button type="submit" class="btn btn-primary">My Watchlist</button></Link>
			<Link to={'/profileedit/'+this.state.profile._id}><EditIcon style={{marginTop:"20", marginLeft:"10", color:"white"}}/></Link>
            
				</div>
				
			
			</div>
         
			<div class="proname">
				<p>{this.state.profile.fullname}</p> 
			</div>
			
			<div class="proname1">
				<p><EmailIcon/> {this.state.profile.email}</p>
				<p><CallIcon/> {this.state.profile.phone}</p>
				</div>
                <div className="iconss1">
				<FacebookIcon style={{fontSize:"35", color:"white" }}/>
				<WhatsAppIcon style={{fontSize:"35",color:"white"}}/>
				<TwitterIcon style={{fontSize:"35",color:"white"}}/>
				<MessageIcon style={{fontSize:"35",color:"white"}}/>
			</div>
				
				
		</div>
		<div class="c0l-md-9">
		
				<hr class="hr1"></hr>
				<div class="row row8"> 
      
      {
         
        this.state.rooms.map((room)=>{
                       
                        return (

                          <div class="col-lg-6 room-item">
                            <hr class="hr-3"></hr>
                                    <div class="left-side1">
                                    <img src={`http://localhost:90/uploads/${room.image}`} />
                                        
                                    </div>
                                    <div class="right-side1">
                                        <div class="details">
                                            <p class="title">{room.title}</p>
                                            <p class="desc">{room.descrption}</p>
                                            <p class="location"><LocationOnIcon/>{room.city}</p>
                                            <p class="price">{room.price}/ per month</p>
                                          <div className="btnmore3">
										  <Link to={'/edit/'+room._id}><button>Edit</button></Link>
										  <button className="del" onClick={this.deleteRoom.bind(this, room._id)}>Delete</button> 
										  </div>
                                      

                                            
                                        </div>
                                    </div>
                                </div>

                            
                            
                            ) 
                    })
                }
                </div>
     
			</div>
			
		</div>
	</div>
    </div>
           
    )}
}
export default Profile;
