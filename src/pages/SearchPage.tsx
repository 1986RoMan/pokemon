import React, {FC} from 'react';

import {useAppDispatch, useAppSelector} from "../hooks/hook";

const SearchPage:FC = () => {
    const dispatch = useAppDispatch();
    const {pokemon} = useAppSelector(state => state.pokemonReducer);
    console.log(pokemon)
    return (
        <div>
            <div><h2>{pokemon?.name}</h2></div>
            <div><img style={{width:'200px'}} src={pokemon?.sprites.front_shiny} alt=""/>
                <img style={{width:'200px'}}  src={pokemon?.sprites.back_shiny} alt=""/>
            </div>
            <div>
                {
                    pokemon?.stats.map((val,index) => <div key={index} style={{display:'flex'}}><h3>{val.stat.name}</h3>
                        <h3>--</h3><h3>{val.base_stat}</h3></div>)
                }
            </div>
        </div>
    );
};

export {SearchPage};