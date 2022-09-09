import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Navigator = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default Navigator