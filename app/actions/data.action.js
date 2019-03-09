import _ from 'lodash';
import { 
    dataService
 } from '../services';

import {
    GET_COUNTRIES_SUCCESS
} from '../constants';

export const getCountriesSuccess = countries => ({ countries, type: GET_COUNTRIES_SUCCESS });

const getCountriesWapper = _.debounce((dispath, getState, options) => {
    const {
        dataReducer: {
            countries
        }
    } = getState();
    if (countries.length > 0) return;
    dataService
        .getCountries()
        .then((res) => {
            dispath(getCountriesSuccess(res.data));
        });
}, 300);

export const getCountries = (options) => {
    return (dispath, getState) => {
        getCountriesWapper(dispath, getState, options);
    };
};
