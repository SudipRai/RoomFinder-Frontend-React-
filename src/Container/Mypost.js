import { Component} from "react";
import {Route} from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useAlert } from 'react-alert'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

// to show the post uploaded by current user

class Mypost extends Component{
    state = {
        rooms : [],
        id:localStorage.getItem('userID'),
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
}
componentDidMount(){
// get the post 
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

//delete the post
deleteRoom = (rid) =>{
    axios.delete('http://localhost:90/room/' + rid,  this.state.config)
    .then((response)=>{
        console.log(response)
        toast.success("Deleted",{autoClose:1000})
        
    })
    .catch((err)=>{
        console.log(err.response)
    })

 }
render(){
    return(
        //my post page design
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
