
 import {Record} from 'immutable';
 /**
 * ## InitialState
 *
 * * currentUser - object returned from Parse.com when validated
 * * showState - toggle for Header to display state
 * * currentState - object in Json format of the entire state
 * * store - the Redux store which is an object w/ 4 initial states
 *   * device
 *   * auth
 *   * global
 *   * profile
 *
 */
var InitialState = Record({
     ShowTabBar: true
});
export default InitialState;