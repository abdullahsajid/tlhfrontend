import React, { useEffect, useState } from 'react'
import ContentEditable from 'react-contenteditable'
import { X, BadgePlus } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import Loader from 'src/components/Loader/Loader'
import toast from 'react-hot-toast'
import { useGetLangQuery, useCreateLangMutation, useUpdateLangMutation } from 'src/features/Resume/ResumeLanguage/langApis'

const ResumeLang = () => {
    const [isEditable, setIsEditable] = useState(false)
    const [lang, setLang] = useState([])
    const { data, isLoading } = useGetLangQuery()
    const [updateLang] = useUpdateLangMutation()
    const [createLang] = useCreateLangMutation()

    useEffect(() => {
        if (data?.data[0]?.lang_name && data?.data[0]?.lang_name?.length > 0) {
            setLang(data?.data[0]?.lang_name)
        } else {
            setLang([
                { language: '' }
            ])
        }
    }, [data])

    const handlerLangChange = (e, index) => {
        const newLang = [...lang]
        newLang[index] = {
            ...newLang[index],
            language: e.target.value
        }
        setLang(newLang)
    }

    const handlerUpdateLang = async (val) => {
        let lang = { lang_name: val }
        const data = await updateLang(lang)
        if (data) {
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

    const handlerRemoveLang = (index) => {
        setLang((lng) => {
            const mostRecent = lng?.filter((_, i) => i !== index)
            handlerUpdateLang(mostRecent)
            return mostRecent
        })
    }

    const handlerResLang = async (e) => {
        e.preventDefault()
        let validateField = lang?.every((item) => item?.language === '')
        if (validateField) {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            let allLang = { lang_name: lang }
            const data = await createLang(allLang)
            if (data) {
                toast.success("language added!", {
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

    const handlerUpdateResLang = async (e) => {
        e.preventDefault()
        let validateField = lang?.every((item) => item?.language === '')
        if (validateField) {
            toast.error("please fill all fields!", {
                style: {
                    backgroundColor: '#f6f6f7',
                    border: '3px solid #fff',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }
            })
            return
        } else {
            let allLang = { lang_name: lang }
            const data = await updateLang(allLang)
            if (data) {
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

    const addLang = () => {
        setLang([...lang, { language: '' }])
    }


    return (
        <>
            <div className='flex flex-col gap-2'>
                <div className='text-2xl font-bold text-[#000]'>
                    Languages
                </div>
                <div className='flex gap-2 flex-wrap'>
                    {isLoading ? <div className='flex items-center justify-center w-full'><Loader /></div> :
                        lang?.map((lg, index) => (
                            <div key={index}>
                            <>
                                <div className={`flex gap-1 items-center border border-solid border-[#000] rounded-md text-sm px-[3px] py-[2px] outline-none text-[#000] ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                                    onFocus={() => setIsEditable(!isEditable)}>
                                    <ContentEditable
                                        html={lg.language}
                                        onChange={(e) => handlerLangChange(e, index)}
                                        placeholder='add language'

                                    />
                                    {isEditable && <X size={"15px"}
                                        className='hover:bg-[rgba(247,249,249,0.1)] hover:rounded-md cursor-pointer'
                                        onClick={() => handlerRemoveLang(index)}
                                    />}
                                </div>
                            </>
                            </div>
                        ))}
                </div>
                {(isEditable && data?.data?.length === 0 ) &&
                    <div className='w-full flex items-end justify-end mt-3 pl-10'>
                        <Button className="h-[32px] " onClick={handlerResLang}>
                            Save
                        </Button>
                    </div>
                }
                {(isEditable && data?.data[0]?.lang_name.length > 0 || data?.data[0]?.lang_name.length === 0) &&
                    <div className='w-full flex items-end justify-end mt-3 pl-10'>
                        <Button className="h-[32px] " onClick={handlerUpdateResLang}>
                            update
                        </Button>
                    </div>
                }
            </div>
            {isEditable &&
                <div className='w-full flex mt-3'>
                    <div className='flex items-center w-full cursor-pointer' onClick={addLang}>
                        <BadgePlus />
                        <hr className='border border-[#000] border-solid w-full' />
                    </div>
                </div>
            }
        </>
    )
}

export default ResumeLang
