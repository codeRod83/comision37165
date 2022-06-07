import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import { getFirestoreApp } from './firebase/config'

getFirestoreApp()

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
