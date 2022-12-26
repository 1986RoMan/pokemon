import React, {FC, useEffect, useState} from 'react';

import {pokemonActions} from "../../redux/slices/pokemon.slice";
import {useAppDispatch, useAppSelector} from "../../hooks/hook";
import {IPokemonData} from "../../interfaces/interfasePokemon";
import {PokemonCard} from "../PokemonCard/PokemonCard";
import css from './PokemonsList.module.css'
import Loading from "../Loading/Loading";
import {Button} from "../Button/Button";
import {AiOutlineCloseSquare} from "react-icons/ai";
import {Modal} from "../Modal/Modal";


const PokemonsList:FC = () => {
const [pokemonArray,setPokemonArray] = useState<IPokemonData[]>([]);

    const [stan,setStan] = useState(false);
    const [winPokemon,setWinPokemon] = useState<IPokemonData>();
    const [modalActive,setModalactive] = useState<any>(true);
    const [state,setState] = useState<IPokemonData[]>([]);
    const {pokemons,next,prev} = useAppSelector(state => state.pokemonReducer);
    const dispatch = useAppDispatch();

    useEffect(()=>{
    dispatch(pokemonActions.allPokemons({offset:"0"}))
    },[])

  const id= pokemons.map(value => value.url.split('/').slice(-2)[0])

    useEffect(()=>{
        const arrayFetchPokemons = id.map(pokemon =>
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((response) => response.json())
        );
    Promise.all(arrayFetchPokemons)
            .then((responses) => {setState(responses)
            })
},[pokemons])

    const str= next?.split('/')[5].slice(15).split('&')[0]
    const str1= prev?.split('/')[5].slice(15).split('&')[0]
    const nextPage = () => {
        dispatch(pokemonActions.allPokemons({offset:`${str}`}))
    }

    const prevPage = () => {
        dispatch(pokemonActions.allPokemons({offset:`${str1}`}))
    };

           const sa = document.getElementsByClassName('wer')[0];
    const func = () => {
        const winer=pokemonArray.map((value,id) => value.stats.map(value1 => value1.base_stat)
            .reduce((partialSum, a) => partialSum + a, 0))
            .sort((a,b)=>            b-a
        )[0];
        console.log(winer);
        const filter = pokemonArray.find(value => value.stats.map(value1 => value1.base_stat)
            .reduce((partialSum, a) => partialSum + a, 0)===winer);
        setWinPokemon(filter)
    };
    return (
        <div className={'wer'} >

            <div className={ pokemonArray.length<1 ? css.exit : css.divFight}>
                { !winPokemon
                              ?

                    <div>
                        <Button disabled={pokemonArray.length<=1}  onClick={()=>{
                            setModalactive(true)
                            setStan(true)
                            setTimeout(()=>{
                                func()
                                setStan(false)
                            },4000)
                        }}>БІЙ</Button>
                        <div style={{display:'flex',flexWrap:"wrap",position:'relative'}}>
                            {pokemonArray?.map(value => <div
                                >{value.name}
                                <img style={{width: '200px'}}
                                     src={value.sprites.front_shiny} alt=""/>
                                <div  style={{ marginTop: '-250px',position:'absolute',paddingTop:'35px'}}>
                                    <AiOutlineCloseSquare
                                    style={{fontSize: '40px'}} onClick={() => {
                                    setPokemonArray(pokemonArray.filter(value1 => value1.id !== value.id))
                                }}/>
                                </div>
                            </div>
                        )
                        }
                        </div>
                        { stan &&
                            <Loading/>
                            }
                    </div>
                    :
                    <Modal active={modalActive} setActive={setModalactive}>
                        {winPokemon?.name.toLocaleUpperCase()}
                        <img style={{width: '300px'}}
                             src={winPokemon?.sprites.front_shiny} alt="{winPokemon.name}"/>
                        <div><h1>!!!!!!!!!!!!WIN!!!!!!</h1></div>
                    </Modal>

                }

            </div>
                <div className={css.List}>
                    {
                       state.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}
                                                         setPokemonArray={setPokemonArray}
                                                         pokemonArray={pokemonArray}
                       />)
                    }
            </div>
            <div className={css.btn}>
                <button disabled={prev===null} onClick={prevPage}>Попередня Сторінка</button>
                <button onClick={nextPage}>Наступна сторінка</button>
            </div>
        </div>
    );
};

export {PokemonsList};