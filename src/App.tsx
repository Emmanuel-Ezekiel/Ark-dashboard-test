import NavBar from './Components/navbar/index';
import SideBar from './Components/sidebar/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bid from './Pages/Home/Bid';
import Patronize from './Pages/Patronise';
import './App.css'

function App() {
 

  return (
    <div className='App'>
        <BrowserRouter>
        <NavBar/>
        <div className='AppCon'>
        <SideBar/>
        <Routes>
          <Route path="/" element={(<Bid />)} />
          <Route path="/patronise" element={(<Patronize />)} />
        </Routes>
        </div>
        
        </BrowserRouter>
    </div>
  )
}

export default App;
