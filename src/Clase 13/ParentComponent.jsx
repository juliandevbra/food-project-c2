import React, { useState } from 'react'
import ChildComponent from './ChildComponent'
import { useGlobalStates } from '../Context/Context'


const ParentComponent = ({children}) => {
  const {salario, setSalario} = useGlobalStates()

  return (
    <div className='parent'>
      {children}
        <h1>ParentComponent</h1>
        {/* <ChildComponent /> */}
        <p>Salario: {salario}</p>
    </div>
  )
}

export default ParentComponent