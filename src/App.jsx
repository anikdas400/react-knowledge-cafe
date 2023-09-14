
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookMarks,setBookmark] =useState([])
  const handleAddBookmark = blog =>{
    const newBookmark = [...bookMarks,blog];
    setBookmark(newBookmark)
  }
  

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
      <Bookmarks bookMarks={bookMarks}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
