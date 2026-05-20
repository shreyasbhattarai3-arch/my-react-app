import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import ThingsToRead from './ThingsToRead.jsx'
import './App.css'

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/things-to-read">Things to Read</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/things-to-read" element={<ThingsToRead />} />
      </Routes>
    </div>
  )
}

export default App