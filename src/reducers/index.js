
import { combineReducers } from 'redux';
import contactReducer from "../slices/contactSlice"

const reducers = combineReducers({
    contact:contactReducer,
});

export default reducers;
