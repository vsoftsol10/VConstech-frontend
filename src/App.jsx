import React from 'react'
import './App.css'
import AuthLayout from '../src/layouts/AuthLayout';
import ContractorDashboard from './pages/contractor/ContractorDashboard';
import CreateNewProject from './pages/contractor/CreateNewProject';
import { Route, Routes } from 'react-router-dom';
import AddSiteEngg from './pages/contractor/AddSiteEngg';
import Notification from './pages/contractor/Notification';
import OurEngineers from './pages/contractor/OurEngineers';
import OurProjects from './pages/contractor/OurProjects';
import SEdashboard from './pages/siteEngineer/SEdashboard';
import SiteVault from './pages/siteEngineer/SiteVault';

function App() {

  return (
    <Routes>
      <Route path='/' element={<AuthLayout/>}/>
      <Route path='/contractorDashboard' element={<ContractorDashboard/>} />
      <Route path='/add-site-engg' element={<AddSiteEngg/>} />
      <Route path='/create-new-project' element={<CreateNewProject/>} />
      <Route path='/notifications' element={<Notification/>} />
      <Route path='/our-engg' element={<OurEngineers/>} />
      <Route path='/our-projects' element={<OurProjects/>} />
      <Route path='/site-engineer-dashboard' element={<SEdashboard/>} />
      <Route path='/vault' element={<SiteVault/>} />
    </Routes>
  )
}

export default App
