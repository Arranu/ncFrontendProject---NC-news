import { useState } from 'react'
import './App.css'
import Header from './Components/header'
import ArticleList from './Components/article-list'

function App() {
  const [rows, setRows] = useState([])

  return (
   
    <div>
      <Header />
      <ArticleList rows ={rows} setRows={setRows}/>
    </div>
    
  )
}

export default App
