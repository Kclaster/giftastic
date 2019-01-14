import { UPLOAD_GIF } from '../actions/types';


export default (state = [], action) => {
    switch(action.type) {
        case UPLOAD_GIF:
            return [...state, action.payload];
        default: 
            return state
    }
}