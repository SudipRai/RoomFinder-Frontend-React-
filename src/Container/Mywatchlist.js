import { Component} from "react";
import {Route} from 'react-router-dom'
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


class Mywatchlist extends Component{
    state = {
        rooms : [],
        id:localStorage.getItem('userID'),
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
}
//showing watchlist
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

//deleting watchlist
deleteWatchlist = (rid) =>{
    axios.delete('http://localhost:90/watchlist/' + rid,  this.state.config)
    .then((response)=>{
        console.log(response)
        toast.success("Removed",{autoClose:1000})
        
    })
    .catch((err)=>{
        console.log(err.response)
    })
 }
 //reloads the page after delete
 componentDidUpdate(){
    this.componentDidMount();
}

render(){
    return( 
    <div class="row row7"> 
      
    {
       
        //design to show watchlist
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
                }
                </div>
              
    )
    
}
    }
export default Mywatchlist;
        
