import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Agent from './pages/Agents/Agent'
import Agents from './pages/Agents/Agents'
import Home from './pages/Home/Home'
import Infos from './pages/Infos/Infos'
import Weapon from './pages/Weapons/Weapon'
import Weapons from './pages/Weapons/Weapons'
import Maps from './pages/Maps/Maps'
import Map from './pages/Maps/Map'

function App() {

  const [actualPage, setactualPage] = useState('home')

  return (
      <>  
          {
            actualPage !== 'home' ? <Navigation actualPage={actualPage} setactualPage={setactualPage} /> : null
          }
          <Routes>
            <Route path='/' element={<Home setactualPage={setactualPage} />} />
            <Route path='/infos' element={<Infos />} />
            <Route path='/infos/agents' element={<Agents />} />
            <Route path='/infos/agents/:id' element={<Agent />} />
            <Route path='/infos/weapons' element={<Weapons />} />
            <Route path='/infos/weapons/:id' element={<Weapon />} />
            <Route path='/infos/maps' element={<Maps />} />
            <Route path='/infos/maps/:id' element={<Map />} />
          </Routes>
      </>
  )

}
export default App
