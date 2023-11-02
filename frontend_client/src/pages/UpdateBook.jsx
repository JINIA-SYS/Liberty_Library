
//import Section
import React from 'react'

import { useState, useCallback, useEffect, useContext } from 'react'
import { Spinner, Backbutton } from '../Components'
import axios from 'axios'
import { useParams } from 'react-router-dom'

// import {ToastContainer, toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'

const UpdateBook = () => {

  const {enqueueSnackbar}=useSnackbar()
  const [loading, setLoading] = useState(false)
  const [BookTitle, setBookTitle] = useState('')
  const [Author, setAuthor] = useState('')
  const [Language, setLanguage] = useState('')
  const [Copies, setCopies] = useState(0)
  const [Location, setLocation] = useState('')
  const [publication_date, setPublish] = useState('')
  const navigate = useNavigate()
  const { ID } = useParams();
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:8000/book/${ID}`).then((response) => {
      const data = response.data.Book;
      const date = data.publication_date.split('T')[0]
      console.log(data)

      setBookTitle(data.BookTitle); setAuthor(data.Author); setLanguage(data.Language); setCopies(data.Copies);
      setLocation(data.Location);
      setLoading(false)
      setPublish(date)

    }).catch((error) => { console.log(error.message); setLoading(false) })


  }, [])



  const changebook = () => {
    const data = { BookTitle, Author, Language, Copies, Location, publication_date };
    setLoading(true)
    axios.put(`http://localhost:8000/book/${ID}`, data)
      .then(() => { setLoading(false); 
        enqueueSnackbar('Book Details Updated',{variant:'success'});
       navigate('/'); })
      .catch((error) => { setLoading(false);
        enqueueSnackbar('Book Details Updation Failure,please check',{variant:'error'});
          console.log(error.message); })


  }


  return (
    <>
      <div className='p-4'>
        <Backbutton />
        <h1 className='text-3xl my-4'> UpdateBook </h1>
        {loading ? <Spinner /> : ''}
        <div className='flex flex-col border-2 border-violet-700 rounded-xl w-[600px] p-4 mx-auto '>
          <div className='my-4'>
            <label className='text-xl mr-4 text-amber-500'>Title</label>
            <input type="text" value={BookTitle} onChange={(e) => { setBookTitle(e.target.value) }} className='border-2 border-black-800 px-5 py-3 w-full' />
            <label className='text-xl mr-4 text-amber-500'>Author</label>
            <input type="text" value={Author} onChange={(e) => { setAuthor(e.target.value) }} className='border-2 border-black-800 px-5 py-3 w-full' />
            <label className='text-xl mr-4 text-amber-500'>Language</label>
            <input type="text" value={Language} onChange={(e) => { setLanguage(e.target.value) }} className='border-2 border-black-800 px-5 py-3 w-full' />
            <label className='text-xl mr-4 text-amber-500'>Copies</label>
            <input type="number" value={Copies} onChange={(e) => { setCopies(e.target.value) }} className='border-2 border-black-800 px-5 py-3 w-full' />
            <label className='text-xl mr-4 text-amber-500'>Publish Year</label>
            <input type="date" value={publication_date} onChange={(e) => { setPublish(e.target.value) }} className='border-2 border-black-800 px-5 py-3 w-full' />
            <label className='text-xl mr-4 text-amber-500'>Shelf-Location</label>
            <input type="text" value={Location} onChange={(e) => { setLocation(e.target.value) }} className='border-2 border-black-800 px-5 py-3 w-full' />
            <div>

              <button type='submit' onClick={changebook} className='p-2 bg-violet-400 m-10 w-4/5 mx-auto block text-center justify-center'>Update Here!</button>
              {/* <ToastContainer /> */}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
//Export Section 
export default UpdateBook