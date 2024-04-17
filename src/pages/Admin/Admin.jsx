import React from 'react'
import { Button } from '../../components/ui/button'
import { useNavigate } from 'react-router-dom'
const Admin = () => {
    const navigation = useNavigate()
    const nav = () => {
        navigation('/admin/createquiz')
    }
    return (
        <div className='flex items-center mt-20 ml-3'>
            <Button onClick={nav}>create Quiz</Button>
        </div>
    )
}

export default Admin
