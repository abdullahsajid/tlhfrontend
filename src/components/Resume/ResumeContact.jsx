import React, { useEffect, useState } from 'react'
import { Home, Mail, Phone } from 'lucide-react';
import toast from 'react-hot-toast'
import ContentEditable from 'react-contenteditable'
import { Button } from 'src/components/ui/button';
import { useGetContactQuery,usePostContactMutation,useUpdateContactMutation} from 'src/features/Resume/ResumeContact/ContactApis';
import BtnLoader from 'src/components/Loader/BtnLoader';

const ResumeContact = () => {
    const { data, isLoading } = useGetContactQuery()
    const [postContact] = usePostContactMutation()
    const [updateContact] = useUpdateContactMutation()
    const [isEditable, setIsEditable] = useState(false)
    const [contact_address, setAddress] = useState(data?.[0]?.contact_address || "Your Address")
    const [contact_email, setEmail] = useState(data?.[0]?.contact_email || "Your Email")
    const [contact_phone, setPhone] = useState(data?.[0]?.contact_phone || "Your phone no")
    const [updateLoading, setUpdateLoading] = useState(false)

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
            let allData = { contact_address, contact_email, contact_phone }
            const data = await postContact(allData)
            if (data) {
                toast.success("Resume Contact added!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                setIsEditable(false)
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

    const handlerResContactUpdate = async (e) => {
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
            setUpdateLoading(true)
            let allData = { contact_address, contact_email, contact_phone }
            const data = await updateContact(allData)
            if (data) {
                toast.success("Resume Contact updated!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                setIsEditable(false)
                setUpdateLoading(false);
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
        if (data?.data?.length > 0) {
            setAddress(data?.data?.[0]?.contact_address)
            setEmail(data?.data?.[0]?.contact_email)
            setPhone(data?.data?.[0]?.contact_phone)
        }
    }, [data])

    return (
        <>
            <div className='grid grid-cols-3 gap-2'>
                <div className='flex items-center gap-2 text-sm'>
                    <Home size={16} />
                    <ContentEditable
                        className={`text-sm outline-none w-max ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                        html={contact_address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder='Your Address'
                        onFocus={() => setIsEditable(!isEditable)}
                    />
                </div>
                <div className='flex items-center gap-2 text-sm'>
                    <Mail size={16} />
                    <ContentEditable
                        className={`text-sm outline-none w-max ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                        html={contact_email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Your Email'
                        onFocus={() => setIsEditable(!isEditable)}
                    />
                </div>
                <div className='flex items-center gap-2 text-sm'>
                    <Phone size={16} />
                    <ContentEditable
                        className={`text-sm outline-none w-max ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                        html={contact_phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder='Your phone no'
                        onFocus={() => setIsEditable(!isEditable)}
                    />
                </div>
            </div>
            {(isEditable && data?.data?.length === 0) &&
                <div className='w-full flex items-center justify-end mt-5'>
                    <Button className="h-[32px]" onClick={handlerResContact}>
                        Save
                    </Button>
                </div>
            }
            {(isEditable && data?.data?.length > 0) &&
              <div className='w-full flex items-end justify-end mt-3 pl-10'>
                <Button className={`h-[32px] ${updateLoading && "opacity-5 w-[81px]"}`} disabled={updateLoading} onClick={handlerResContactUpdate}>
                  {updateLoading ? <BtnLoader /> : 'Update'}
                </Button>
              </div>
            }
        </>
    )
}

export default ResumeContact
