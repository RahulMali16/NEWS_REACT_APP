
import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import NewBoard from './Components/NewBoard.jsx'
const App = () => {
  const [category, setcategory] = useState("general")
  return (
    <div>
      <Navbar setcategory={setcategory}></Navbar>
      <NewBoard category={category}></NewBoard>
      
      </div>
  )
}

export default App