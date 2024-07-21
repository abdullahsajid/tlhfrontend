import React, { useState } from 'react'
import { XSquare } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { signUp } from '../features/Signup/signUpService'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Input } from '../components/ui/input'
import { Button } from 'src/components/ui/button'
import { Link } from 'react-router-dom'
import RadialGradient from 'src/components/ui/RadialGradient'
import BtnLoader from '../components/Loader/BtnLoader'
import Cookies from "universal-cookie";
const cookie = new Cookies()

const Signup = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const[loader,setLoader] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPassError, setConfirmPassError] = useState('')



  const handlerSubmit = async (e) => {
    e.preventDefault()
    setLoader(true)
    if (emailError || passwordError) {
      toast.error("Fill correct fields!", {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
      })
      setLoader(false)
      return
    }
    if (email == '' || password == '') {
      toast.error("Fill all Fields!", {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
      })
      setLoader(false)
      return
    }

    if (password === confirmPassword) {
      const user = await dispatch(signUp({ email, password, name }))
      console.log(user)
      if (user?.payload?.data?.success === false) {
        toast.error(`${user.payload.data.message}`, {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }
        })
        setLoader(false)
        return
      }
      else if (user?.payload?.token) {
        setName('')
        setPassword('')
        setEmail('')
        setConfirmPassword('')
        toast.success('successfully signUp move to login', {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }
        })
        cookie.set("tlhtoken",user?.payload?.token,{path:'/'})
        localStorage.setItem("loginUser",JSON.stringify({data:user?.payload?.data?.[0],token:user?.payload?.token}))
        navigation('/home')
        setLoader(false)
      } else {
        toast.error("something Wrong", {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }
        })
        setLoader(false)
      }
    } else {
      toast.error("password not match", {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
      setLoader(false)
    }
  }

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Invalid Email")
    } else if (email === '') {
      setEmailError('field is empty!')
    }
    else {
      setEmailError('')
    }
  }
  const ValidatePass = () => {
    if ((password == '') || (password.length < 5)) {
      return setPasswordError("invalid password")
    } else {
      setPasswordError('')
    }
  }
  const validatePassword = () => {
    if (password === confirmPassword) {
      setConfirmPassError('')
    } else if (confirmPassword === '') {
      setConfirmPassError('field is empty!')
    } else {
      setConfirmPassError('password not match!')
    }
  }

  return (
    <div className={`flex w-screen h-screen transition-all`}>
      <div className='flex justify-center items-center w-full'>
        <div className='min-w-[480px] max-w-[80vw] max-sm:min-w-[360px] flex flex-col 
          shadow-lg shrink overflow-x-hidden overflow-y-hidden transition-all'>
          <div className='shrink grow overflow-x-auto overflow-y-auto transition-all relative'>
            {/* <div className='flex w-full border-solid border-b-2 border-slate-300 px-3 py-3 sticky top-0 z-10 bg-[#f6f6f7]'>
              <div className='flex basis-1/2'>
                <div onClick={() => handler()} className='cursor-pointer'><XSquare /></div>
              </div>
              <div className='flex gap-1 justify-center items-center'>
                <span className='flex justify-center items-center custom-bg-lg to-blue-500 text-white p-[3px] rounded-md font-bold shadow-md'>Tech</span>
                <span className='font-semibold'>LinkHub</span>
              </div>
              <div class="flex basis-1/2 self-stretch items-end shrink"></div>
            </div> */}
            <div className='flex flex-col relative z-0 px-8 py-10 max-sm:py-3 bg-[#f6f6f7] rounded-md border border-solid border-[#e5e7eb]'>
              <div className='mt-3 flex justify-center items-center'>
                <h1 class="text-3xl max-sm:text-2xl font-bold">Create your account</h1>
              </div>
              <div className='px-3 py-3 max-sm:py-2 flex flex-col gap-y-2 max-sm:gap-y-1'>
                <label htmlFor="name" className='font-semibold flex items-center gap-1'>Name: <span className='text-[10px] text-[red]'>*write your real name</span> </label>
                <Input type="text"
                  id='name'
                  className='px-2 py-2 rounded-md outline-none w-full border-solid border-2 border-[#e5e7eb]'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='px-3 py-3 max-sm:py-2 flex flex-col gap-y-2 max-sm:gap-y-1'>
                <label htmlFor="email" className='font-semibold'>Email:</label>
                <Input type="email"
                  id='email'
                  className='px-2 py-2 rounded-md outline-none w-full border-solid border-2 border-[#e5e7eb]'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  onBlur={validateEmail}
                />
                <span>{emailError}</span>
              </div>
              <div className='px-3 py-3 max-sm:py-2 flex flex-col gap-y-2 max-sm:gap-y-1'>
                <label htmlFor="password" className='font-semibold'>Password</label>
                <Input type='password'
                  id="password"
                  className='px-2 py-2 rounded-md outline-none w-full border-solid border-2 border-[#e5e7eb]'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  onBlur={ValidatePass}
                />
                <span>{passwordError}</span>
              </div>
              <div className='px-3 py-3 max-sm:py-2 flex flex-col gap-y-2 max-sm:gap-y-1'>
                <label htmlFor="confirmPassword" className='font-semibold'>Confirm Password</label>
                <Input type='password'
                  id="confirmPassword"
                  className='px-2 py-2 rounded-md outline-none w-full border-solid border-2 border-[#e5e7eb]'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  onBlur={validatePassword}
                />
                <span>{confirmPassError}</span>
              </div>
              <div className='mt-5 px-3 py-2 max-sm:py-2 flex justify-center w-full' disabled={loader} onClick={handlerSubmit}>
                <Button className='w-full px-2 rounded-sm text-white cursor-pointer py-2' >
                   {loader ? <BtnLoader/> : 'Sign up'}
                </Button>
              </div>
              <div className='flex justify-center items-center mt-3'>
                <Link to={'/login'}>Already have an account? Sign in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RadialGradient />
    </div>
  )
}

export default Signup
