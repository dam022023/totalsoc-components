import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chart from './pages/Chart'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
