import { Component } from "react"
import axios from 'axios';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

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
        descrption:"",
        userID:localStorage.getItem('userID'),
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        },
        titleError:"",
        propertytypeError:"",
        roomnumberError:"",
        districtError:"",
        cityError:"",
        streetError:"",
        facilityError:"",
        priceError:"",
        descriptionError:"",
        fileError:""
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
      if(this.validate()){
     
        axios.post("http://localhost:90/upload",data,this.state.config)
        .then((response)=>{
          console.log(response)
            const roomid=response.data.data._id;
            const data1 = new FormData() 
            data.append('file', this.state.file)
            axios.put("http://localhost:90/upload/"+roomid,data,this.state.config)
            .then((response)=>{
                 toast.success("Post Added",{delay:1000, autoClose:1000})
                 this.props.history.push("/profile")
            })
            .catch()

        })
        .catch(
           
        )
      }
    }

    validate=()=>{
      let titleError=""
      let propertytypeError=""
      let roomnumberError=""
      let districtError=""
      let cityError=""
      let streetError=""
      let facilityError=""
      let priceError=""
      let descriptionError=""
      let fileError=""
      
      if(!this.state.title){
        titleError="Field is empty"
      }
      if(!this.state.propertytype){
        propertytypeError="Field is empty"
        }

      if(!this.state.roomnumber){
          roomnumberError="Field is empty"
        }

      if(!this.state.district){
        districtError="Field is empty"
      }
      if(!this.state.city){
        cityError="Field is empty"
      }
      if(!this.state.street){
        streetError="Field is empty"
        }

      if(!this.state.facility){
          facilityError="Field is empty"
        }

      if(!this.state.price){
        priceError="Field is empty"
      }
      if(!this.state.descrption){
        descriptionError="Field is empty"
      }
      if(!this.state.file){
        fileError="Field is empty"
      }
      
      if(titleError || propertytypeError || roomnumberError || districtError || cityError || streetError || facilityError || priceError || descriptionError || fileError){
        this.setState({titleError,propertytypeError,roomnumberError,districtError,cityError,streetError,facilityError,priceError,descriptionError,fileError})
        return false;
      }
      return true;

    }
  

    render(){
        return(
          //design for adding post
            <div>
            <div class="container-fluid">
            <form>
		<div class="row">
			<div class="col-md-8">

		 <div class="form-group1">
		 	 <label for="inputTitle">Choose a picture</label><br></br>
           <input type="file" name="file" onChange={this.fileHandler}  multiple/>
           <div style={{fontSize:12, color:"red"}}>{this.state.fileError}</div>
        </div>

  <div class="form-row">
    <div class="form-group1 col-sm-6">
      <label for="inputTitle">Title</label>
      <input type="text" required name="title" class="form-control" onChange={this.inputHandler} id="inputTitle" placeholder="Title"/>
      <div style={{fontSize:12, color:"red"}}>{this.state.titleError}</div>
    </div>
    <div class="form-group1 col-sm-6">
      <label for="inputproperty">Types of Property</label>
      <input type="text" name="propertytype" class="form-control" onChange={this.inputHandler} id="inputPassword4" placeholder="Property Type"/>
      <div style={{fontSize:12, color:"red"}}>{this.state.propertytypeError}</div>
    </div>
  </div>
  <div class="form-group1">
    <label for="inputRoomno">Number of Rooms</label>
    <input type="text" name="roomnumber" class="form-control" onChange={this.inputHandler} id="inputroomno" placeholder="Number of rooms"/>
    <div style={{fontSize:12, color:"red"}}>{this.state.roomnumberError}</div>
  </div>
  <div class="form-group1">
    <label for="inputPrice">Price</label>
    <input type="text" name="price" class="form-control" onChange={this.inputHandler} id="inputPrice" placeholder="Price"/>
    <div style={{fontSize:12, color:"red"}}>{this.state.priceError}</div>
  </div>
  <div class="form-row">
    <div class="form-group1 col-md-6">
      <label for="inputCity">City</label>
      <input type="text" name="city" class="form-control" onChange={this.inputHandler} id="inputCity"/>
      <div style={{fontSize:12, color:"red"}}>{this.state.cityError}</div>
    </div>
     <div class="form-group1 col-md-4">
      <label for="inputDistrict">District</label>
      <input type="text" name="district" class="form-control" onChange={this.inputHandler} id="inputDistrict"/>
      <div style={{fontSize:12, color:"red"}}>{this.state.districtError}</div>
    </div>
    <div class="form-group1 col-md-2">
      <label for="inputStreet">Street</label>
      <input type="text" name="street" class="form-control" onChange={this.inputHandler} id="inputStreet"/>
      <div style={{fontSize:12, color:"red"}}>{this.state.streetError}</div>
    </div>
  </div>
    <div class="form-group1">
    <label for="facility">Facility</label>
    <input type="text" name="facility" class="form-control" onChange={this.inputHandler} id="inputfacility" placeholder="Facility"/>
    <div style={{fontSize:12, color:"red"}}>{this.state.facilityError}</div>
  </div>
    <div class="form-group1">
    <label for="inputDesc">Descriptions</label>
    <input type="text" name="descrption" class="form-control" onChange={this.inputHandler} id="inputdesc" placeholder="Descriptions"/>
    <div style={{fontSize:12, color:"red"}}>{this.state.descriptionError}</div>
  </div>

  <button type="submit" onClick={this.addroom} class="btn btn-primary btnadd">Add Post</button>

</div>
<div class="col-md-4">
	<img src="room.jpg"/>
</div>
</div>
</form>
</div>
</div>
        )
    }
}
export default Addroom


   