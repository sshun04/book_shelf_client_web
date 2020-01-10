// アクションを列挙する

import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const loginActions = {
    updateEmail: actionCreator<string>('LOGIN_UPDATE_EMAIL'),
    updatePassword: actionCreator<string>('LOGIN_UPDATE_PASSWORD'),
    postForm: actionCreator<string>('POST_LOGIN_FORM')
};