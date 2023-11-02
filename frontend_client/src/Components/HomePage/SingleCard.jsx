import React from 'react';
import { useState,useCallback,useContext,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VscLocation, VscCopy } from 'react-icons/vsc';
import { PiBook, PiBookOpenTextLight } from 'react-icons/pi';
import { FaLanguage } from 'react-icons/fa';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { BiUserCircle,BiShow } from 'react-icons/bi';
import { MdOutlineEdit, MdOutlineDelete } from 'react-icons/md';
import BookModal from './BookModal';

const SingleCard = ({ book,index }) => {
    const [modal, setModal] = useState(false);

    return (
        <>
           
                <div key={book._id} className='border border-gray-500 rounded-lg px-4 py-3 m-4 relative hover:shadow-xl'>
                    <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-600 rounded-lg'>{book.publication_date.split('T')[0]}</h2>
                    <h4 className='my-2 text-black-800'>{index+1}</h4>
                    <div className='flex justify-start items-center gap-x-2'><PiBookOpenTextLight className='text-3xl text-pink-500' /> <h2 className='my-1'>{book.BookTitle}</h2></div>
                    <div className='flex justify-start items-center gap-x-2'><BiUserCircle className='text-3xl text-cyan-500' /> <h2 className='my-1'>{book.Author}</h2></div>
                    <div className='flex justify-start items-center gap-x-2'><FaLanguage className='text-3xl text-orange-500' /> <h2 className='my-1'>{book.Language}</h2></div>
                    <div className='flex justify-start items-center gap-x-2'><VscCopy className='text-3xl text-amber-500' /> <h2 className='my-1'>{book.Copies}</h2></div>
                    <div className='flex justify-start items-center gap-x-2'><VscLocation className='text-3xl text-green-500' /> <h2 className='my-1'>{book.Location}</h2></div>
                    <div className='justify-between items-center gap-x-2 mt-4 p-4 flex'>
                        <BiShow className='text-3xl text-blue-700 hover:text-black cursor-pointer' onClick={()=>{setModal(true)}}/>
                        <Link to={`/book/get/${book._id}`}><BsInfoCircle className='text-3xl hover:text-violet text-green-700'/></Link>
                        <Link to={`/book/update/${book._id}`}><AiOutlineEdit className='text-3xl hover:text-violet text-yellow-700'/></Link>
                        <Link to={`/book/remove/${book._id}`}><AiOutlineDelete className='text-3xl hover:text-violet text-red-700'/></Link>
                    </div>
                    <div>
                        {modal && (<BookModal book={book} onClose={()=>{setModal(false)}}/>) }
                    </div>
                </div>

            
        </>
    )
}

export default SingleCard


{/* <div key={element._id} className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
<h2 className='absolute  top-1 right-2 px-4 py-1 bg-red-600 rounded-lg '>{element.publication_date.split('T')[0]}</h2>
<h4 className='my-2 text-black-800'>{index+1}</h4>
<div className='flex justify-start items-center gap-x-2 '><PiBookOpenTextLight className='text-red-300 text-2xl '/><h2 className='my-1'>{element.BookTitle}</h2></div>
<div className='flex justify-start items-center gap-x-2'><BiUserCircle className='text-red-300 text-2xl'/><h2 className='my-1'>{element.Author}</h2></div>
<div className='flex justify-start items-center gap-x-2'><VscCopy className='text-blue-500 text-3xl'/><h2 className='my-1'>{element.Copies}</h2></div>
<div className='flex justify-start items-center gap-x-2'><FaLanguage className='text-amber-500 text-3xl'/><h2 className='my-1'>{element.Language}</h2></div>
<div className='flex justify-start items-center gap-x-2'><VscLocation className='text-green-500 text-3xl'/><h2 className='my-1'>{element.Location}</h2></div>
<div className='flex justify-between items-center gap-x-2 mt-4 p-4 '>
    <Link to={`/book/get/${element._id}`}><BsInfoCircle className='text-2xl text-green-600  hover:text-violet '/></Link>
    <Link to={`/book/update/${element._id}`}><AiOutlineEdit className='text-2xl text-yellow-500 hover:text-violet'/></Link>
    <Link to={`/book/remove/${element._id}`}><AiOutlineDelete className='text-2xl text-red-500 hover:text-violet'/></Link>

</div>

</div> */}