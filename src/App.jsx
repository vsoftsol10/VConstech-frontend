import React from 'react'
import './App.css'
import AuthLayout from '../src/layouts/AuthLayout';
import ContractorDashboard from './pages/contractor/ContractorDashboard';
import { Route, Routes } from 'react-router-dom';
function App() {

  return (
    <Routes>
      <Route path='/' element={<AuthLayout/>}/>
      <Route path='/contractorDashboard' element={<ContractorDashboard/>} />
    </Routes>
  )
}

export default App
