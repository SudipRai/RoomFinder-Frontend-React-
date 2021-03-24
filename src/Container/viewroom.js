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
       
        // <Container>
        //     <Row>
        //         <Col>
        //         <Route path='/register' component={Register} />
        //         <Route path='/login' component={Login} />
        //         </Col>
        //         <Col>{
            
                    this.state.rooms.map((room)=>{
                        return (<div>
                            <p>
                            {
                            room.title 
                            }
                            </p>

                        
                             </div>
                            ) 
                    })
              
        //         }
        //         </Col>
        //         <Col>somethint</Col>
        //     </Row>
        //  </Container>
    )
}
}
export default viewroom;
