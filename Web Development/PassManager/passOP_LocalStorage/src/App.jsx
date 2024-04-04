import { useState } from 'react'
import Navbar from './components/Navbar'
import Filler from './components/Filler'
import Button from './components/Button'
import Title from './components/Title'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' font-mono bg-gradient-to-tr from-purple-100 to-green-100 h-screen'>
        <Navbar/>
        <Filler/>
        <Footer/>
      </div>
    </>
  )
}

export default App
