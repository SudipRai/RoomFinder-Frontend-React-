import { Component} from "react";
import {Container, Row , Col} from 'react-bootstrap';
import Register from './Register';
import Login from './Login'
import {Route} from 'react-router-dom'
import axios from 'axios';

class viewroom extends Component{
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
       
    
            
                    this.state.rooms.map((room)=>{
                        return (
                            <div class="out-body">

                                <div class="container-fluid">
                                    <div class="left-side">
                                        <img src="room.jpg"/>
                                        
                                    </div>
                                    <div class="right-side">
                                        <div class="details">
                                            <h1 class="title">{room.title}</h1>
                                            <p class="location"><i class="fas fa-map-marker-alt"></i> {room.city}</p>
                                            <p class="price">{room.price}</p>
                                            <div class="btnmore">
                                            <button>View Details</button>
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
export default viewroom;
