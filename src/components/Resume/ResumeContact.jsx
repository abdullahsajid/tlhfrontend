import React, { useEffect } from 'react'
import { Home, Mail, Phone } from 'lucide-react';
import { useSelector } from 'react-redux';
const ResumeContact = () => {
    const { data } = useSelector((state) => state.getResContact.getResContact)
    return (
        <div className='grid grid-cols-3 gap-2'>
            <div className='flex items-center gap-2 text-sm'>
                <Home size={16} />
                {data?.[0]?.contact_address ? data?.[0]?.contact_address : "Your Address"}
            </div>
            <div className='flex items-center gap-2 text-sm'>
                <Mail size={16} />
                {data?.[0]?.contact_email ? data?.[0]?.contact_email : "Your Email"}
            </div>
            <div className='flex items-center gap-2 text-sm'>
                <Phone size={16} />
                {data?.[0]?.contact_phone ? data?.[0]?.contact_phone : "Your phone no"}
            </div>
        </div>
    )
}

export default ResumeContact
