import React from 'react'
import Navbar from '../../components/common/Navbar'
import SidePannel from '../../components/common/SidePannel'

const Settings = () => {
  return (
    <>
        <Navbar/>
        <SidePannel/>
        <div className='mx-75 my-35'>
           <h1 className='text-center text-3xl '> Settings </h1> 
        </div>
    </>
  )
}

export default Settings