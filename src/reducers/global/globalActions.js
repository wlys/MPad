/**
 * # globalActions.js
 * 
 * Actions that are global in nature
 */
'use strict';

/**
 * ## Imports
 * 
 * The actions supported
 */
const {
SET_CURRENT_USR
} = require('../../lib/constants').default;

/**
 * ## set the sessionToken
 *
 */
export function setCurrentUser(currentUser) {
  return {
    type: SET_CURRENT_USR,
    currentUser: currentUser
  };
}

