import update from 'immutability-helper';

import {
    GET_COUNTRIES_SUCCESS
} from '../constants';

const defaultState = {
    countries: []
};

const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_COUNTRIES_SUCCESS:
            return setCountries(state, action);
        default:
            return state;
    }
};

const setCountries = (state, action) => {
    let { countries } = action;

    const newState = update(state, {
        countries: {
            $set: countries
        }
    });

    return newState;
};

export default dataReducer;