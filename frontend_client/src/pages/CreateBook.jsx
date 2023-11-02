import React from 'react';
import { useState, useCallback, useContext, useEffect } from 'react';
import { Spinner, Backbutton } from '../Components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import {ToastContainer,useToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useSnackbar } from 'notistack';






const CreateBook = () => {
  const {enqueueSnackbar}=useSnackbar()
  const [BookTitle, setTitle] = useState('')
  const [Author, setAuthor] = useState('')
  const [Language, setLanguage] = useState('')
  const [Location, setLocation] = useState('')
  const [Copies, setCopies] = useState(0)
  const [publication_date, setPublish] = useState(' ')
  const [loading, setLoading] = useState('')
  const navigate = useNavigate();
   
  const handlebook = () => {
    const data = { BookTitle, Copies, Author, Language, Location, publication_date }
    setLoading(true)
    
    axios.post("http://localhost:8000/book/", data)
      .then( () => { setLoading(false);
         enqueueSnackbar("Book Detail Created",{variant:'success'});
          navigate('/') })
      .catch((error) => { setLoading(false);
         enqueueSnackbar("Book Details not Created,please check",{variant:'error'});
         console.log(error.message);  })
  };

  return (
    <>
      <div className='p-4'>
        <Backbutton />
        <h1 className='text-3xl my-4'>Create Book</h1>
        {loading ? <Spinner /> : ''}
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Title</label>
            <input type='text' value={BookTitle} onChange={(e) => { setTitle(e.target.value) }} className='border-2 border-gray-700 px-5 py-3 w-full' />
            <label className='text-xl mr-4 text-gray-500'>Author</label>
            <input type='text' value={Author} onChange={(e) => { setAuthor(e.target.value) }} className='border-2 border-gray-700 px-5 py-3 w-full' />
            <label className='text-xl mr-4 text-gray-500'>Language</label>
            <input type='text' value={Language} onChange={(e) => { setLanguage(e.target.value) }} className='border-2 border-gray-700 px-5 py-3 w-full' />
            <label className='text-xl mr-4 text-gray-500'>Copies</label>
            <input type="number" value={Copies} onChange={(e) => { setCopies(e.target.value) }} className='border-2 border-gray-700 px-5 py-3 w-full' />
            <label className='text-xl mr-4 text-gray-500'>Publish Year</label>
            <input type="date" value={publication_date} onChange={(e) => { setPublish(e.target.value) }} className='border-2 border-gray-700 px-5 py-3 w-full ' />
            <label className='text-xl mr-4 text-gray-500'>Shelf-Location</label>
            <input type='text' value={Location} onChange={(e) => { setLocation(e.target.value) }} className='border-2 border-gray-700 px-5 py-3 w-full' />
            <div>
              
            <button type='submit' onClick={ handlebook} className='p-2 bg-sky-300 m-10 w-4/5 mx-auto block text-center justify-center'>Submit Data!</button>
            {/* <ToastContainer /> */}
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default CreateBook