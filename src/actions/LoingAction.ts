import actionCreatorFactory,{ ActionCreator, Success, Failure }  from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

const submit =
    actionCreator.async<{}, {}, {}>('ACTIONS_SUBMIT');

export interface LoginAsyncActions {
    startLogin: ActionCreator<{}>;
    failedLogin: ActionCreator<Failure<{}, {}>>;
    doneLogin: ActionCreator<Success<{}, {}>>;
}

export const loginActions = {
    updateEmail: actionCreator<string>('LOGIN_UPDATE_EMAIL'),
    updatePassword: actionCreator<string>('LOGIN_UPDATE_PASSWORD'),
    postForm: actionCreator<any>('POST_LOGIN_FORM'),
    startLogin: submit.started,
    failedLogin: submit.failed,
    doneLogin: submit.done
};