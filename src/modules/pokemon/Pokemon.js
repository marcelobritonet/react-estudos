import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux';
import { getPokemon } from './pokemon.actions';

function Pokemon(props) {
    const {
        pokemonSelected,
        pokemonCachedList,
        onLoading,
        error,
        getPokemon
    } = props;

    const inputPokemonName = useRef(pokemonSelected.name);

    useEffect(() => {
        inputPokemonName.current.value = pokemonSelected.name;
    });

    return (
        <div>
            <h1>{ pokemonSelected.name }</h1>
            <img src={ pokemonSelected.sprites } alt="pokemon"/>
            <p>Peso: { pokemonSelected.weight }</p>
            <p>{ error ? error.reason : '' }</p>
            <input type="text" ref= { inputPokemonName }/>
            <button
                onClick={ () => getPokemon(inputPokemonName.current.value) }
                disabled={ onLoading }
            >{ onLoading ? 'Buscando...' : 'Buscar novo Pokemon'}</button>
            <hr/>
            <h2>Já buscados</h2>
            <ul>
                {
                    pokemonCachedList.map(pokemon => (
                        <li key={ pokemon.name } onClick={ () => getPokemon(pokemon.name) }>{ pokemon.name }</li>
                    ))
                }
            </ul>
        </div>
    );
}

const mapStateToProp = store => ({
    error: store.pokemonState.error,
    pokemonSelected: store.pokemonState.pokemonSelected,
    pokemonCachedList: store.pokemonState.pokemons,
    onLoading: store.pokemonState.onLoading
});

const mapDispatchToProps = {
    getPokemon
};

export default connect(mapStateToProp, mapDispatchToProps)(Pokemon);
