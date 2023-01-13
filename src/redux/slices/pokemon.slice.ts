import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pokemonService} from "../../services";
import {IPokemon, IPokemonData, IServerResponcePokemons} from "../../interfaces/interfasePokemon";
import {AxiosError} from "axios";
import ISe from "../../components/SearchPokemon/SearchPokemon";

export interface IError {
    status_code:number,
    message:string,
    success:boolean
}

interface IPokemonInitional{
    pokemons:IPokemon[],
    next:string|null
    prev:string|null
    pokemon:IPokemonData|null,
    errors:IError|null
}

const initialState:IPokemonInitional={
    pokemons:[],
    next:null,
    prev:null,
    pokemon:null,
    errors:null
};

const allPokemons = createAsyncThunk<IServerResponcePokemons,{offset:string}>(
   'allPokemonSlice/allPokemons',
 async ({offset},{rejectWithValue})=>{
       try {
       const {data} = await pokemonService.getAllPokemon(offset)
       return data
       }
       catch (e) {
           const errror= e as AxiosError
           return rejectWithValue(errror)
       }

});
 const searchName=createAsyncThunk<IPokemonData,{ser:ISe}>(
     'allPokemonSlice/searchName',
     async ({ser})=>{
         const {data} = await pokemonService.getPokemonByName(ser.search);
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
           .addDefaultCase((state, action) => {
                   state.errors = action.payload
                   console.log(state.errors)
           })
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
