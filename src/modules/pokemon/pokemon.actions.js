export const UPDATE_POKEMON = '[POKEMON] UPDATE_POKEMON_VIA_API';
export const RESTORE_SAVED_POKEMON = '[POKEMON] RESTORE_SAVED_POKEMON';
export const SET_POKEMON_ERROR = '[POKEMON] SET_POKEMON_ERROR';
export const SET_START_LOAD = '[POKEMON] SET_START_LOAD';

// const APIPokemon = '//pokeapi.co/api/v2/pokemon';
const APIPokemon = '//pokeapi.salestock.net/api/v2/pokemon';

export const getPokemon = name => (
    async (dispatch, getState) => {
        try {
            _getPokemonLocaly(getState, name, dispatch);
        } catch (e) {
            dispatch({
                type: SET_START_LOAD
            });
            try {
                await _getPokemonRemotely(name, dispatch);
            } catch (e) {
                dispatch({
                    type: SET_POKEMON_ERROR,
                    newValue: e
                })
            }
        }
    }
);

const _getPokemonLocaly = (getState, name, dispatch) => {
    const saved = getState().pokemonState.pokemons.find(pokemon => pokemon.name === name);
    if (saved) {
        dispatch({
            type: RESTORE_SAVED_POKEMON,
            newValue: saved
        });
    } else {
        throw 'not found localy'
    }
};

const _getPokemonRemotely = async (name, dispatch) => {
    const response = await fetch(`${APIPokemon}/${name}/`, {
        method: 'get',
        mode: 'cors'
    });
    let data = await response.json();
    data.lastUpdate = new Date();

    if (response.status === 200) {
        dispatch({
            type: UPDATE_POKEMON,
            newValue: data
        })
    } else {
        throw 'not found remotely';
    }
};
