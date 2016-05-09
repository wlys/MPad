import React from 'react-native';
import {bindActionCreators} from 'redux';
import * as HomeAction from '../reducers/Home/HomeActions';
import LoginContainer from './LoginContainer';
let {
    View,
    Component
    } = React;
import {connect} from 'react-redux'

import Home from '../components/HomeComponent'

class HomeContainer extends Component {
    shouldComponentUpdate( nextProps, nextState){

        return !(nextProps.lobby===this.props.lobby&&nextProps.global === this.props.global);
    }
    render() {


        if(false){
            return (
                <LoginContainer  {...this.props}/>
            )
        }else {
            return (
                <Home  {...this.props}/>
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
        HomeActions: bindActionCreators(HomeAction, dispatch)

    };
}
export default connect(mapStateToProps, mapDispatchToProps,null,{withRef:true})(HomeContainer);
