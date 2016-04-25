/**
 * Created by liu on 2016/4/7.
 */

import InitialState from './MainScreenInitialStates';
const {
    SHOW_TABBAR,
    } = require('../../lib/constants').default;
const initialState = new InitialState;


export default function navigator(state = initialState, action={}) {
    if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
    switch (action.type) {
        case SHOW_TABBAR:
            return  state.set('ShowTabBar', action.ShowTabBar);
        default:
            return state
    }
}