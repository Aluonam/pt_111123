import React, { useState } from 'react'

const BorrarLetra = () => {

    const [fraseUsuario, setFraseUsuario] = useState("aún no ha escrito nada");
    const [letraInput, setLetraInput] = useState("a");
    const [nuevaFrase, setNuevaFrase] = useState()

    const handleEliminarLetra = (letra)=>{
        
        const copyFrase = structuredClone(fraseUsuario.split(""))
        const eliminarLetra = copyFrase.filter((elem)=> elem !== letra)
        setNuevaFrase( eliminarLetra.join(""))
    }

  return (
    <>
    <h3>Borrar letra de frase que scribe el usuario</h3>
    <br/>
    <h5>Introduzca una frase</h5>
    <input onChange={(e)=>{setFraseUsuario(e.target.value)}}></input>
    <br/>
    <h5>Introduzca la letra que desee eliminar</h5>
    <input onChange={(e)=>{setLetraInput(e.target.value)}} type="text" required minlength="1" maxlength="1" ></input>
    <br/>
    <button onClick={()=>{handleEliminarLetra(letraInput)}}>eliminar letra</button>
    <br/>
    {nuevaFrase}
    </>
  )
}

export default BorrarLetra