/**
 * Created by liu on 2016/3/30.
 */
import React from 'react-native';
import {bindActionCreators} from 'redux';
import * as LobbyMgrAction from '../reducers/lobby/LobbyMgrActions';
import LoginContainer from './LoginContainer';
let {
    View,
    Component
    } = React;
import {connect} from 'react-redux'

import LobbyMgr from '../components/LobbyMgrComponent/lobbyManager'

class LobbyMgrContainer extends Component {
    render() {


        if(false){
            return (
                <LoginContainer  {...this.props}/>
            )
        }else {
            return (
                <LobbyMgr  {...this.props}/>
            )
        }
    }
}
function mapStateToProps(state) {
    return {
        ...state
    };
}

function mapDispatchToProps(dispatch) {

    return {
        lobbyMgrActions: bindActionCreators(LobbyMgrAction, dispatch)

    };
}
export default connect(mapStateToProps, mapDispatchToProps,null,{withRef:true})(LobbyMgrContainer);
/*
export default connect(state => ({
         ...state
    }),
    (dispatch) => ({
        actions: bindActionCreators(LobbyMgrAction, dispatch)
    }),null,{withRef:true}
)(LobbyMgrContainer);
*/
