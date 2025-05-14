import Navbar from './components/Navbar'
import RoutesIndex from './routes/RoutesIndex'
import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
