import { Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './dashboard/Dashboard'
import LoginForm from './forms/LoginForm'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
