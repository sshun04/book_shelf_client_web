import {combineReducers} from 'redux'
import {History} from 'history'
import {RouterState, connectRouter} from 'connected-react-router'
import {loginReducer} from './Login'

const rootReducer = (history: History) => combineReducers(
    {
        login: loginReducer,
        router: connectRouter(history)
    }
);

export interface State {
    router: RouterState
    login: AuthState
}

export interface AuthState{
    userName:string
    emailAddress: string
    password: string
}

export default rootReducer