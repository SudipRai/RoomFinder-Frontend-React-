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
import FilterResult from "./FilterResult";




class Container extends Component{
    render(){
        return(
            
            <div>
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login}/>
                <Route path="/" exact component={viewroom}/>
                <Route path="/home" exact component={viewroom}/>
                <Route path="/addroom" exact component={Addroom}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/detail/:id" exact component={Viewdetail}/>
                <Route path="/search/:city" exact component={SearchResult}/>
                <Route path="/filter/:property" exact component={FilterResult}/>
                <Route path="/edit/:id" exact component={MypostUpdate}/>
                <Route path="/profileedit/:id" exact component={ProfileUpdate}/>
                <Route path="/mypost" exact component={Mypost}/>
                <Route path="/mywatchlist" exact component={Mywatchlist}/>
                
                
            
               
            </div>
        )
    }
}
export default Container