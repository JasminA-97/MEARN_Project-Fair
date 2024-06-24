import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContextAPI from './context/ContextAPI.jsx'
import AuthContext from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  `  <AuthContext>
        <ContextAPI>
          <BrowserRouter>
              <App />
              <ToastContainer position='top-center' theme='colored' autoClose={3000} />
            </BrowserRouter>
        </ContextAPI>
    </AuthContext>`
  </React.StrictMode>,
)
