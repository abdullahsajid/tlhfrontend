import React, { useState } from 'react'
import { XSquare } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { signUp } from '../features/Signup/signUpService'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Input } from '../components/ui/input'

const Signup = ({ handler }) => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPassError, setConfirmPassError] = useState('')



  const handlerSubmit = async (e) => {
    e.preventDefault()
    if (emailError || passwordError) {
      toast.error("Fill correct fields!", {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        },
      })
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
        return
      }
      else if (user) {
        setName('')
        setPassword('')
        setEmail('')
        setConfirmPassword('')
        handler()
        toast.success('successfully signUp move to login', {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }
        })

      } else {
        toast.error("something Wrong", {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }
        })
      }
    } else {
      toast.error("password not match", {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
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
    <div className={`fixed top-5 flex justify-center items-center w-screen h-full transition-all`}>
      <div className='min-w-[650px] max-w-[80vw] h-[650px] max-h-[90vh] min-h-[400px] flex flex-col bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7]
    shadow-lg shrink overflow-x-hidden overflow-y-hidden transition-all'>
        <div className='shrink grow overflow-x-auto overflow-y-auto transition-all relative'>
          <div className='flex w-full border-solid border-b-2 border-slate-300 px-3 py-3 sticky top-0 z-10 bg-[#f6f6f7]'>
            <div className='flex basis-1/2'>
              <div onClick={() => handler()} className='cursor-pointer'><XSquare /></div>
            </div>
            <div className='flex gap-1 justify-center items-center'>
              <span className='flex justify-center items-center custom-bg-lg to-blue-500 text-white p-[3px] rounded-md font-bold shadow-md'>Tech</span>
              <span className='font-semibold'>LinkHub</span>
            </div>
            <div class="flex basis-1/2 self-stretch items-end shrink"></div>
          </div>
          <div className='flex flex-col relative z-0 px-20'>
            <div className='mt-3 flex justify-center items-center'>
              <h1 class="text-3xl font-bold">Create your account</h1>
            </div>
            <div className='px-3 py-3 flex flex-col gap-y-2'>
              <label htmlFor="name" className='font-semibold'>Name:</label>
              <Input type="text"
                id='name'
                className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='px-3 py-3 flex flex-col gap-y-2'>
              <label htmlFor="email" className='font-semibold'>Email:</label>
              <Input type="email"
                id='email'
                className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                onBlur={validateEmail}
              />
              <span>{emailError}</span>
            </div>
            <div className='px-3 py-3 flex flex-col gap-y-2'>
              <label htmlFor="password" className='font-semibold'>Password</label>
              <Input type='password'
                id="password"
                className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                onBlur={ValidatePass}
              />
              <span>{passwordError}</span>
            </div>
            <div className='px-3 py-3 flex flex-col gap-y-2'>
              <label htmlFor="confirmPassword" className='font-semibold'>Confirm Password</label>
              <Input type='password'
                id="confirmPassword"
                className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                onBlur={validatePassword}
              />
              <span>{confirmPassError}</span>
            </div>
            <div className='mt-5 px-3 py-2 flex justify-center w-full' onClick={handlerSubmit}>
              <button className='w-full custom-bg-lg px-2 rounded-sm text-white cursor-pointer py-2'>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
