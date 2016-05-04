
'use strict';

import MainScreen from './MainScreen/MainScreenReducers';
import lobby from './lobby/LobbyMgrReducers';
import login from './Login/LoginReducers';
import global from './global/globalReducers';

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
MainScreen,lobby,login,global

});

export default rootReducer;
