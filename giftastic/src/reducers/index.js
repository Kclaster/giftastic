import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
import addNewFav from './addNewFav';
import uploadGif from './uploadGif';
import getGif from './getGif';



export default combineReducers({
    form: formReducer,
    myFirstReduxKey: addNewFav,
    uploadGif: uploadGif,
    getGif: getGif,

});