
'use strict';

import MainScreen from './MainScreen/MainScreenReducers';
import lobby from './lobby/LobbyMgrReducers';
import login from './Login/LoginReducers';
import global from './global/globalReducers';
import mySet from './mySet/mySetReducers';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
MainScreen,lobby,login,global,mySet

});

export default rootReducer;
