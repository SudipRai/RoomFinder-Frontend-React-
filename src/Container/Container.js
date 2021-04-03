import { Component } from "react";
import Register from "./Register";
import {Route} from 'react-router-dom'
import Login from "./Login";
import viewroom from "./viewroom";
import Addroom from "./Addroom";



class Container extends Component{
    render(){
        return(
            
            <div>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/home" component={viewroom}/>
                <Route path="/addroom" component={Addroom}/>
               
            </div>
        )
    }
}
export default Container