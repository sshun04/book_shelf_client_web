import {createStore, combineReducers} from 'redux';
import {loginReducer, LoginState} from "../reducers/Login";

export interface AppState {
    login: LoginState
}

export const store = createStore(
    combineReducers<AppState>({
        login :loginReducer
    })
);

