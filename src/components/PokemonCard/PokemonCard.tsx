import React, {FC} from 'react';
import {IPokemonData} from "../../interfaces/interfasePokemon";
import css from './PokemonCard.module.css'
import {Link} from "react-router-dom";


interface IProps {
    pokemon: IPokemonData
    children?: any
    setClassZminna:(item:boolean)=>void
    setPokemonArray:any
    pokemonArray:IPokemonData[]
}
const PokemonCard: FC<IProps> = ({pokemon,setClassZminna,setPokemonArray,pokemonArray}) => {

    return (

            <div className={css.cardPokemon} onClick={()=>{
                setClassZminna(false)
                setPokemonArray([...pokemonArray,pokemon])
            }}
            >
                <div>{pokemon.name}</div>
                <div><img src={pokemon.sprites.front_shiny} alt=""/></div>
                <Link to={`${pokemon.id}`} state={pokemon}>  <button>Info Pokemon</button></Link>
            </div>

    );
};

export {PokemonCard};