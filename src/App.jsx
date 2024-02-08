import { useState } from 'react'
import './App.css'
import ArticleList from './Components/article-list'
import { Route, Routes } from 'react-router-dom'
import SingleArticle from './Components/single-article'
import UserList from './Components/user-list'
import Navbar from './Components/navbar'
function App() {
  const [rows, setRows] = useState([])

  return (
   
    <div>
      <h1>NC News</h1>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ArticleList rows ={rows} setRows={setRows}/>}/>
        <Route path='/articles/:article_id' element={<SingleArticle/>}/>
        <Route path='/users' element={<UserList/>}/>
      </Routes>
    </div>
    
  )
}

export default App
