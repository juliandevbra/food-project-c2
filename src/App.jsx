
import { useState } from 'react'
import './App.css'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'
import Dog from './Components/Dog'

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
    {show ? <ClassComponent/> : <FuncComponent/>}
    <button onClick={() => setShow(!show)}>
      Mostrar componente de {show ? 'función' : 'clase'}
    </button>
        {/* <Dog/> */}
    </>
  )
}

export default App
