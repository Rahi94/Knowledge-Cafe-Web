
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'

import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'


function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmarks = blog =>{
    console.log(blog)
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (id,time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
    // remove read bookmark item
    // console.log('removing bookmark',id)
    const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookMarks);
  }
  return (
    <>
        <Header></Header>
        <div className='md:flex max-w-6xl mx-auto'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>
    </>
  )
}

export default App
