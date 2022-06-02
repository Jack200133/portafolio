import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import TitleName from './componentes/TitleName/TitleName'
import Back from './componentes/Back/Back'
import Home from './componentes/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Back />
      <TitleName />
      <Home />
    </div>
  )
}

export default App
