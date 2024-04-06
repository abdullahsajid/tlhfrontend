import React, { useEffect, useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { ChevronsRight,BadgePlus } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import toast from 'react-hot-toast'
import BtnLoader from 'src/components/Loader/BtnLoader'
import { useGetResCertQuery,usePostResCertMutation,useDeleteResCertMutation,useUpdateResCertMutation } from 'src/features/Resume/ResumeCertificate/ResCertApis'
const ResumeCertificate = () => {
    const {data} = useGetResCertQuery()
    const [postResCert] = usePostResCertMutation()
    const [updateResCert] = useUpdateResCertMutation()
    const[Certificate,setCertificates] = useState([])
    const[isEditable,setIsEditable] = useState(false)
    const [updateLoading, setUpdateLoading] = useState([])
    const [deleteLoading, setDeleteLoading] = useState([])

    useEffect(() => {
        if(data && data?.data?.length > 0){
            setCertificates(data?.data)
            setUpdateLoading(new Array(data?.data?.length).fill(false))
            setDeleteLoading(new Array(data?.data?.length).fill(false))
        }else{
            setCertificates([
                {
                    cert_name: "",
                    cert_description: "",
                    cert_link: ""
                }
            ])
        }
    },[data])

    const addCertificate = () => {
        setCertificates([...Certificate,{
            cert_name: "",
            cert_description: "",
            cert_link: ""
        }])
    }

    const handleCertificateNameChange = (e,index) => {
        const newCertificate = [...Certificate]
        newCertificate[index] = {
            ...newCertificate[index],
            cert_name: e.target.value
        }
        setCertificates(newCertificate)
    }

    const handleCertificateLinkChange = (e,index) => {
        const newCertificate = [...Certificate]
        newCertificate[index] ={
            ...newCertificate[index],
            cert_link: e.target.value
        }
        setCertificates(newCertificate)
    }

    const handlerCertificateDesChange = (e,index) => {
        const newCertificate = [...Certificate]
        newCertificate[index] = {
            ...newCertificate[index],
            cert_description: e.target.value
        }
        setCertificates(newCertificate)
    }

    const handlerResCertificate = async (e,index) => {
        e.preventDefault()
        const { cert_name,cert_description,cert_link } = Certificate[index]
        if (cert_name === '' && cert_description === '' && cert_link === '') {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            let allData = {cert_name, cert_description, cert_link}
            const data = await postResCert(allData)
            if (data) {
                toast.success("Resume Certificate added!", {
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

    const handlerResCertificateUpdate = async (e,index,id) => {
        e.preventDefault()
        const { cert_name,cert_description,cert_link } = Certificate[index]
        if (cert_name === '' && cert_description === '' && cert_link === '') {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            let updateLoad = [...updateLoading]
            updateLoad[index] = true
            setUpdateLoading(updateLoad)
            let allData = {id, cert_name, cert_description, cert_link}
            const data = await updateResCert(allData)
            if (data) {
                toast.success("Updated!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                setIsEditable(false)
                updateLoad[index] = false
                setUpdateLoading(updateLoad)
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

    const handlerResCertificateDelete = async (e,index,id) => {
        e.preventDefault()
        let updateLoad = [...deleteLoading]
        updateLoad[index] = true
        setDeleteLoading(updateLoad)
            let allData = {id}
            const data = await updateResCert(allData)
            if (data) {
                toast.success("Deleted!", {
                    style: {
                        backgroundColor: '#f6f6f7',
                        border: '3px solid #fff',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }
                })
                setIsEditable(false)
                updateLoad[index] = false
                setDeleteLoading(updateLoad)
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

  return (
    <>
    <div className='flex flex-col'>
        <div className='text-2xl font-bold mb-1 pl-10'>
            Certificates
        </div>
        {Certificate.map((cert, index) => (
            <div key={index}>
                    <>
                        <div className='flex flex-col'>
                            <div className='flex items-center pl-3'>
                                <div className='mr-2'>
                                    <ChevronsRight size={20} />
                                </div>
                                <ContentEditable
                                    tagName='a'
                                    className={`font-semibold  outline-none  ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                                    html={cert.cert_name}
                                    onChange={(e) => handleCertificateNameChange(e, index)}
                                    placeholder='Your Certificate name'
                                    onFocus={() => setIsEditable(!isEditable)}
                                />
                            </div>
                            <div className='mt-1 pl-10'>
                                    <ContentEditable
                                        className={`font-semibold  outline-none  ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                                        html={cert.cert_link}
                                        onChange={(e) => handleCertificateLinkChange(e, index)}
                                        placeholder='Certificate Link'
                                    />
                            </div>
                            <div className='mt-1 pl-10'>
                                <ContentEditable
                                    className={`outline-none w-full  ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                                    html={cert.cert_description}
                                    onChange={(e) => handlerCertificateDesChange(e, index)}
                                    placeholder='tell them about Course Experience'
                                    onFocus={() => setIsEditable(!isEditable)}
                                />
                            </div>
                        </div>
                        {(isEditable && data?.data?.length === 0) &&
                            <div className='w-full flex items-end justify-end mt-3 pl-10'>
                                <Button className="h-[32px]" onClick={(e) => handlerResCertificate(e,index)}>
                                    Save
                                </Button>
                            </div>
                        }
                        {(isEditable && data?.data?.length > 0 && !cert.certifacte_id) &&
                            <div className='w-full flex items-end justify-end mt-3 pl-10'>
                                <Button className="h-[32px]" onClick={(e) => handlerResCertificate(e,index)}>
                                    Save
                                </Button>
                            </div>
                        }
                        <div className='flex items-end justify-end gap-2'>
                            {(isEditable && data?.data?.length > 0 && cert.certifacte_id) &&
                                <div className='flex mt-3'>
                                    <Button className={`h-[32px] ${updateLoading[index] && "opacity-5 w-[81px]"}`}
                                        disabled={updateLoading[index]}
                                        onClick={(e) => handlerResCertificateUpdate(e, index, cert.certifacte_id)}>
                                        {updateLoading[index] ? <BtnLoader /> : 'Update'}
                                    </Button>
                                </div>
                            }
                            {(isEditable && data?.data?.length > 0 && cert.certifacte_id) &&
                                <div className='flex mt-3'>
                                    <Button className={`h-[32px] ${deleteLoading[index] && "opacity-5 w-[81px]"}`}
                                        disabled={deleteLoading[index]}
                                        onClick={(e) => handlerResCertificateDelete(e, index, cert.certifacte_id)}
                                        variant="destructive"
                                    >
                                        {deleteLoading[index] ? <BtnLoader /> : 'Delete'}
                                    </Button>
                                </div>
                            }
                        </div>
                    </>
            </div>
        ))}
    </div>
        {isEditable &&
                <div className='w-full flex mt-3 pl-10'>
                    <div className='flex items-center w-full cursor-pointer' onClick={addCertificate}>
                        <BadgePlus />
                        <hr className='border border-[#000] border-solid w-full' />
                    </div>
                </div>
        }
    </>
  )
}

export default ResumeCertificate

