import React, {FC} from 'react';
import {useLocation} from "react-router-dom";
import {IPokemonData} from "../../interfaces/interfasePokemon";

const PokemonInfo:FC = () => {

    const state = useLocation().state as IPokemonData;

    console.log(state.sprites.front_shiny)
    return (
        <div>
            <div><h2>{state.name}</h2></div>
            <div><img style={{width:'200px'}} src={state.sprites.front_shiny} alt=""/>
                <img style={{width:'200px'}}  src={state.sprites.back_shiny} alt=""/>
            </div>
            <div>
                {
                    state.stats.map((val,index) => <div key={index} style={{display:'flex'}}><h3>{val.stat.name}</h3>
                        <h3>--</h3><h3>{val.base_stat}</h3></div>)
                }
            </div>
        </div>
    );
};

export {PokemonInfo};