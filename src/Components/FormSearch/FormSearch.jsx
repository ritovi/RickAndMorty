import { useRef } from "react"
import "./FormSearch.css"

const FormSearch=({setOtra})=>{

    const referencia =useRef();
    
    // console.log(referencia);

    const funcion =(e)=>{
         e.preventDefault();
         setOtra(referencia.current.value.trim())
    }

    return(
        <form className="form" onSubmit={funcion}>
            <input  className="form__input" ref = {referencia} type="text" /> 
            <button className="form__button">Search</button>
        </form>
    )
}

export default FormSearch