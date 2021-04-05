import { Component} from "react";
import {Container, Row , Col} from 'react-bootstrap';
import Register from './Register';
import Login from './Login'
import {Route} from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useAlert } from 'react-alert'

class Mypost extends Component{
    state = {
        rooms : [],
        id:localStorage.getItem('userID'),
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
}
componentDidMount(){
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
        alert("Deleted")
    })
    .catch((err)=>{
        console.log(err.response)
    })

 }
render(){
    return(
        
        
        this.state.rooms.map((room)=>{
                       
                        return (<div>
                          
                                
                            <div class="out-body">

                                <div class="container-fluid">
                                    <div class="left-side">
                                    <img src={`http://localhost:90/uploads/${room.image}`} />
                                        
                                    </div>
                                    <div class="right-side">
                                        <div class="details">
                                            <h1 class="title">{room.title}</h1>
                                            <p class="location"><i class="fas fa-map-marker-alt"></i> {room.city}</p>
                                            <p class="price">{room.price}</p>
                                            <div class="btnmore">
                                            <Link to={'/edit/'+room._id}><button>Edit</button></Link>
                                            <button onClick={this.deleteRoom.bind(this, room._id)}>Delete</button>
                                            
                                        </div>
                                      

                                            
                                        </div>
                                    </div>
                                </div>

                            </div>
                            </div>
                            ) 
                    })
              
    )
    
}
}
export default Mypost;
