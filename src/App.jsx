import { useState } from 'react'
import Connects from './pages/connects'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Connects />
      
  )
}

export default App
