import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import TitleName from './componentes/TitleName/TitleName'
import TitleProp from './componentes/TitleName/TitleProp'
import Back from './componentes/Back/Back'
import Home from './componentes/Home/Home'
import Goku from './componentes/Porta/Goku'
import Contact from './componentes/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Back />
      <TitleName />
      <Home />
      <Goku />
      <Contact />
    </div>
  )
}

export default App
