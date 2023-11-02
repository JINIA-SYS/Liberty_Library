import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenLight } from 'react-icons/pi';

import { VscLocation, VscCopy } from 'react-icons/vsc';
import { PiBook, PiBookOpenTextLight } from 'react-icons/pi';
import { FaLanguage } from 'react-icons/fa';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { BiUserCircle,BiShow } from 'react-icons/bi';
import { MdOutlineEdit, MdOutlineDelete } from 'react-icons/md';
import { useState,useCallback,useContext,useEffect } from 'react';
const BookModal = ({book,onClose}) => {

  return (
    <>
    <div className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
        BookModal
        <div onClick={(e)=>{console.log(e.stopPropagation()); e.stopPropagation()}} 
        className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative '
        >
            <AiOutlineClose
            className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
            onClick={onClose}
            />
            <div className='flex justify-start gap-x-2 items-center'><PiBookOpenLight className='text-3xl text-pink-500' /><h2 className='my-1'>{book.BookTitle}</h2></div>
            <div className='flex justify-start gap-x-2 items-center'><BiUserCircle className='text-3xl text-cyan-500' /><h2 className='my-1'>{book.Author}</h2></div>
            <div className='flex justify-start gap-x-2 items-center'><FaLanguage className='text-3xl text-orange-500' /><h2 className='my-1'>{book.Language}</h2></div>
            <div className='flex justify-start gap-x-2 items-center'><h2 className='my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Dolorum eos aut minima hic illo. Odit tempora quod nemo qui quidem eaque sed sit voluptates? Nam, deserunt? Ipsam quia ex placeat quasi doloremque vero tempora consectetur alias reiciendis ab rem, consequatur quidem repellendus provident harum temporibus blanditiis delectus minima possimus odit voluptates assumenda officiis ullam repudiandae! Ullam impedit, possimus voluptatibus reiciendis soluta quis consequatur at quam facere necessitatibus suscipit! Nemo quia ullam veritatis dolore, vel eaque, quis laborum, ut unde impedit possimus voluptate autem corrupti est laudantium recusandae
                 iure sequi inventore? Odio cum veritatis nulla totam quidem exercitationem nesciunt reprehenderit libero?!</h2></div>
            {/* <div className='flex justify-start gap-x-2 items-center'><h2 className='my-1'>{book.publication_date.split('T')[0]}</h2></div>
            <div className='flex justify-start gap-x-2 items-center'><h2 className='my-1'>{book.Location}</h2></div> */}


        </div>
        
        
        </div>
    </>
  )
}

export default BookModal