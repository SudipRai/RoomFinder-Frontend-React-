import { Component} from "react";
import {Route} from 'react-router-dom'
import axios from 'axios';


class Mywatchlist extends Component{
    state = {
        rooms : [],
        id:localStorage.getItem('userID'),
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
}
componentDidMount(){
    axios.get("http://localhost:90/watchlist/"+this.state.id,this.state.config)
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
deleteWatchlist = (rid) =>{
    axios.delete('http://localhost:90/watchlist/' + rid,  this.state.config)
    .then((response)=>{
        console.log(response)
        alert("Deleted");
        
    })
    .catch((err)=>{
        console.log(err.response)
    })

 }
 componentDidUpdate(){
    this.componentDidMount();
}

render(){
    return(
        
        
        this.state.rooms.map((room)=>{
                       
                        return (<div>
                          
                                
                            <div class="out-body">

                                <div class="container-fluid">
                                    <div class="left-side">
                                    <img src={`http://localhost:90/uploads/${room.room.image}`} />
                                        
                                    </div>
                                    <div class="right-side">
                                        <div class="details">
                                            <h1 class="title">{room.room.title}</h1>
                                            <p class="location"><i class="fas fa-map-marker-alt"></i> {room.room.city}</p>
                                            <p class="price">{room.room.price}</p>
                                            <div class="btnmore">
                                            
                                            <button onClick={this.deleteWatchlist.bind(this, room._id)}>Delete</button>
                                            
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
export default Mywatchlist;
        
