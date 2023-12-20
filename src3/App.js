
import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Home } from './component/Home';
import { Contact } from './component/Contact';
import { About } from './component/About';
import { Menu } from './component/Menu';
import { Navbar } from './component/Navbar';
import { Footer } from './component/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
  <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/about' exact element={<About/>}/>
    <Route path='/contact' exact element={<Contact/>}/>
    <Route path='/menu' exact element={<Menu/>}/>
  </Routes>
  <Footer/>
    </div>
  );
}

export default App;
