import { ADD_NEW_FAV } from '../actions/types';

const INITIAL_STATE = ['Sponge Bob', 'America', 'Hold My Beer', 'Kids Falling Over', 'Yes', 'No']


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_NEW_FAV:
            return [...state, action.payload];
        default: 
            return state;
    }
}