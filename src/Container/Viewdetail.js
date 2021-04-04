import { Component} from "react";
import {Container, Row , Col} from 'react-bootstrap';

import {Route} from 'react-router-dom'
import axios from 'axios';

class Viewdetail extends Component{
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
    )
}
}
export default Viewdetail;