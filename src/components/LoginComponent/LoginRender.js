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

import Dimensions from 'Dimensions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

var LoginForm = require('./LoginForm');
var FormButton = require('./FormButton');
var {height, width} = Dimensions.get('window');

const {
    LOGIN,
    REGISTER,
    FORGOT_PASSWORD
    } = require('../../lib/constants').default;

var styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#eeeeee'
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
class LoginRender extends Component {
    constructor(props) {
        super(props);
        //this.errorAlert = new ErrorAlert();
        this.state = {
            value: {
                username: this.props.login.fields.username,
                email: this.props.login.fields.email,
                password: this.props.login.fields.password,
                passwordAgain: this.props.login.fields.passwordAgain
            }
        };
    }


    componentWillReceiveProps(nextprops) {

        this.setState({
            value: {
                username: nextprops.login.fields.username,
                email: nextprops.login.fields.email,
                password: nextprops.login.fields.password,
                passwordAgain: nextprops.login.fields.passwordAgain
            }
        });
    }

    onChange(value) {
        if (value.username != '') {
            this.props.actions.onAuthFormFieldChange('username', value.username);
        }
        if (value.email != '') {
            this.props.actions.onAuthFormFieldChange('email', value.email);
        }
        if (value.password != '') {
            this.props.actions.onAuthFormFieldChange('password', value.password);
        }
        if (value.passwordAgain != '') {
            this.props.actions.onAuthFormFieldChange('passwordAgain', value.passwordAgain);
        }
        this.setState(
            {value}
        );
    }


    getMessage(messageType, actions) {
        let forgotPassword =
            <TouchableHighlight
                disabled={this.props.login.isFetching}
                onPress={() => {actions.changeFormType(FORGOT_PASSWORD);}}>
                <Text>忘记密码?</Text>
            </TouchableHighlight>;

        let alreadyHaveAccount =
            <TouchableHighlight
                disabled={this.props.login.isFetching}
                onPress={() => {actions.changeFormType(LOGIN)}}>
                <Text>已经注册?</Text>
            </TouchableHighlight>;

        let register =
            <TouchableHighlight
                disabled={this.props.login.isFetching}
                onPress={() => {actions.changeFormType(REGISTER);}}>
                <Text>注册新用户?</Text>
            </TouchableHighlight>;

        switch (messageType) {
            case FORGOT_PASSWORD:
                return forgotPassword;
            case LOGIN:
                return alreadyHaveAccount;
            case REGISTER:
                return register;
        }
    }

    getFormValue() {
        return this.refs.loginform.getFormValue();
    }

    render() {
        var formType = this.props.formType;
        var loginButtonText = this.props.loginButtonText;
        var leftMessageType = this.props.leftMessageType;
        var rightMessageType = this.props.rightMessageType;
        var onButtonPress = this.props.onButtonPress;
        let leftMessage = this.getMessage(leftMessageType, this.props.actions);
        let rightMessage = this.getMessage(rightMessageType, this.props.actions);

// this.props.login.isFetching||!this.props.login.isValid
        return (

            <View style={styles.container}>
                <ScrollView horizontal={false} width={width} height={height}>
                    <View>
                        <View style={styles.inputs}>
                            <LoginForm ref="loginform"
                                       formType={formType}
                                       form={this.props.login}
                                       value={this.state.value}
                                       onChange={this.onChange.bind(this)}

                                />

                        </View>

                        <FormButton
                            isDisabled={false}
                            onPress={onButtonPress}
                            buttonText={loginButtonText}/>
                        <View >
                            <View style={styles.forgotContainer}>
                                {leftMessage}
                                {rightMessage}
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>
        );
    }
}
module.exports = LoginRender;