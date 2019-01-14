import { GET_GIF } from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case GET_GIF:
            return {...state, [action.payload]: action.payload};
        default:
            return state;
    }
};