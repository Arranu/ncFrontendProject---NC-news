import './App.css'
import ArticleList from './Pages/article-list'
import { Route, Routes } from 'react-router-dom'
import SingleArticle from './Pages/single-article'
import UserList from './Pages/user-list'
import Navbar from './Components/navbar'
import TopicsList from './Pages/topics-list'
import SingleTopic from './Pages/single-topic'
function App() {
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
        <Route path='/topics' element={<TopicsList/>}/>
        <Route path='/topics/:topic' element={<SingleTopic/>}/>
      </Routes>
    </div>

  )
}

export default App
