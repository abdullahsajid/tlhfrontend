import React, { useState, useEffect } from 'react'
import ContentEditable from 'react-contenteditable'
import { Label } from 'src/components/ui/label'
import { Input } from 'src/components/ui/input'
import Skeleton from 'react-loading-skeleton'
import { ImagePlus } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import toast from 'react-hot-toast'
import { useGetResHeaderQuery, usePostResHeaderMutation, useUpdateResHeaderMutation } from 'src/features/Resume/ResumeHeader/ResHeaderApis'
import Loader from 'src/components/Loader/Loader'
import BtnLoader from 'src/components/Loader/BtnLoader'

const ResumeHeader = () => {
  const [isEditable, setIsEditable] = useState(false)
  const { data, isLoading } = useGetResHeaderQuery()
  const [postResHeader] = usePostResHeaderMutation()
  const [updateResHeader] = useUpdateResHeaderMutation()
  const [name, setName] = useState(data?.data?.[0]?.name || "Your name");
  const [title, setTitle] = useState(data?.data?.[0]?.title || "your title")
  const [description, setDescription] = useState(data?.data?.[0]?.description || "short desacription about yourself")
  const [img, setAvatar] = useState(data?.data?.[0]?.img)
  const [updateLoading, setUpdateLoading] = useState(false)
  const handleAvatarImg = (e) => {
    const selectfile = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(selectfile)
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result)
      }
    }
  }

  const handlerResHeader = async (e) => {
    e.preventDefault()
    if (name === '' && (!img || img === null) && title === '' && description === '') {
      toast.error("please fill all fields!", {
        style: {
          backgroundColor: '#f6f6f7',
          border: '3px solid #fff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }
      })
      return
    } else {
      let allData = { name, title, description, img }
      const data = await postResHeader(allData)
      if (data) {
        toast.success("Resume Header added!", {
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

  const handlerResHeaderUpdate = async (e) => {
    e.preventDefault()
    if (name === '' && (!img || img === null) && title === '' && description === '') {
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
      let allData = { name, title, description, img }
      const data = await updateResHeader(allData)
      if (data) {
        toast.success("Resume Header Updated!", {
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
      setName(data?.data?.[0]?.name)
      setTitle(data?.data?.[0]?.title)
      setDescription(data?.data?.[0]?.description)
      setAvatar(data?.data?.[0]?.img)
    }
  }, [data])

  return (
    <>
      {isLoading ?
        <div className='flex justify-center items-center w-full'><Loader /></div> : (
          <>
            <div className='flex flex-row justify-between items-center'>
              <div className='flex flex-col pr-3'>
                <ContentEditable
                  className={`text-2xl font-bold mb-2 outline-none w-max ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                  html={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Your Name'
                  onFocus={() => setIsEditable(!isEditable)}
                />
                <ContentEditable
                  className={`text mb-1 resumeColor font-semibold outline-none w-max ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                  html={title}
                  placeholder='your title'
                  onChange={(e) => setTitle(e.target.value)}
                  onFocus={() => setIsEditable(!isEditable)}
                />
                <ContentEditable
                  className={`text-sm outline-none ${isEditable ? 'border-b-2 border-[rgb(115,103,240)]' : ''}`}
                  html={description}
                  placeholder='short desacription about yourself'
                  onChange={(e) => setDescription(e.target.value)}
                  onFocus={() => setIsEditable(!isEditable)}
                />
              </div>
              <div className='flex flex-col justify-center relative h-[100px] max-w-[100px] rounded-md mb-3 z-[100] mt-5'>
                {isEditable &&
                  <div className='flex justify-center items-center w-full h-full absolute top-0 z-[100]'>
                    <div className='flex flex-row justify-center items-center'>
                      <Label htmlFor="avatarInput" className='flex justify-center items-center' style={{ backdropFilter: 'blur(4px)', backgroundColor: 'rgba(15, 20, 25, 0.75)', minWidth: '34px', minHeight: '34px', borderRadius: '999px' }}>
                        <ImagePlus size={18} color='white' />
                      </Label>
                      <Input type="file"
                        className='absolute'
                        style={{ width: '0.1px', height: '0.1px', zIndex: '-1', opacity: '0', display: 'none' }}
                        accept='image/*'
                        id='avatarInput'
                        onChange={handleAvatarImg}
                      />
                    </div>
                  </div>}
                <div className='rounded-md w-full' onFocus={() => setIsEditable(!isEditable)}>
                  {img ?
                    <img src={`${img && img}`} className='h-full w-full rounded-md object-cover' />
                    : <Skeleton width={"100px"} height={"100px"} style={{ border: "3px solid #fff", borderRadius: "0.375rem" }} />}
                </div>
              </div>
              {/* <div className='w-[250px] h-[150px]'>
        <img src={`${data?.[0]?.img ? data?.[0]?.img : "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"}`} className='w-full h-full object-contain aspect-square rounded-md cursor-pointer' />
      </div> */}
            </div>
            {(isEditable && data?.data?.length === 0) &&
              <div className='w-full flex mt-5'>
                <Button className="h-[32px]" onClick={handlerResHeader}>
                  Save
                </Button>
              </div>
            }
            {(isEditable && data?.data?.length > 0) &&
              <div className='w-full flex items-end justify-end mt-3 pl-10'>
                <Button className={`h-[32px] ${updateLoading && "opacity-5 w-[81px]"}`} disabled={updateLoading} onClick={handlerResHeaderUpdate}>
                  {updateLoading ? <BtnLoader /> : 'Update'}
                </Button>
              </div>
            }
          </>
        )}
    </>
  )
}


export default ResumeHeader
