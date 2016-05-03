/**
 * # globalReducer.js
 * 
 *
 */
'use strict';
/**
 * ## Imports
 * The InitialState for auth
 * fieldValidation for validating the fields
 * formValidation for setting the form's valid flag
 */
const {

    SET_CURRENT_USR
} = require('../../lib/constants').default;

import InitialState from './globalInitialStates';

const initialState = new InitialState;
/**
 * ## globalReducer function
 * @param {Object} state - initialState 
 * @param {Object} action - type and payload
 */
export default function globalReducer(state = initialState, action={}) {
  if (!(state instanceof InitialState)) return initialState.merge(state);

  switch (action.type) {
  /**
   * ### Save the sessionToken
   */
    case SET_CURRENT_USR:
      return state.set('currentUser', action.currentUser);
    default:
      return state;
}
}
