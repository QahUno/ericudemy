import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  )
}

export default App