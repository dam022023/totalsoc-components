import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Charts from './pages/Charts'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Charts />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
