import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'

const Routing = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/index.html' element={<Home/>} />

      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default Routing
