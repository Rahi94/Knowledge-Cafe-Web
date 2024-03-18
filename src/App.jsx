
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Blog from './Components/Blog/Blog'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from 'react'


function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = blog =>{
    console.log('adding soon');
  }
  return (
    <>
        <Header></Header>
        <div className='md:flex max-w-6xl mx-auto'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks></Bookmarks>
        </div>
    </>
  )
}

export default App
