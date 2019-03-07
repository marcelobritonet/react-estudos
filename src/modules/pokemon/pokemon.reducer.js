import { UPDATE_POKEMON, SET_POKEMON_ERROR, RESTORE_SAVED_POKEMON, SET_START_LOAD } from './pokemon.actions';

const initialState = {
    error: {
        status: false,
        reason: ''
    },
    lastUpdate: new Date(),
    onLoading: false,
    pokemons: [],
    pokemonSelected: {
        name: '',
        sprites: '',
        weight: 0
    }
};

export const pokemonReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_POKEMON:
            return {
                ...state,
                error: {
                    ...state.error,
                    status: false,
                    reason: ''
                },
                lastUpdate:  action.newValue.lastUpdate,
                onLoading: false,
                pokemons: [
                    ...state.pokemons,
                    ...[{
                        name: action.newValue.name,
                        sprites: action.newValue.sprites.front_shiny,
                        weight: action.newValue.weight
                    }]
                ],
                pokemonSelected: {
                    ...state.pokemonSelected,
                    name: action.newValue.name,
                    sprites: action.newValue.sprites.front_shiny,
                    weight: action.newValue.weight
                }
            };

        case RESTORE_SAVED_POKEMON:
            return {
                ...state,
                error: {
                    ...state.error,
                    status: false,
                    reason: ''
                },
                onLoading: false,
                pokemonSelected: {
                    ...state.pokemonSelected,
                    name: action.newValue.name,
                    sprites: action.newValue.sprites,
                    weight: action.newValue.weight
                }
            };

        case SET_POKEMON_ERROR:
            return {
                ...state,
                error: {
                    ...state.error,
                    status: true,
                    reason: action.newValue
                },
                onLoading: false,
            };
        case SET_START_LOAD:
            return {
                ...state,
                onLoading: true
            };
        default:
            return state;
    }
};
