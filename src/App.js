import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/SIdebar';
import CandidateForm from './pages/candidate/CandidateForm';
import Home from './pages/Home';
import Profile from './pages/candidate/Profile'
import {Route,Routes} from "react-router-dom"
import Org_profile from './pages/organization/Org_profile';
import OrgForm from './pages/organization/OrgForm';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Auth from './auth/ProtectAuth';

function App(){
  const[showEditPanel,setShowEditPanel] = useState(false)
  const[showOption,setShowOptions] = useState(false)
  const handleShowPanel = (val) => {
    setShowEditPanel(val)
    setShowOptions(false)
  }
    const handleShowOptions = () => {
        setShowOptions(!showOption)
    }
  return (
    <>
      <div className={`fixed inset-x-0 h-full ${(showEditPanel === 0 || showEditPanel === 1 || showEditPanel === 2 || showEditPanel === 3) ?'backdrop-blur':''}`}>
        {showEditPanel === 0 && <CandidateForm handler={handleShowPanel}/>}
        {showEditPanel === 1 && <OrgForm handler={handleShowPanel}/>}
        {showEditPanel === 2 && <Signup handler={handleShowPanel}/>}
        {showEditPanel === 3 && <Login handler={handleShowPanel}/>}
      </div>
      <div className='h-full'>  
          <div className='h-[60px] fixed inset-y-0 z-[110] w-full'>
            <Navbar handler={handleShowPanel} showBar={handleShowOptions} showOption={showOption}/>
          </div>
          <div className='max-w-[90rem] mx-auto h-full'>
            <div className='hidden md:flex pt-[63px] w-64 flex-col fixed inset-y-0 z-50 h-full'>
              <Sidebar/>
            </div>
            <div className='md:pl-64 pt-[60px] h-full flex'>
              <Routes>
                <Route element={<Auth/>}>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/profile' element={<Profile/>}/>
                  <Route path='/organization_profile' element={<Org_profile/>}/>
                </Route>
              </Routes>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
