import { useEffect, useState } from "react"
import Crud from "../../JavaScript/Crud";
import "./Residents.css"

export const Residents=({url})=>{
    const [character, getCh] =Crud(url);

    useEffect(()=>{
        getCh("");
    },[])
    
    console.log(character);

    return(
        <article className="resident">
            <header className="resident__header">
                <img className="resident__img" src={character?.image} alt="hola" />
                <div className="resident__status">
                    <div className="resident__circle" style={{ backgroundColor: `${(character?.status==="Dead")?"red":(character?.status==="Alive"?"green":"grey")}`}} ></div>
                    <div className="resident__value">{character?.status}</div>
                </div>
            </header>

            <section className="resident__info">
                <h3 className="resident__name">{character?.name}</h3>
                <hr className="resident__hr"  />
                <ul className="resident__list">
                    <li className="resident__item"><span className="resident__label">Specie : </span> <span className="resident__value">{character?.species}</span></li>
                    <li className="resident__item"><span className="resident__label">Origin : </span> <span className="resident__value" >{character?.origin.name}</span></li>
                    <li className="resident__item"> <span className="resident__label" >Episodes where appear : </span> <span className="resident__value" >{character?.episode.length}</span></li>
                </ul>
            </section>
            
            
        </article>
        
        
        
    )
}

export default Residents