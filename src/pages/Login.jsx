import React, { useState } from 'react'
import {XSquare } from 'lucide-react' 
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { login } from '../features/Login/loginService'
import { useNavigate } from 'react-router-dom'
import { Input } from '../components/ui/input'
import { Button } from 'src/components/ui/button'
import { Link } from 'react-router-dom'
import BtnLoader from '../components/Loader/BtnLoader'
import RadialGradient  from 'src/components/ui/RadialGradient'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const[loader,setLoader] = useState(false)
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[emailError,setEmailError] = useState('')
    const[passwordError,setPasswordError] = useState('')
    const {loginUser} = useSelector((state) => state.login)
    
    const handleLogin = async (e) => {
        e.preventDefault()
        setLoader(true)
        if(emailError || passwordError){
            toast.error("Fill correct fields!",{
              style:{
                backgroundColor:'#f6f6f7',
                border:'3px solid #fff',
                boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            },
          })
            return 
        }
        if(email == '' || password == ''){
              toast.error("Fill all Fields!",{
                style:{
                  backgroundColor:'#f6f6f7',
                  border:'3px solid #fff',
                  boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              },
            })
            setLoader(false)
            return 
        }
        const user = await dispatch(login({email,password}))
        
        if(user?.payload?.data?.success === false){
            toast.error(`${user.payload.data.message}`,{ 
              style:{
                backgroundColor:'#f6f6f7',
                border:'3px solid #fff',
                boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }})
            setLoader(false)
            return
        }
        else if(user?.payload?.data?.id){
            
            toast.success("Login Successfully!",{ 
              style:{
                backgroundColor:'#f6f6f7',
                border:'3px solid #fff',
                boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }})
            if(user.payload.data.name === 'admin007'){
              navigate('/admin')  
            }else{
            navigate('/home')}
            setLoader(true)
        }else{
            toast.error("credentials wrong!",{
                style:{
                  backgroundColor:'#f6f6f7',
                  border:'3px solid #fff',
                  boxShadow:'0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              },
            })
            setLoader(false)
        }
    }

    const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(email)){
          setEmailError("Invalid Email")
        }else if(email === ''){
          setEmailError('field is empty!')
        }
        else{
          setEmailError('')
        }
      }
      const ValidatePass = () => {
        if((password == '') || (password.length < 6)){
          return setPasswordError("invalid password")
        }else{
          setPasswordError('')
        }
      }

  return (
    <div className={`flex w-screen h-screen transition-all relative bg-background`}>
      <div className='flex justify-center items-center w-full'>
        <div className='flex flex-col justify-center items-center shadow shrink overflow-x-hidden overflow-y-hidden transition-all'>
          <div className='shrink grow overflow-x-auto overflow-y-auto transition-all relative'>
              {/* <div className='flex w-full border-solid border-b-2 border-slate-300 px-3 py-3 sticky top-0 z-10 bg-[#f6f6f7]'>
                  <div className='flex basis-1/2'>
                      <div className='cursor-pointer'><XSquare/></div>
                  </div>
                  <div className='flex gap-1 justify-center items-center'>
                      <span className='flex justify-center items-center custom-bg-lg to-blue-500 text-white p-[3px] rounded-md font-bold shadow-md'>Tech</span>
                      <span className='font-semibold'>LinkHub</span>
                  </div>
                  <div className="flex basis-1/2 self-stretch items-end shrink"></div>
              </div> */}
              
              <div className='flex flex-col relative z-0 px-8 py-10 border-2 w-[430px] max-sm:w-[375px] bg-[#f6f6f7] rounded-md border-solid border-[#e5e7eb]'>
                  <div className='flex justify-center items-center'>
                      <h1 className="text-3xl font-bold">Sign in</h1>
                  </div>
                  <div className='px-3 py-3 flex flex-col gap-y-2'>
                      <label htmlFor="email" className='font-semibold'>Email:</label>
                      <Input type="email"
                          id='email' 
                          className='px-2 py-2 rounded-md outline-none w-full border-solid border-2 border-[#e5e7eb]'
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                          onBlur={validateEmail}
                      />
                      <span>{emailError}</span>
                  </div>
                  <div className='px-3 py-3 flex flex-col gap-y-2'>
                      <label htmlFor="Password" className='font-semibold'>Password</label>
                      <Input 
                          type='password'
                          id="Password" 
                          className='px-2 py-2 rounded-md outline-none w-full border-solid border-2 border-[#e5e7eb]'
                          value={password}
                          onChange={(e)=>setPassword(e.target.value)}
                          onBlur={ValidatePass}
                      />
                      <span>{passwordError}</span>
                  </div>   
                  <div className='mt-5 px-3 py-2 flex justify-center w-full'  onClick={handleLogin}>
                      <Button className=' w-full px-2 rounded-sm text-white cursor-pointer py-2' disabled={loader}>
                         {loader ? <BtnLoader/> : "log in"}
                      </Button>
                  </div>
                  <div className='flex justify-center items-center mt-3'>
                    <Link to={"/signup"}>Don't have an account?</Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <RadialGradient />
  </div>
  )
}

export default Login
