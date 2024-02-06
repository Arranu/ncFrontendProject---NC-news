import { useState } from 'react'
import './App.css'
import Header from './Components/header'
import ArticleList from './Components/article-list'
import { Route, Routes } from 'react-router-dom'
import SingleArticle from './Components/single-article'
function App() {
  const [rows, setRows] = useState([])

  return (
   
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<ArticleList rows ={rows} setRows={setRows}/>}/>
        <Route path='/articles/:article_id' element={<SingleArticle/>}/>
      </Routes>
    </div>
    
  )
}

export default App
