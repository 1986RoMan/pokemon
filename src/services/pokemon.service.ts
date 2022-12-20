import {axiosInstance} from "./axios.service";
import {urls} from "../constans/urls";
import {AxiosResponse} from "axios";
import {IPokemon, IPokemonData, IServerResponcePokemons} from "../interfaces/interfasePokemon";

type Res<T>=Promise<AxiosResponse<T>>

const pokemonService={
    getAllPokemon:(offset:string,limit=20):Res<IServerResponcePokemons> => axiosInstance.get(urls.pokemon,{params:{offset,limit:20}}),
    getPokemonByName:(name:string):Res<IPokemonData> => axiosInstance.get(`${urls.pokemon}/${name}`)
}

export {pokemonService}