import React, { useCallback, useContext, useState, useEffect } from 'react';
import axios from "axios";
import { Spinner, Backbutton } from '../Components';
import { Link } from 'react-router-dom';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import '../index.css'
import { BooksCard, BooksTable } from '../Components/HomePage/index'
const Bookslist = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false);
    const [show, setShowtype] = useState('table')
    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:8000/book/")
            .then((response) => {
                console.log(response.data.books);
                const data = response.data.books;
                setBooks(data)
                setLoading(false)
            }).catch((error) => { console.log(error.message) })
    }, [])
    return (
        <>
            <div className='p-4'>
                <div className='flex justify-center items-center gap-x-4'>
                    <button type='submit' onClick={() => { setShowtype('table') }} className='bg-amber-300 hover:bg-pink-600 px-4 py-1 rounded-lg'>Table</button>
                    <button type='submit' onClick={() => { setShowtype('Cards') }} className='bg-amber-300 hover:bg-pink-600 px-4 py-1 rounded-lg'>Cards</button>
                </div>
            </div>



            <div className='p-4'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl my-8  '>BooksList</h1>
                    <Link to="/book/create"><MdOutlineAddBox className='text-sky-800 text-4xl' /></Link>
                </div>
                {loading ? <Spinner /> : show === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)}
            </div>
        </>
    )
}

export default Bookslist