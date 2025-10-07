import React from 'react'
import './App.css'
import AuthLayout from '../src/layouts/AuthLayout';
import ContractorDashboard from './pages/contractor/ContractorDashboard';
import CreateNewProject from './pages/contractor/CreateNewProject';
import { Route, Routes } from 'react-router-dom';
import AddSiteEngg from './pages/contractor/AddSiteEngg';
import Notification from './pages/contractor/Notification';
function App() {

  return (
    <Routes>
      <Route path='/' element={<AuthLayout/>}/>
      <Route path='/contractorDashboard' element={<ContractorDashboard/>} />
      <Route path='/add-site-engg' element={<AddSiteEngg/>} />
      <Route path='/create-new-project' element={<CreateNewProject/>} />
      <Route path='/notifications' element={<Notification/>} />
    </Routes>
  )
}

export default App
