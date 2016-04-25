/**
 * Created by liu on 2016/4/7.
 */
//import * as types from './MainScreenStates';
const {
    SHOW_TABBAR,
    } = require('../../lib/constants').default;
export function showTabBar(show) {
    return {
        type: SHOW_TABBAR,
        ShowTabBar: show
    };
}