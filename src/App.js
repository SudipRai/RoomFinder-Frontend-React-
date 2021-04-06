import logo from './logo.svg';
import './App.css';
import './custom.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
import Header from './Header/Header'
import Container from './Container/Container';
import Footer from './Footer/Footer';




function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Container></Container>
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
