import React from 'react'
import { useCallback, useContext, useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Spinner,Backbutton } from '../Components';

const GetBook = () => {
  const [book, setBook] = useState([])
  const [loading, setLoading] = useState(false)
  const { ID } = useParams()
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:8000/book/${ID}`)
      .then((response) => { const data = response.data.Book; setBook(data); setLoading(false); console.log(data) })
      .catch((error) => { setLoading(false); console.log(error.message) })
  }, [])

  return (
    <div className='p-4'>
      <Backbutton />
      <h1 className='text-3xl my-4'>Book Details:</h1>
      {loading ? (<Spinner />) : (
        <div className='flex flex-col border-2 border-sky-400'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id:</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title:</span>
            <span>{book.BookTitle}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author:</span>
            <span>{book.Author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Languages:</span>
            <span>{book.Language}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Copies</span>
            <span>{book.Copies}</span>
          </div>


          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Shelf-Location</span>
            <span>{book.Location}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Publish-Date</span>
            <span>{book.publication_date}</span>
          </div>


          <div className='my-4'><span className='text-xl mr-4 text-gray-500 '>Create_Time</span><span>{new Date(book.createdAt).toString()}</span></div>
          <div className='my-4'><span className='text-xl mr-4 text-gray-500 '>Update_Time</span><span>{new Date(book.updatedAt).toString()}</span></div>

        </div>
      )}
    </div>
  )
}

export default GetBook