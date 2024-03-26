import React, { useEffect, useState } from 'react'
import { XSquare, ImagePlus } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import { Label } from 'src/components/ui/label'
import { Input } from 'src/components/ui/input'
import { ResumeContactService } from 'src/features/Resume/ResumeContact/ResContactService'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { getResumeContact } from 'src/features/Resume/ResumeContact/ResContactGetService'
import { useSelector } from 'react-redux';

const ResumeContactForm = ({ setShowPanel }) => {
    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.getResContact.getResContact)
    const [contact_address, setAddress] = useState('')
    const [contact_email, setEmail] = useState('')
    const [contact_phone, setPhone] = useState('')


    const handlerResContact = async (e) => {
        e.preventDefault()
        if (contact_address === '' && contact_email === '' && contact_phone === '') {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            const data = await dispatch(ResumeContactService({ contact_address, contact_email, contact_phone }))
            if (data) {
                setShowPanel()
                toast.success("Resume Contact added!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                dispatch(getResumeContact())
                return
            } else {
                toast.error("something went wrong try again!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
            }
        }
    }

    useEffect(() => {
        if(data){
            setAddress(data?.[0]?.contact_address)
            setEmail(data?.[0]?.contact_email)
            setPhone(data?.[0]?.contact_phone)
        }
    },[])

    return (
        <div className='fixed top-5 flex justify-center items-center w-screen h-full transition-all'>
            <div className='min-w-[700px] max-w-[80vw] h-[400px] max-h-[90vh] min-h-[400px] flex flex-col bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7]
          shadow-lg shrink overflow-x-hidden overflow-y-hidden p-3 transition-all'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <div className='cursor-pointer' onClick={() => setShowPanel()}><XSquare /></div>
                        <div className='flex font-semibold'>Edit Resume Contact</div>
                    </div>
                    <div>
                        <Button onClick={handlerResContact}>
                            Save
                        </Button>
                    </div>
                </div>

                <div className='flex flex-col gap-2 mt-7'>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="address" className="font-semibold">
                            Address:
                        </Label>
                        <Input
                            id="address"
                            type="text"
                            placeholder="Enter your address"
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={contact_address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-2 mt-5'>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="email" className="font-semibold">
                            Email:
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={contact_email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-2 mt-5'>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="number" className="font-semibold">
                            Phone no:
                        </Label>
                        <Input
                            id="number"
                            type="number"
                            placeholder="Enter your Phone No"
                            className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
                            value={contact_phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeContactForm
