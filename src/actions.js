/***********
 * Redux actions file.
 *
 * All your actions should be declared here.
 ***********/

import * as types from 'actionTypes';
import * as api from 'api';

/**
 * This is an action to mock a login API call, for your reference.
 */
export function login() {
    return dispatch => {
        return api.login()
            .then(user => {
                return dispatch({ type: types.APP_LOGIN, payload: { user } })
            });
    }
}
