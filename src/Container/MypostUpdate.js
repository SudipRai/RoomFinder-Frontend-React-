import { Component} from "react";
import {Container, Row , Col} from 'react-bootstrap';
import Register from './Register';
import Login from './Login'
import {Route} from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

class MypostUpdate extends Component{
    
render(){
    return(
        <div>
            <div class="container-fluid">
		<div class="row">
			<div class="col-md-8">
	<form>
		 <div class="form-group1">
		 	 <label for="inputTitle">Choose a picture</label><br></br>
           <input type="file" name="image"  multiple/>
        </div>

  <div class="form-row">
    <div class="form-group1 col-md-6">
      <label for="inputTitle">Title</label>
      <input type="text" class="form-control" id="inputTitle" placeholder="Title"/>
    </div>
    <div class="form-group1 col-md-6">
      <label for="inputproperty">Types of Property</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Property Type"/>
    </div>
  </div>
  <div class="form-group1">
    <label for="inputRoomno">Number of Rooms</label>
    <input type="text" class="form-control" id="inputroomno" placeholder="Number of rooms"/>
  </div>
  <div class="form-group1">
    <label for="inputPrice">Price</label>
    <input type="text" class="form-control" id="inputPrice" placeholder="Price"/>
  </div>
  <div class="form-row">
    <div class="form-group1 col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
     <div class="form-group1 col-md-4">
      <label for="inputDistrict">District</label>
      <input type="text" class="form-control" id="inputDistrict"/>
    </div>
    <div class="form-group1 col-md-2">
      <label for="inputStreet">Street</label>
      <input type="text" class="form-control" id="inputStreet"/>
    </div>
  </div>
    <div class="form-group1">
    <label for="facility">Facility</label>
    <input type="text" class="form-control" id="inputfacility" placeholder="Facility"/>
  </div>
    <div class="form-group1">
    <label for="inputDesc">Descriptions</label>
    <input type="text" class="form-control" id="inputdesc" placeholder="Descriptions"/>
  </div>

  <button type="submit" onClick={this.addroom} class="btn btn-primary btnadd">Add Post</button>
</form>
</div>
<div class="col-md-4">
	<img src="room.jpg"/>
</div>
</div>
</div>
</div>
    )
}
}
export default MypostUpdate;