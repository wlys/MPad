/**
 * Created by liu on 2016/4/29.
 */
import React,
    {
    Component,
    StyleSheet,
    ScrollView,
    Text,
    TouchableHighlight,
    View
    }
    from 'react-native';
import {Map} from 'immutable';
import Dimensions from 'Dimensions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LoginActions from '../reducers/Login/LoginActions';
import * as globalActions from '../reducers/global/globalActions';
import LoginRender from '../components/LoginComponent/LoginRender';
var FormButton = require('../components/LoginComponent/FormButton');
var {height, width} = Dimensions.get('window');

const {
    LOGIN,
    REGISTER,
    FORGOT_PASSWORD
    } = require('../lib/constants').default;

/**
 * ## Styles
 */

const actions = [
    LoginActions,
    globalActions
];


function mapStateToProps(state) {
    return {
        ...state
    };
}
function mapDispatchToProps(dispatch) {
    const creators = Map()
        .merge(...actions)
        .filter(value => typeof value === 'function')
        .toObject();
    return {
        actions: bindActionCreators(creators, dispatch)

    };
}

class LoginContainer extends Component {
    authLogin() {
        this.props.actions.isFetching();
        var value = this.refs.loginRender.getFormValue();
        var username = value.username;
        var password = value.password;

        fetch('http://192.168.253.1:3000/login', {
            method: "POST",
            body: JSON.stringify({username: username, password: password})
        })
            .then((response) => response.json())
            .then((responseData) => {
                alert(responseData.username);
                if (responseData.login == 'success')
                {
                    this.props.actions.setCurrentUser(responseData.username);
                    //this.props.navigator.push({Component:this.props.lastComponent});
                }
            }
        ).done();

    }

    authRegister() {
        this.props.actions.isFetching();
        var value = this.refs.loginRender.getFormValue();
        var username = value.username;
        var password = value.password;
        var passwordAgain = value.passwordAgain;
        var email = value.email;
        fetch('http://192.168.253.1:3000/register', {
            method: "POST",
            body: JSON.stringify({username: username, email: email, password: password})
        })
            .then((response) => response.text())
            .then((responseData) => {
                alert(responseData);
            }
        ).done();

    }


    render() {
        var formType = this.props.login.formType;
        let loginButtonText, leftMessageType, rightMessageType, onButtonPress;
        switch (formType) {
            case FORGOT_PASSWORD:
            {
                loginButtonText = '找回密码';
                leftMessageType = LOGIN;
                rightMessageType = REGISTER;
                break;
            }
            case LOGIN:
            {
                loginButtonText = '登录';
                leftMessageType = FORGOT_PASSWORD;
                rightMessageType = REGISTER;
                onButtonPress = this.authLogin.bind(this);
                break;
            }

            case REGISTER:
            {
                loginButtonText = '注册';
                leftMessageType = FORGOT_PASSWORD;
                rightMessageType = LOGIN;
                onButtonPress = this.authRegister.bind(this);
                break;
            }
        }


        return (
            <LoginRender ref='loginRender'
                         formType={ formType }
                         loginButtonText={loginButtonText}
                         displayPasswordCheckbox={ true }
                         leftMessageType={ leftMessageType }
                         rightMessageType={ rightMessageType }
                         onButtonPress={onButtonPress}
                {...this.props}
                />
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    forgotContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    }
});
export default connect(mapStateToProps, mapDispatchToProps, null, {withRef: true})(LoginContainer);