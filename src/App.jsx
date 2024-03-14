import { useState,useContext } from 'react'
import './App.css'
import ArticleList from './Components/article-list'
import { Route, Routes } from 'react-router-dom'
import SingleArticle from './Components/single-article'
import UserList from './Components/user-list'
import Navbar from './Components/navbar'
import { UserContext } from './context/users'
function App() {
  const {user}=useContext(UserContext)
  return (
 
    <div>
      <h1>NC News</h1>
      <nav> 
      <Navbar/>
      </nav>
      <Routes>
        <Route path='/' element={<ArticleList />}/>
        <Route path='/articles/:article_id' element={<SingleArticle />} />
        <Route path='/users' element={<UserList/>}/>
      </Routes>
    </div>

  )
}

export default App
