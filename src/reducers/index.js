
'use strict';

import MainScreen from './MainScreen/MainScreenReducers';
import lobby from './lobby/LobbyMgrReducers';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
MainScreen,lobby

});

export default rootReducer;
