import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './app'
import './index.css'

const root = createRoot(document.getElementById('root')!)
root.render(<><App className='w-screen h-screen' /></>)
