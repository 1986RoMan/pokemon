import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pokemonService} from "../../services";
import {IPokemon, IPokemonData, IServerResponcePokemons} from "../../interfaces/interfasePokemon";

interface IPokemonInitional{
    pokemons:IPokemon[],
    next:string|null
    prev:string|null
    pokemon:IPokemonData|null
}

const initialState:IPokemonInitional={
    pokemons:[],
    next:null,
    prev:null,
    pokemon:null
};
const allPokemons = createAsyncThunk<IServerResponcePokemons,{offset:string}>(
   'allPokemonSlice/allPokemons',
 async ({offset})=>{
       const {data} = await pokemonService.getAllPokemon(offset)
       return data

});
 const searchName=createAsyncThunk<IPokemonData,{ser:any}>(
     'allPokemonSlice/searchName',
     async ({ser})=>{
         const {data} = await pokemonService.getPokemonByName(ser);
         return data
     }
 )
const allPokemonSlice = createSlice({
   name:'allPokemonSlice',
    initialState,
    reducers:{}
    ,
    extraReducers:builder => {
       builder
           .addCase(allPokemons.fulfilled,((state, action) => {
               state.pokemons=action.payload.results
               state.next=action.payload.next
               state.prev=action.payload.previous
           }))
           .addCase(searchName.fulfilled,((state, action) => {
               state.pokemon=action.payload
           }))
    }
});

const {reducer:pokemonReducer,actions:{}} = allPokemonSlice;
const pokemonActions={
    allPokemons,
    searchName
}

export {
    pokemonReducer,
    pokemonActions
}
