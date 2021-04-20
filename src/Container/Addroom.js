import { Component } from "react"
import axios from 'axios';

class Addroom extends Component{
    state={
        file:"",
        title:"",
        propertytype:"",
        roomnumber:"",
        district:"",
        city:"",
        street:"",
        facility:"",
        price:"",
        description:"",
        userID:localStorage.getItem('userID'),
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }
    //for input text
    inputHandler=(e)=>{
      this.setState({
          [e.target.name] : e.target.value
      })
  }

  //for files
  fileHandler = (e)=>{
      this.setState({
          file : e.target.files[0]
      })
  }

  //adding post 
    addroom=(e)=>{
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
        axios.post("http://localhost:90/upload",data,this.state.config)
        .then((response)=>{
          console.log(response)
            const roomid=response.data.data._id;
            
            const data1 = new FormData() 

            data1.append('file', this.state.file)
            axios.put("http://localhost:90/upload/"+roomid,data1,this.state.config)
            .then((response)=>{
                  console.log(response)
                  window.location.href = '/home'
                  alert("Successfully added")
            })
            .catch()

        })
        .catch(
           
        )
    }
    render(){
        return(
          //design for adding post
            <div>
            <div class="container-fluid">
		<div class="row">
			<div class="col-md-8">
	<form>
		 <div class="form-group1">
		 	 <label for="inputTitle">Choose a picture</label><br></br>
           <input type="file" name="file" onChange={this.fileHandler}  multiple/>
        </div>

  <div class="form-row">
    <div class="form-group1 col-md-6">
      <label for="inputTitle">Title</label>
      <input type="text" name="title" class="form-control" onChange={this.inputHandler} id="inputTitle" placeholder="Title"/>
    </div>
    <div class="form-group1 col-md-6">
      <label for="inputproperty">Types of Property</label>
      <input type="text" name="propertytype" class="form-control" onChange={this.inputHandler} id="inputPassword4" placeholder="Property Type"/>
    </div>
  </div>
  <div class="form-group1">
    <label for="inputRoomno">Number of Rooms</label>
    <input type="text" name="roomnumber" class="form-control" onChange={this.inputHandler} id="inputroomno" placeholder="Number of rooms"/>
  </div>
  <div class="form-group1">
    <label for="inputPrice">Price</label>
    <input type="text" name="price" class="form-control" onChange={this.inputHandler} id="inputPrice" placeholder="Price"/>
  </div>
  <div class="form-row">
    <div class="form-group1 col-md-6">
      <label for="inputCity">City</label>
      <input type="text" name="city" class="form-control" onChange={this.inputHandler} id="inputCity"/>
    </div>
     <div class="form-group1 col-md-4">
      <label for="inputDistrict">District</label>
      <input type="text" name="district" class="form-control" onChange={this.inputHandler} id="inputDistrict"/>
    </div>
    <div class="form-group1 col-md-2">
      <label for="inputStreet">Street</label>
      <input type="text" name="street" class="form-control" onChange={this.inputHandler} id="inputStreet"/>
    </div>
  </div>
    <div class="form-group1">
    <label for="facility">Facility</label>
    <input type="text" name="facility" class="form-control" onChange={this.inputHandler} id="inputfacility" placeholder="Facility"/>
  </div>
    <div class="form-group1">
    <label for="inputDesc">Descriptions</label>
    <input type="text" name="descrption" class="form-control" onChange={this.inputHandler} id="inputdesc" placeholder="Descriptions"/>
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


   