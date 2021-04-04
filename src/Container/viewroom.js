import { Component} from "react";
import {Container, Row , Col} from 'react-bootstrap';
import Register from './Register';
import Login from './Login'
import {Route} from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="12.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {
        
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
                                            <Link to={'/detail/'+room._id}><button>View Details</button></Link>
                                            <button>Add to Watchlist</button>
                                            
                                        </div>
                                      

                                            
                                        </div>
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
