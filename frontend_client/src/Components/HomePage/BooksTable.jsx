import React from 'react'
import { Spinner, Backbutton } from '../index'
import { Link } from 'react-router-dom'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineEdit, MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import { BsInfoCircle } from 'react-icons/bs';

const BooksTable = ({ books }) => {

    return (
        <>
            <table className=' w-full border-spacing-2 border-separate '>
                <thead>
                    <tr>
                        <th className='border border-slate-600 rounded-md' >Sr.No</th>
                        <th className='border border-slate-600 rounded-md' >Title</th>
                        <th className='border border-slate-600 rounded-md' >Author</th>
                        <th className='border border-slate-600 rounded-md' >Language</th>
                        <th className='border border-slate-600 rounded-md' >Copies</th>
                        <th className='border border-slate-600 rounded-md ' >Publish Year</th>
                        <th className='border border-slate-600 rounded-md ' >Shelf-Location</th>
                        <th className='border border-slate-600 rounded-md ' >Modifications</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((element, index) => (

                        <tr key={element._id} className=''>
                            <td className='border border-slate-600 rounded-md text-center'>{index + 1}</td>
                            <td className='border border-slate-600 rounded-md text-center'>{element.BookTitle}</td>
                            <td className='border border-slate-600 rounded-md text-center'>{element.Author}</td>
                            <td className='border border-slate-600 rounded-md text-center'>{element.Language}</td>
                            <td className='border border-slate-600 rounded-md text-center'>{element.Copies}</td>
                            <td className='border border-slate-600 rounded-md text-center '>{element.publication_date}</td>
                            <td className='border border-slate-600 rounded-md text-center '>{element.Location}</td>
                            <td className='border border-slate-600 rounded-md text-center '>
                              
                               <Link to={`/book/get/${element._id}`}><BsInfoCircle className='text-2xl text-green-600' /></Link>
                                <Link to={`/book/update/${element._id}`}><AiOutlineEdit className='text-2xl text-yellow-600' /></Link>
                                <Link to={`/book/remove/${element._id}`}><AiOutlineDelete className='text-2xl text-red-600' /></Link>
                            
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default BooksTable