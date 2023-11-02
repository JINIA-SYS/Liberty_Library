import React from 'react'
import { useState,useEffect,useCallback,useContext } from 'react'
import axios from 'axios'
import { Backbutton,Spinner } from '../Components'
import { useParams,useNavigate } from 'react-router-dom';
// import {ToastContainer,useToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import {useSnackbar} from 'notistack'



const DeleteBook = () => {
  const {enqueueSnackbar}=useSnackbar()
  const [loading, setLoading] = useState(false)
  const navigate=useNavigate()
  const {ID}=useParams()
  const RemoveBook=()=>{
    setLoading(true)
    axios.delete(`http://localhost:8000/book/${ID}`)
    .then(()=>{setLoading(false);
      enqueueSnackbar("Book Details Deleted Succesfully!",{variant:'success'});
      navigate('/')})
    .catch((error)=>{setLoading(false);
      
      enqueueSnackbar("Book Details Deletion Failure!",{variant:'error'});
      console.log(error.message);})
  }
  const turnback=()=>{
    setLoading(true)
    navigate('/');
    enqueueSnackbar("Books Data Survived!",{variant:'info'});
    setLoading(false)
  }

  return (
    <>
    <div>

      <Backbutton/>
      <h1 className='text-3xl my-4'> DeleteBook</h1>

      {loading?<Spinner/>:''}
      <div className='flex flex-col items-center border-2 border-violet-700 rounded-xl w-[600px] p-10 mx-auto'>
        <h3 className='text-2xl'>Are You Sure you want to delete this book?</h3>
     <div>
      
       <button type="submit" onClick={RemoveBook} className='p-2 bg-red-800 text-white m-3 w-1/4' >Yes,Delete </button>
        <button type='submit' onClick={turnback} className='p-2 bg-green-800 text-white m-3 w-1/4'>No</button>
      {/* <ToastContainer/> */}
     </div>

      </div>

      
      
      </div>
    </>
  )
}

export default DeleteBook