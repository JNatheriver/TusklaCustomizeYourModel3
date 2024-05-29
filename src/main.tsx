import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './app.tsx'
import './index.css'

const root = createRoot(document.getElementById('root')!)
root.render(
  <main className='flex flex-1 flex-row'>
    <App />
  </main>
)
