import logo from './logo.svg';
import './App.css';
import './custom.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
import Header from './Header/Header'
import Container from './Container/Container';




function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Container></Container>
    </div>
    </BrowserRouter>
  );
}

export default App;
