import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {pokemonReducer} from "./slices/pokemon.slice";

const rootReducer=combineReducers({
    pokemonReducer
})

const setupStore=()=>configureStore({
    reducer: rootReducer
}
)

type RootState = ReturnType<typeof rootReducer>
type AppStore= ReturnType<typeof setupStore>
type AppDispatch= AppStore['dispatch']

export type {
    RootState,
    AppDispatch,
    AppStore
}
export {
    setupStore
}