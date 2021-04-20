import { Component} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useAlert } from 'react-alert'

class FilterResult extends Component{
    state = {
        rooms : [],
        property:this.props.match.params.property,
        
        userID:localStorage.getItem('userID'),
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
}


componentDidMount(){
    //to get the result of filter
    axios.get("http://localhost:90/filter/room/"+this.state.property)
    .then((response)=>{
        console.log(response)
        if (response.data.count==0) {
            alert("No data found")
            window.location.href = '/home'
        }
        this.setState({
            rooms : response.data.data    
        })
    })
    .catch((err)=>{
        console.log(err.response)
    })  
}

// to add the items to watchlist
addWatchlist = (wid) =>{
//getting the room
    axios.get("http://localhost:90/getroom/"+ wid,this.state.config)
    .then((response)=>{
        console.log(response)
        const data={
          room:response.data.data,
          userid:this.state.userID
        }
// adding room to watchlist
    axios.post('http://localhost:90/watchlist', data, this.state.config)
    .then((response)=>{
      console.log(data)
        console.log(response)  
    })
    .catch((err)=>{
        console.log(err.response)
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
                            //design to show the filter result
                        <div>  
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
                                            <Link to={'/detail/'+room._id}><button>View Details</button></Link>
                                            <button onClick={this.addWatchlist.bind(this, room._id)}>Add to Watchlist</button>  
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
export default FilterResult;
