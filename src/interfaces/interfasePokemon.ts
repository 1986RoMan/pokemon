 export interface IPokemon {
    name:string,
    url:string
}

export interface IServerResponcePokemons {
    count: number,
    next: string,
    previous: null,
    results: IPokemon[]
}

export interface IStatus {
     base_stat:number,
     stat:{
         name:string
     }
 }

 export interface IPokemonData{
    name:string,
    id:number,
    stats:IStatus[]
    sprites:{
        front_shiny:string
        back_default:string
        back_shiny:string
        front_default:string
    }
}