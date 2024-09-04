import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HoverProvider } from './contexts/Cursor.context'
import { Analytics } from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Analytics />
    <BrowserRouter>
      <HoverProvider>
        <App />
      </HoverProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
