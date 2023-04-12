import React from 'react'
import ContextProvide from './context/ContextProvide'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvide>
        <App />
      </ContextProvide>
    </BrowserRouter>
  </React.StrictMode>,
)
