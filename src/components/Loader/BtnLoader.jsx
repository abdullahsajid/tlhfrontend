import React from 'react'
import { Oval } from 'react-loader-spinner'
const BtnLoader = () => {
  return (
    <div className='flex items-center justify-center w-full'>
        <Oval
        height={20}
        width='100%'
        color="#743C95"
        secondaryColor="rgb(120, 86, 255)"
        strokeWidth={3}
        />
    </div>
  )
}

export default BtnLoader