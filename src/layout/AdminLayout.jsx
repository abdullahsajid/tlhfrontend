import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'

const AdminLayout = () => {
    const [showOption, setShowOptions] = useState(false);

    const handleShowOptions = () => {
        setShowOptions(!showOption);
    };

    return (
        <div className="bg-[#F2F2F2] min-h-screen">
            <div className="h-[60px] fixed inset-y-0 z-[110] w-full pt-[10px] backdrop-blur !bg-[#F2F2F2]">
                <Navbar
                    showBar={handleShowOptions}
                    showOption={showOption}
                />
            </div>
            <div className="max-w-[90rem] mx-auto h-full bg-[#F2F2F2]">
                <div
                    className={`h-full flex w-full`}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout

