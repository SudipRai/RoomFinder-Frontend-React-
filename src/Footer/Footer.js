import { Component } from "react"

class Footer extends Component{
  
    render(){

        return(
            <div>
               <div class="jumbotron text-center">
  <div class="row">
    <div class="col-md-3">
      <h2>Legal</h2>
      <p>Liscense Aggrement</p>
      <p>Terms and Conditions</p>
      <p>Privacy and Policy</p>
      <p>Copyright Information</p>

    </div>
    <div class="col-md-3">
      <h2>Information</h2>
      <p>Plans</p>
      <p>About us</p>
      <p>Affiliate</p>
      <p>Become a contributor</p>
    </div>
    <div class="col-md-3">
      <h2>Help</h2>
      <p>Contact Us</p>
      <p>Support</p>
    </div>
    <div class="col-md-3">
      <h2>Follow Us On</h2>
      <p><i class="fab fa-facebook"></i> Facebook</p>
      <p><i class="fab fa-youtube-square"></i> Youtube</p>
      <p><i class="fab fa-instagram"></i> Instagram</p>
      <p><i class="fab fa-twitter"></i> Twitter</p>
      
    </div>
  </div>
  <h5>&copy; Copyright FreeVid</h5>
</div>

            </div>
        )
    }
}
export default Footer