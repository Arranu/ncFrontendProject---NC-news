import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { LoggedInUser } from './context/users.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LoggedInUser >
            <App />
    </LoggedInUser >
  </BrowserRouter>
  )
