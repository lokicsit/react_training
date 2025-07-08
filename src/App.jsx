import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './pages/about'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Toolbar from './components/Navigation/Toolbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Toolbar />
  
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />

</Routes>
  

      </>
  )
}
  export default App