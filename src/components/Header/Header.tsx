import React, {FC} from 'react';
import {SearchPokemon} from "../SearchPokemon/SearchPokemon";

const Header:FC = () => {
    return (
        <div style={{width:'100%',height:"250px",background:'silver'}}>
            <h1>POKEMON INFO && Fighting</h1>
            <SearchPokemon/>
        </div>
    );
};

export {Header};