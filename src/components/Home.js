import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  const Navigate = useNavigate()
  return (
    <>
      <div className="home-container">
      <div className="home-card-container">
        <h1>Filter-Images</h1>
        <h2>Welcome to the image finder. Here you can get your favourite images</h2>
        <div className="button-box">
        <button className="btns" onClick={() => Navigate("/search")} >Ready for searching</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home