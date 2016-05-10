/**
 * Created by liu on 2016/3/30.
 */
import InitialState from './HomeInitialStates';
const {
    CHG_ACTIVE_TAB,
    } = require('../../lib/constants').default;
const initialState = new InitialState;
export default function HomeReducers(state = initialState, action={}) {
    if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
    switch (action.type) {
        case CHG_ACTIVE_TAB:
           return  state.set('activityTab', action.activeNum);
        default:
            return state
    }
}
