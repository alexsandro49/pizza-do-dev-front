import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './home-page/HomePage.tsx'
import FormType from './enums/FormType.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage formType={FormType.signIn} />
  </React.StrictMode>,
)
