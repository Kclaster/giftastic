import { ADD_NEW_FAV,
SWITCH_TO_OMDB } from '../actions/types';

const INITIAL_STATE = ['Sponge Bob', 'America', 'Hold My Beer', 'Kids Falling Over', 'Yes', 'No']

const OMDB_STATE = ['Titanic', 'Remember the Titans', 'It']


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_NEW_FAV:
            return [...state, action.payload];
        case SWITCH_TO_OMDB:
            return [...OMDB_STATE]
        default: 
            return state;
    }
}