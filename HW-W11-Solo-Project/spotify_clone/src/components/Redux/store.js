import { createStore, combineReducers } from "redux";
import playBarSongReducer from "./Reducers/PlayBarSongReducer";

const rootReducer = combineReducers({ playBarSongReducer });
let store = createStore(rootReducer);
export default store;
