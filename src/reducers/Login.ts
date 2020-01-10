import {loginActions} from "../actions/LoingAction";
import {reducerWithInitialState} from 'typescript-fsa-reducers';

export interface LoginState {
    emailAddress: string
    password: string
}

const initialState: LoginState = {
    emailAddress: "",
    password: ""
};

export const loginReducer = reducerWithInitialState(initialState)
    .case(loginActions.updateEmail, (state, emailAddress) => {
        return Object.assign({}, state, {emailAddress});
    })
    .case(loginActions.updatePassword, (state, password) => {
        return Object.assign({}, state, {password})
    });
// TODO implement post loginform to backend, using axios,middleware