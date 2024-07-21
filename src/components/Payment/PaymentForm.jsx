import React, { useState } from 'react'
import { X } from 'lucide-react'
import { setPaymentToggle} from 'src/features/skillAssessment/AssessmentSlice'
import { Label } from 'src/components/ui/label'
import { Input } from 'src/components/ui/input'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import BtnLoader from 'src/components/Loader/BtnLoader'

const PaymentForm = () => {
    const dispatch = useDispatch()
    const [payDetails,setPayDetails] = useState({name:'',price:''})
    const[loader,setLoader] = useState(false)
    const handlerChange = (name,value) => {
        setPayDetails((pre) => ({
            ...pre,
            [name]:value
        }))
    }

    const handlerStripe = (e) => {
        setLoader(true)
        if(payDetails.name.trim() === '' || payDetails.price.trim() === ''){
            toast.error('request you to fill fields!',{
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            setLoader(false)
            return
        }
        fetch(`${process.env.REACT_APP_LOCAL_URL}/create-checkout-session`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              items: [{ name: `${payDetails.name}`, price: payDetails.price , quantity: 1 }],
            }),
          })
            .then((res) => {
              if (res.ok) return res.json();
              setLoader(false)
              return res.json().then((json) => Promise.reject(json));
            })
            .then(({ url }) => {
              window.location = url;
            })
            .catch((e) => {
              console.error(e.error);
            });
    }

  return (
    <div className='fixed top-5 flex justify-center items-center w-screen h-full transition-all'>
        <div className='w-[680px] h-[200px] max-h-[90vh] min-h-[250px] flex flex-col bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7]
            shadow-lg shrink overflow-x-hidden overflow-y-hidden transition-all'>
                <div className='shrink grow overflow-x-auto overflow-y-auto transition-all relative'>
                    <div className='flex items-center justify-between w-full border-solid border-b-2 border-slate-300 px-3 py-3 sticky top-0 z-10 bg-[#f6f6f7]'>
                        <div className='flex items-center gap-x-2'>
                            <div className='cursor-pointer rounded-full p-1 hover:hoverbg' onClick={() => dispatch(setPaymentToggle(false))}><X /></div>
                            <div className='flex font-bold'>Payment Details</div>
                        </div>
                        <div className={`flex justify-center items-center bg-slate-900 hover:bg-slate-900/90 px-2 rounded-md text-slate-50 p-1 cursor-pointer`}
                            // disabled={btnLoader}
                            disabled={loader}
                            onClick={() => handlerStripe()}
                        >
                            {/* create {btnLoader && <BtnLoader/>} */}
                            {loader && <BtnLoader/>} Pay
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-3 px-5 py-3'>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor="title" className='font-bold'>Title*</Label>
                            <Input
                                id="title"
                                className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                                placeholder='Title'
                                type="text"
                                value={payDetails?.name ? payDetails?.name : ''}
                                onChange={(e) => handlerChange('name',e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label htmlFor="amount" className='font-bold'>Amount*</Label>
                            <Input
                                id="amount"
                                className='w-full rounded-md p-1 border-2 border-slate-300 shadow bg-[#F2F2F2]'
                                placeholder='Amount'
                                type="number"
                                value={payDetails?.price ? payDetails?.price : ''}
                                onChange={(e) => handlerChange('price',e.target.value)}
                            />
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default PaymentForm
