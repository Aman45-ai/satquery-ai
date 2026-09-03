
import { useState } from 'react'
import Sidebar from '../layout/Sidebar'
import ProcessingState from './analysis/ProcessingState'
import ResultState from './analysis/ResultState'
import InputState from './analysis/InputState'
const NewAnalysis = () => {
  const [status, setStatus] = useState("result")
  return (
    <div className='grid grid-cols-[240px_1fr]'>
      <Sidebar />
      {status === "input" && <InputState setStatus={setStatus} />}
      {status === "processing" && <ProcessingState />}
      {status === "result" && <ResultState />}
    </div>
  )
}

export default NewAnalysis
