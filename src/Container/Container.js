import { Component } from "react";
import Register from "./Register";
import {Route} from 'react-router-dom'
import Login from "./Login";
import viewroom from "./viewroom";
import Addroom from "./Addroom";
import Profile from "./Profile";
import Viewdetail from "./Viewdetail";
import Mypost from "./Mypost";
import Mywatchlist from "./Mywatchlist";
import MypostUpdate from "./MypostUpdate";
import ProfileUpdate from "./ProfileUpdate";
import SearchResult from "./SearchResult";




class Container extends Component{
    render(){
        return(
            
            <div>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/home" component={viewroom}/>
                <Route path="/addroom" component={Addroom}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/detail/:id" component={Viewdetail}/>
                <Route path="/search/:city" component={SearchResult}/>
                <Route path="/edit/:id" component={MypostUpdate}/>
                <Route path="/profileedit/:id" component={ProfileUpdate}/>
                <Route path="/mypost" component={Mypost}/>
                <Route path="/mywatchlist" component={Mywatchlist}/>
                
                
            
               
            </div>
        )
    }
}
export default Container