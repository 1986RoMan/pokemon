import React from 'react';
import './App.css';
import {PokemonsList} from "./components";
import {Routes, Route,Navigate } from "react-router-dom"
import {PokemonInfo} from "./components/PokemonInfo/PokemonInfo";
import {MainLayout} from "./layouts/MainLayout";
import {SearchPage} from "./pages/SearchPage";


function App() {

  return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<Navigate to={'pokemons'} />}/>
            <Route path={'pokemons'} element={<PokemonsList/>}/>
            <Route path={'pokemons/:id'} element={<PokemonInfo/>}/>
            <Route path={'searching'} element={<SearchPage/>}/>
        </Route>
    </Routes>


  );
}

export default App;
