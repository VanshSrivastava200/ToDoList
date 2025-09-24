import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-blue-950 h-[100vh] w-[100vw] flex justify-center'>
       <Home/>
    </div>
  )
}

export default App
