import React, { useEffect, useState } from 'react'
import { XSquare, ImagePlus } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import { Label } from 'src/components/ui/label'
import { Input } from 'src/components/ui/input'
import { Textarea } from 'src/components/ui/textarea'
import Skeleton from 'react-loading-skeleton'
import { ResumeHeaderService } from 'src/features/Resume/ResumeHeader/ResHeaderService'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { getResumeHeader } from 'src/features/Resume/ResumeHeader/ResHeaderGetService'
import { useSelector } from 'react-redux'
const ResumeHeaderForm = ({ setShowPanel }) => {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.getResHeader.getResHeader)
  const [img, setAvatar] = useState(null)
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

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
      const data = await dispatch(ResumeHeaderService({ name, title, description, img }))
      if (data) {
        setShowPanel()
        toast.success("Resume Header added!", {
          style: {
            backgroundColor: '#f6f6f7',
            border: '3px solid #fff',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }
        })
        dispatch(getResumeHeader())
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
    if (data) {
      setName(data?.[0]?.name)
      setTitle(data?.[0]?.title)
      setDescription(data?.[0]?.description)
      setAvatar(data?.[0]?.img)
    }
  }, [])

  return (
    <div className='fixed top-5 flex justify-center items-center w-screen h-full transition-all'>
      <div className='min-w-[700px] max-w-[80vw] h-[550px] max-h-[90vh] min-h-[400px] flex flex-col bg-[#f6f6f7] rounded-md border border-solid border-[#f6f6f7]
          shadow-lg shrink overflow-x-hidden overflow-y-hidden p-3 transition-all'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2'>
            <div className='cursor-pointer' onClick={() => setShowPanel()}><XSquare /></div>
            <div className='flex font-semibold'>Edit Resume Header</div>
          </div>
          <div>
            <Button onClick={handlerResHeader}>
              Save
            </Button>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex flex-col justify-center relative h-[100px] max-w-[100px] rounded-md mb-3 z-[100] mt-5'>
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
            </div>
            <div className='rounded-md  h-[100px] max-w-[100px]'>
              {img ?
                <img src={`${img && img}`} className='h-full w-full rounded-md object-cover' />
                : <Skeleton width={"100%"} height={"100px"} style={{ border: "3px solid #fff", borderRadius: "0.375rem" }} />}
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <Label htmlFor="username" className="font-semibold">
              Name:
            </Label>
            <Input
              id="username"
              type="name"
              placeholder="Enter your name"
              className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-2 mt-3'>
            <Label htmlFor="title" className="font-semibold">
              Title:
            </Label>
            <Input
              id="title"
              type="text"
              placeholder="Enter your title"
              className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-2 mt-3'>
            <Label htmlFor="desc" className="font-semibold">
              About yourself:
            </Label>
            <Textarea
              id="desc"
              type="text"
              rows="2"
              placeholder="Short paragraph About yourself"
              className='px-2 py-2 rounded-md shadow-md outline-none w-full border-solid border-2 border-slate-300'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

        </div>
      </div>
    </div>
  )
}

export default ResumeHeaderForm
