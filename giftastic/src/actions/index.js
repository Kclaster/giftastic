import { 
    ADD_NEW_FAV,
    UPLOAD_GIF,
    GET_GIF,
    RUN_DISPLAY,
    DO_NOT_RUN_DISPLAY,
    SWITCH_TO_OMDB,
    OMDB_ON,
    OMDB_OFF

 } from './types';

 import gifApi from '../api/gifs';



//action creator for handling clients input into searchBar
export const addFav = (action) => {
    return {
        type: ADD_NEW_FAV,
        payload: action
    };
};


export const uploadGif = (action) => {
    return {
        type: UPLOAD_GIF,
        payload: action
    };
};


export const getGif = (action) => async dispatch => {
        console.log(action);
        const key = 'GRghbyFwY5CEhc1h7ngS9KBEK9s2WzBa'
        const response = await gifApi.get(`search?q=${action}&api_key=${key}`)
        .then(function(response) {
            return response.data.data
        });


        dispatch({ type: GET_GIF, payload: response})
};

export const runDisplayGif = () => {
    return {
        type: RUN_DISPLAY
    };
};

export const doNotRunDisplayGif = () => {
    return {
        type: DO_NOT_RUN_DISPLAY
    };
};


export const omdbOn = () => {
    return {
        type: OMDB_ON
    }
}

export const omdbOff = () => {
    return {
        type: OMDB_OFF
    }
}

export const switchToOmdb = () => {
    return {
        type: SWITCH_TO_OMDB
    };
};





