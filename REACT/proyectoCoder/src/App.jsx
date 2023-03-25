import { NavBar } from './components/NavBar/NavBar'
import './App.css'
import { ItemListContainer } from './components/Saludo/ItemListContainer'


function App() {

  return (
    <div className='App'>

        <NavBar />

        <div>
        <ItemListContainer saludo="Agustin"/>
        </div>

    </div>
  )
  
}

export default App
