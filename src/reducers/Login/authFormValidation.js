/**
 * # authFormValidation.js
 * 
 * This class determines only if the form is valid 
 * so that the form button can be enabled.
 * if all the fields on the form are without error,
 * the form is considered valid
 */
'use strict';

/**
 * ## Imports
 * the actions being addressed
 */
const {
  LOGOUT,
  REGISTER,
  LOGIN,
  FORGOT_PASSWORD
} = require('../../lib/constants').default;

/**
 * ## formValidation
 * @param {Object} state - the Redux state object
 */
export default function formValidation (state) {

  switch(state.formType) {
    /**
     * ### Logout has no fields, so always valid
     */
  case LOGOUT:
    return state.set('isValid',true);
    /**
     * ### Registration has 4 fields
     */     
  case REGISTER:
    if (state.fields.username != ''
        &&
        state.fields.email !== ''
        &&
        state.fields.password !== ''
        &&
        state.fields.passwordAgain !== ''
        &&
        !state.fields.usernameHasError
        &&
        !state.fields.emailHasError
        &&
        !state.fields.passwordHasError
        &&
        !state.fields.passwordAgainHasError) {
      return state.set('isValid',true);
    } else {
      return state.set('isValid',false);
    }
    /**
     * ### Login has 2 fields
     */
  case LOGIN:
    if (state.fields.username !== ''
        &&
        state.fields.password !== ''
        &&
        !state.fields.usernameHasError
        &&
        !state.fields.passwordHasError) {
      return state.set('isValid',true);
    } else {
      return state.set('isValid',false);
    }
    /**
     * ### Reset password has 1 field
     */     
  case FORGOT_PASSWORD:
    if (state.fields.email !== ''
        &&
        !state.fields.emailHasError){
      return state.set('isValid',true);
    } else {
      return state.set('isValid',false);
    }
    
  }
  /**
   * Default, return the state
   */
  return state;
}
