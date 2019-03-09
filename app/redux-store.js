import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import {
    defaultReducer,
    lastAction,
    dataReducer
} from './reducers';

class ReduxStore {
    static _instance;
    static getInstance() {
        return this._instance || (this._instance = new this());
    }

    store = undefined;

    constructor() {
        const rootReducer = combineReducers({
            defaultReducer,
            lastAction,
            dataReducer
        });

        this.store = createStore(rootReducer, applyMiddleware(thunk, logger));
    }
}

export default ReduxStore.getInstance();