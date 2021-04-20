import { Component } from "react"

class Header extends Component{
  //logout
  logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('userID')
    window.location.href = '/home'
}
    render(){
      //navbar if not logged in
      if (localStorage.getItem('token')==null) {
        var menu=
        <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<img src="./roomicon1.png"></img>
  <a class="navbar-brand" href="#">Room Finder</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/home">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/register">Register</a>
      <a class="nav-item nav-link" href="/login">Login</a>
    </div>
  </div>
</nav>
</>
      }
else{
  //navbar if user is logged in
  var menu=
  <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<img src="../roomicon1.png"></img>
  <a class="navbar-brand" href="#">Room Finder</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="/home">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="/addroom">Add Room</a>
      <a class="nav-item nav-link" href="/profile">My Profile</a>
      <a class="nav-item nav-link" onClick={this.logout} href="/logout">Logout</a>
      
    </div>
  </div>
</nav>
</>
}

        return(
            <div>
                {menu}

            </div>
        )
    }
}
export default Header