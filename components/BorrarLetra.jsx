import React, { useState } from 'react'

const BorrarLetra = () => {

    const [fraseUsuario, setFraseUsuario] = useState("aún no ha escrito nada");
    const [letra, setLetra] = useState("a");



  return (
    <>
    <h3>Borrar letra de frase que scribe el usuario</h3>
    <br/>
    <h5>Introduzca una frase</h5>
    <input onChange={(e)=>{setFraseUsuario(e.target.value)}}></input>
    <br/>
    <h5>Introduzca la letra que desee eliminar</h5>
    <input onChange={(e)=>{e.target.value}} type="text" required minlength="1" maxlength="1" ></input>
    <br/>
    <button>eliminar letra</button>

    {fraseUsuario}
    </>
  )
}

export default BorrarLetra