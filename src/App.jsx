
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookMarks,setBookmark] =useState([])

  const [readingTime,setreadingTime] =useState(0)

  const handleAddBookmark = blog =>{
    const newBookmark = [...bookMarks,blog];
    setBookmark(newBookmark)
  }

  const handleReadingTime = (id,time) =>{
    const newreadingTime = readingTime + time
    setreadingTime(newreadingTime)
  }
// removed the read of bookmark
//  const remainingBookmark = bookMarks.filter(bookMark=> bookMark.id !== id)
//  setBookmark(remainingBookmark)
  

  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddBookmark={handleAddBookmark}
      handleReadingTime={handleReadingTime}
      ></Blogs>
      <Bookmarks 
      bookMarks={bookMarks}
      readingTime={readingTime}
      ></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
