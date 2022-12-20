import React, {FC} from 'react';
import {Header} from "../components/Header/Header";
import {PokemonsList} from "../components/PokemonsList/PokemonsList";
import {SearchPokemon} from "../components/SearchPokemon/SearchPokemon";
import {Outlet} from "react-router-dom";

const MainLayout:FC = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export  {MainLayout};