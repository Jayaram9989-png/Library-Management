import React from 'react'
import '../Styles/home.css'
import home from '../Images/homeimage.jpg'

const Home = () => {
  return (
    <>
        <div className='homepage'>
            <div className="content">
            <div className="text">
                <div className="header">LIBRARY</div>
                <div className="about">A library is a collection of books, and possibly other materials and media, that is accessible for use by its members and members of allied institutions. Libraries provide physical (hard copies) or digital (soft copies) materials, and may be a physical location, a virtual space, or both</div>
            </div>
            <div className="img">
                <img src={home} alt="" />
            </div>
            </div>
        </div>
    </>
  )
}

export default Home