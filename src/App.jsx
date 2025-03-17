import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Portfolio from './Portfolio'
import Sidebar from './sidebar/Sidebar'

function App() {

  return (
    <div className="portfolio-container">
      <Sidebar />
      <Portfolio />
    </div>
  )
}

export default App
