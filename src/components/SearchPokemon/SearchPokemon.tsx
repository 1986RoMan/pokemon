import React, {FC} from 'react';
import {pokemonActions} from "../../redux/slices/pokemon.slice";
import {useAppDispatch, useAppSelector} from "../../hooks/hook";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {PokemonInfo} from "../PokemonInfo/PokemonInfo";

const SearchPokemon:FC = () => {
    const navigate = useNavigate();
    const {handleSubmit,register,reset} = useForm();
    const {pokemon} = useAppSelector(state => state.pokemonReducer);
    const dispatch = useAppDispatch();
    const mySubmit = (se:any) => {
        console.log(se.search)
        const searchPokemon= se.search
        dispatch(pokemonActions.searchName({ser:searchPokemon}))
        reset()
    };
    console.log(pokemon?.name)
    return (
        <div>
            <form onSubmit={handleSubmit(mySubmit)}>
                <input placeholder={'Пошук покемона по назві'} {...register('search')}></input>
                <button onClick={()=>{navigate('/searching',{state:pokemon})}}>Шукати</button>
            </form>
        </div>
    );
};

export {SearchPokemon};