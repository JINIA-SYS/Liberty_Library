import React from "react";
import { useState, useCallback, useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {GetBook,Bookslist,CreateBook,DeleteBook,UpdateBook} from "./pages/index"
import './index.css'

const App = () => {
  return (
    <>
    <Routes>
    {/* <h1 className=' bg-red-600 text-white '>Hello World</h1> */}

    <Route path="/"  className=' bg-red-600 text-white ' element={<Bookslist/>}/>
    <Route path="/book/create" element={<CreateBook/>}/>
    <Route path="/book/get/:ID" element={<GetBook/>}/>
    <Route path="/book/update/:ID" element={<UpdateBook/>}/>
    <Route path="/book/remove/:ID" element={<DeleteBook/>}/>
  </Routes>
    </>


)
}

{/* <Route path="" element={</>}/> */}
export default App












// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
