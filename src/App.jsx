import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Header from './components/Header'

function App() {

  // Handle Bookmarks
  const [bookmark, setbookmark] = useState([])
  const handleBookmarks = (title) => {
    let newBookmark = [...bookmark, title]
    setbookmark(newBookmark)
    console.log(bookmark)
  }
  // Handle Read Minutes
  const [readMinutes, setreadMinutes] = useState(0)
  const handleReadMinutes = (readingTime) => {
    let { readTime } = readingTime;
    let prev = parseInt(readTime) + readMinutes;
    setreadMinutes(prev)
    console.log(prev);  // Logs the integer 5
  };
  

  return (
    
    <div className='container mx-auto p-5 exo'>
        <Header /> 

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 '>
          <div className='col-span-1 md:col-span-2  '><Blogs handleBookmarks={handleBookmarks} handleReadMinutes={handleReadMinutes}/></div>
          
          <div className='col-span-1 md:col-span-1 h-full'>
            <div className='md:sticky md:top-5'>
              <Bookmarks bookmark={bookmark} readMinutes={readMinutes}/>
            </div>
        </div>
        </div>

    </div>
    
  )
}

export default App
