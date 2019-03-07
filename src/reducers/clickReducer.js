import { CLICK_UPDATE_NAME, CLICK_UPDATE_LAST_NAME, CLICK_GET_ATIVIDADE } from '../actions/actionTypes';

export const initialState = {
    name: 'Marcelo',
    lastName: 'Brito',
    cnpj: '21655340',
    info:  {
        cep: '01001-000',
        logradouro: 'Praça da Sé',
        complemento: 'lado ímpar',
        bairro: 'Sé',
        localidade: 'São Paulo',
        uf: 'SP',
        unidade: '',
        ibge: '3550308',
        gia: '1004'
    }
};

export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_UPDATE_NAME:
            return {
                ...state,
                name: action.newValue
            };

        case CLICK_UPDATE_LAST_NAME:
            return {
                ...state,
                lastName: action.newValue
            };

        case CLICK_GET_ATIVIDADE:
            return {
                ...state,
                info: action.newValue
            };
        default:
            return state;
    }
};
