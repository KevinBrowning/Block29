import { useState } from 'react'
import './App.css'
import AllPlayers from './AllPlayers'
import AddPlayerForm from './AddPlayerForm'

function App() {
  const [needsUpdating, setNeedsUpdating] = useState(false);
  
  return (
    <>
    <h1>Puppy Bowl</h1>
    <AddPlayerForm setNeedsUpdating={setNeedsUpdating}/>
    <AllPlayers setNeedsUpdating={setNeedsUpdating} needsUpdating={needsUpdating}/>
    </>
  )
}

export default App
