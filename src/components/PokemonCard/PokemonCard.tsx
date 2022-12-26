import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IPokemonData} from "../../interfaces/interfasePokemon";
import css from './PokemonCard.module.css'


interface IProps {
    pokemon: IPokemonData
    setPokemonArray:any
    pokemonArray:IPokemonData[]
}
const PokemonCard: FC<IProps> = ({pokemon,setPokemonArray,pokemonArray}) => {


    const func = () => {
        const element:any=document.getElementById(`${pokemon.id}`);
        element.style.display='none'
    };

    return (

            <div id={`${pokemon.id}`} className={css.cardPokemon} onClick={()=>{
                func()
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