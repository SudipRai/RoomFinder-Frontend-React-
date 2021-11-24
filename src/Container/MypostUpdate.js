import { Component} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';


// updating the post uploaded by user
class MypostUpdate extends Component{
    state = {
        
        id:this.props.match.params.id,
        file:"",
        title:"",
        propertytype:"",
        roomnumber:"",
        district:"",
        city:"",
        street:"",
        facility:"",
        price:"",
        descrption:"",
        userID:localStorage.getItem('userID'),
        config : {
          headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
      }
     
      
}
changeHandler = (e)=>{
    this.setState({
     [e.target.name] : e.target.value
    })
     
}
fileHandler = (e)=>{
    this.setState({
        file : e.target.files[0]
    })
}

//getting the details of post
componentDidMount(){
    axios.get("http://localhost:90/getroom/"+this.state.id,this.state.config)
    .then((response)=>{
        console.log(response)
        this.setState({
            image:response.data.data.image,
            title:response.data.data.title,
            propertytype:response.data.data.propertytype,
            roomnumber:response.data.data.roomnumber,
            district:response.data.data.district,
            city:response.data.data.city,
            street:response.data.data.street,
            facility:response.data.data.facility,
            price:response.data.data.price,
            descrption:response.data.data.descrption
        })
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

//updating the post
updateroom = (e)=>{
    e.preventDefault();
    const data = new FormData() 
    data.append('title', this.state.title)
    data.append('propertytype', this.state.propertytype)
    data.append('roomnumber', this.state.roomnumber)
    data.append('district', this.state.district)
    data.append('city', this.state.city)
    data.append('street', this.state.street)
    data.append('facility', this.state.facility)
    data.append('price', this.state.price)
    data.append('descrption', this.state.descrption)
    data.append('userID', this.state.userID)
    data.append('file', this.state.file)

    axios.put('http://localhost:90/upload/'+this.state.id,data,this.state.config)
    .then((response)=>{
        console.log(response)
        alert("Updated")
    })
    .catch((err)=>{
        console.log(err.response)
    })
}
    
render(){
    return(
      //design form for update post
        <div>
            <div class="container-fluid">
		<div class="row">
			<div class="col-md-8">
	<form>
  <div class="form-row">
    <div class="form-group1 col-md-6">
      <label for="inputTitle">Title</label>
      <input type="text" name="title" class="form-control" value={this.state.title} onChange={this.changeHandler} id="inputTitle" placeholder="Title"/>
    </div>
    <div class="form-group1 col-md-6">
      <label for="inputproperty">Types of Property</label>
      <input type="text" name="propertytype" class="form-control" value={this.state.propertytype} onChange={this.changeHandler} id="inputPassword4" placeholder="Property Type"/>
    </div>
  </div>
  <div class="form-group1">
    <label for="inputRoomno">Number of Rooms</label>
    <input type="text" name="roomnumber" class="form-control" value={this.state.roomnumber} onChange={this.changeHandler} id="inputroomno" placeholder="Number of rooms"/>
  </div>
  <div class="form-group1">
    <label for="inputPrice">Price</label>
    <input type="text" name="price" class="form-control" value={this.state.price} onChange={this.changeHandler} id="inputPrice" placeholder="Price"/>
  </div>
  <div class="form-row">
    <div class="form-group1 col-md-6">
      <label for="inputCity">City</label>
      <input type="text" name="city" class="form-control" value={this.state.city} onChange={this.changeHandler} id="inputCity"/>
    </div>
     <div class="form-group1 col-md-4">
      <label for="inputDistrict">District</label>
      <input type="text" name="district" class="form-control" value={this.state.district} onChange={this.changeHandler} id="inputDistrict"/>
    </div>
    <div class="form-group1 col-md-2">
      <label for="inputStreet">Street</label>
      <input type="text" name="street" class="form-control" value={this.state.street} onChange={this.changeHandler} id="inputStreet"/>
    </div>
  </div>
    <div class="form-group1">
    <label for="facility">Facility</label>
    <input type="text" name="facility" class="form-control" value={this.state.facility} onChange={this.changeHandler} id="inputfacility" placeholder="Facility"/>
  </div>
    <div class="form-group1">
    <label for="inputDesc">Descriptions</label>
    <input type="text" name="descrption" class="form-control" value={this.state.descrption} onChange={this.changeHandler} id="inputdesc" placeholder="Descriptions"/>
  </div>

  <button type="submit" onClick={this.updateroom} class="btn btn-primary btnadd">Update</button>
</form>
</div>
<div class="col-md-4">
	<img src={`http://localhost:90/uploads/${this.state.image}`}/>
</div>
<div class="form-group1">
		 	 <label for="inputTitle">Choose a picture</label><br></br>
           <input type="file" name="file" onChange={this.fileHandler}  multiple/>
        </div>
</div>
</div>
</div>
    )
}
}
export default MypostUpdate;