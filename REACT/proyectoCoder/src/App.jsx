import { ItemCount } from './components/ItemCount/ItemCount'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import './App.css'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  //
 // let task = (num1, num2) => {
    
  //  return new Promise( (res, rej) => {

    //  if (num1 === 0) {
     //   res("es 0")
    //  } else { rej(num1/num2) }
 // })
//}

//task(20, 2)
  //  .then(resp => resp * 5)
   // .then(resp => console.log(resp))
   // .catch(err => console.log(err))
   // .finally(() => console.log("finally"))

  return (
    <div className='App'>

        <NavBar />

        <ItemListContainer saludo="Agustin"/>

        <ItemDetailContainer/>

        <ItemCount/>

    </div>
  )
  
}

export default App
