// bootstrap redux
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {modules as coreModules} from './modules';
import thunk from 'redux-thunk'

export function initialize(clientModules = [], middlewares = []) {
    const coreReducers = getReducers(coreModules),
        clientReducers = getReducers(clientModules);

    const rootReducer = combineReducers(
        coreReducers,
        clientReducers
    );

    return createStore(
        rootReducer,
        applyMiddleware(...[thunk, ...middlewares])
    )
}

function getReducers(modules) {
    const reducers =  modules.map((m) => m.reducers);
    return Object.assign({}, ...reducers);
}