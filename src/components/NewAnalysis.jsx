import React from 'react'
import Sidebar from '../layout/Sidebar'
import Analysis from '../components/analysis/Analysis'
const NewAnalysis = () => {
  return (
    <div className='grid grid-cols-[240px_1fr]'>
      <Sidebar />
      <Analysis />
    </div>
  )
}

export default NewAnalysis
