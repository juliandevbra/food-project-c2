import React from 'react'
import lobo from './lobo.png'
const LoboEstepario = () => {

  return (
    <div className='lobo-estepario'>
        <img width={200} className='lobo' src={lobo} alt='lobo'/>
        <h3>Total: salario*6</h3>
    </div>
  )
} 

export default LoboEstepario