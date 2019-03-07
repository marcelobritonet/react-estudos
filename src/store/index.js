import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Reducers } from '../reducers';
import StorageService from '../services/storage.service';

const GLOBAL_STORAGE_KEY = 'STORE';
const state = StorageService.getItem(GLOBAL_STORAGE_KEY);

export const Store = createStore(
    Reducers,
    state,
    composeWithDevTools(
        applyMiddleware(
            thunk
        )
    )
);

Store.subscribe(() => {
    StorageService.setItem(GLOBAL_STORAGE_KEY, Store.getState());
});
