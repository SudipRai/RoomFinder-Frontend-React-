import { Component } from "react"
import axios from 'axios';

class Addroom extends Component{
    state={
        image:"",
        title:"",
        propertytype:"",
        roomnumber:"",
        district:"",
        city:"",
        street:"",
        facility:"",
        price:"",
        description:"",
        userID:"{localStorage.getItem('userID')}",
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }
    addroom=()=>{
        const data={
            image:this.state.image,
            title:this.state.title,
            propertytype:this.state.propertytype,
            roomnumber:this.state.roomnumber,
            district:this.state.district,
            city:this.state.city,
            street:this.state.street,
            facility:this.state.facility,
            price:this.state.price,
            description:this.state.description,
            userID:this.state.userID
        
            
        }
        axios.post("http://localhost:90/upload",data)
        .then((response)=>{
            const roomid=response.data.data._id;
            axios.post("http://localhost:90/upload"+roomid,this.state.config,this.state)
            .then()
            .catch()

        })
        .catch(
           
        )
    }
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
export default Addroom


   