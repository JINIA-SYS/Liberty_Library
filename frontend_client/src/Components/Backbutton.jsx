import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const Backbutton = ({link="/"}) => {
    return (
        <div className='flex'>
            <Link to={link} className=' bg-violet-800 text-white px-4 py-1 rounded-lg w-fit '>
                <BsArrowLeft className='text-2xl'/>
            </Link>

        </div>
    )
}

export default Backbutton