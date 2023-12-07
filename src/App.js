import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/SIdebar';
import Home from './pages/Home';
import Profile from './pages/Profile'
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <div className='h-full'>
        <div className='h-[60px] fixed inset-y-0 z-60 w-full'>
          <Navbar/>
        </div>
        <div className='max-w-[90rem] mx-auto h-full'>
          <div className='hidden md:flex pt-[60px] w-64 flex-col fixed inset-y-0 z-50 h-full'>
            <Sidebar/>
          </div>
          <div className='md:pl-64 pt-[60px] h-full flex'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/profile' element={<Profile/>}/>
            </Routes>
          </div>
        </div>
    </div>
  );
}

export default App;
