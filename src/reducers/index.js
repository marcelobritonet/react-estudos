import { clickReducer } from './clickReducer';
import { pokemonReducer } from '../modules/pokemon/pokemon.reducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    clickState: clickReducer,
    pokemonState: pokemonReducer
});
