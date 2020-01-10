import {loginActions} from "../actions/LoingAction";
import {reducerWithInitialState} from 'typescript-fsa-reducers';
import { AuthState } from '.';

const initialState: AuthState = {
    userName:"",
    emailAddress: "",
    password: "",
};

export const loginReducer = reducerWithInitialState(initialState)
    .case(loginActions.updateEmail, (state, emailAddress) => {
        return Object.assign({}, state, {emailAddress});
    })
    .case(loginActions.updatePassword, (state, password) => {
        return Object.assign({}, state, {password})
    })
    .case(loginActions.startLogin,(state :AuthState,) =>{

        return Object.assign({})
    });

// TODO implement post loginform to backend, using axios,middleware