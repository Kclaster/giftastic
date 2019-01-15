import {
    OMDB_ON,
    OMDB_OFF
} from '../actions/types'

export default (state = false, action) => {
    switch(action.type) {
        case OMDB_ON:
            return state = false;
        case OMDB_OFF:
            return state = true;
        default: 
            return state;
    }
}