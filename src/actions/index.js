import { CLICK_UPDATE_NAME, CLICK_UPDATE_LAST_NAME, CLICK_GET_ATIVIDADE } from './actionTypes';

export const setName = value => ({
    type: CLICK_UPDATE_NAME,
    newValue: value
});

export const setLastName = value => ({
    type: CLICK_UPDATE_LAST_NAME,
    newValue: value
});

export const getInfo = value => (
    async (dispatch, getState) => {
        try {
            var response = await fetch(`//viacep.com.br/ws/${value}/json/`);
            var data = await response.json();
            dispatch({
                type: CLICK_GET_ATIVIDADE,
                newValue: data
            });
        } catch (e) {}
    }
);

