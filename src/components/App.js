import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navigator from './Navigator'
import Search from './Search'
import Error from './Error'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigator />} >
          <Route index element={<Home />} />
          <Route path='search' element={<Search />} />
          <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App