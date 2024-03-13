import React from 'react'

const LoginForm = ({handleClick}) => {
  return (
    <div>
        <h3 >Debe ingresar al sitio</h3>
        <input role='email' type="text" />
        <input data-testid='password' type="password" />
        <button onClick={handleClick}>Enviar</button>
    </div>
  )
}

export default LoginForm