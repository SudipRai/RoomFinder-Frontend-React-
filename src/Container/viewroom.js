import { Component} from "react";
import {Container, Row , Col} from 'react-bootstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

class viewroom extends Component{
    state = {
        rooms : [],
        room : {},
        search:"",
        userID:localStorage.getItem('userID'),

        config : {
          headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
      }
}
componentDidMount(){
 
    axios.get("http://localhost:90/room")
    .then((response)=>{
        
        this.setState({
            rooms : response.data.data
        })
    })
    .catch((err)=>{
        console.log(err.response)
    })
}
addWatchlist = (wid) =>{
  if (localStorage.getItem('token')==null) {
    window.location.href = '/login'

  }
  else{
      axios.get("http://localhost:90/getroom/"+ wid,this.state.config)
      .then((response)=>{
          console.log(response)
           
          const data={
            room:response.data.data,
            userid:this.state.userID
          }
      
     
      axios.post('http://localhost:90/watchlist', data, this.state.config)
      .then((response)=>{
        console.log(data)
          console.log(response)
          window.location.href = '/mywatchlist'
          alert("Added to watchlist")
          
      })
      .catch((err)=>{
          console.log(err.response)
      })
    
      })
      .catch((err)=>{
          console.log(err.response)
      })
 
}
}




render(){
    return(
        <Row>
          
        <Carousel>
        
        <Carousel.Item>
        
            <div className="slide">
          <img
            className="d-block w-100"
            src="123.jpg"
            alt="First slide"
          />
          
          </div>
          <Carousel.Caption>
            <h3>Find the Perfect Home</h3>
            <p>Get what you need</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="12.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Contact with owner directly</h3>
            <p>Reasonable price</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <div className="slide">
          <img
            className="d-block w-100"
            src="1.jpg"
            alt="Third slide"
          />
          </div>
      
          <Carousel.Caption>
            <h3>Different location</h3>
            <p>Kathmandu</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="searching">
        <form>
      <input class="form-control search" type="text" placeholder="Search by Location" aria-label="Search" value={this.state.search} onChange={(event)=>{this.setState({search:event.target.value})}}></input>
      <Link to={'/search/'+this.state.search}><button>Go</button></Link>
      
      </form>
      </div>
      {
         
        this.state.rooms.map((room)=>{
                       
                        return (
                          
                                
                            

                                <div class="container-fluid">
                                    <div class="left-side">
                                    <img src={`http://localhost:90/uploads/${room.image}`} />
                                        
                                    </div>
                                    <div class="right-side">
                                        <div class="details">
                                            <h1 class="title">{room.title}</h1>
                                            <p class="location"><i class="fas fa-map-marker-alt"></i> {room.city}</p>
                                            <p class="price">{room.price}/ per month</p>
                                            <div class="btnmore">
                                            <Link to={'/detail/'+room._id}><button>View Details</button></Link>
      
                                            <button onClick={this.addWatchlist.bind(this, room._id)}>Add to Watchlist</button>
                                            
                                            
                                        </div>
                                      

                                            
                                        </div>
                                    </div>
                                </div>

                            
                            
                            ) 
                    })
                }
                </Row>
    )
    
}
}
export default viewroom;
