
'use strict';

const React = require('react-native');
const {
    PropTypes
    } = React;

const {
    REGISTER,
    LOGIN,
    FORGOT_PASSWORD
    } = require('../../lib/constants').default;

const t = require('tcomb-form-native');
let Form = t.form.Form;

var LoginForm = React.createClass({

    propTypes: {
        formType: PropTypes.string

    },


        getFormValue(){
        return this.refs.form.getValue();
    },
        render() {

        let formType = this.props.formType;

        let options = {
            auto: 'placeholders',
            fields: {

            }
        };

        let username = {
            label: '用户名',
            placeholder:'请输入用户名',
            maxLength: 12,
            editable: !this.props.form.isFetching,
            hasError: this.props.form.fields.usernameHasError,
            error: '必须为6-12位字符或数字'
        };

        let email = {
            label: '邮箱',
            placeholder:'请输入合法邮箱',
            keyboardType: 'email-address',
            editable: !this.props.form.isFetching,
            hasError: this.props.form.fields.emailHasError,
            error: '请输入合法邮箱'
        };

        let secureTextEntry = true;

        let password = {
            label: '密码',
            placeholder:'请输入密码',
            maxLength: 12,
            secureTextEntry: secureTextEntry,
            editable: !this.props.form.isFetching,
            hasError: this.props.form.fields.passwordHasError,
            error: '必须为6-12位字符至少包含1位数字和1位特殊字符'
        };

        let passwordAgain= {
            label: '再次输入密码',
            placeholder:'请再次输入密码',
            secureTextEntry: secureTextEntry,
            maxLength: 12,
            editable: !this.props.form.isFetching,
            hasError: this.props.form.fields.passwordAgainHasError,
            error: '密码必须相同'
        };

        let loginForm;
        switch(formType) {

            case(REGISTER):
                loginForm = t.struct({
                    username: t.String,
                    email: t.String,
                    password: t.String,
                    passwordAgain: t.String
                });
                options.fields['username'] = username;
                options.fields['email'] = email;
                options.fields['password'] = password;
                options.fields['passwordAgain'] = passwordAgain;
                break;


            case(LOGIN):
                loginForm = t.struct({
                    username: t.String,
                    password: t.String
                });
                options.fields['username'] = username;
                options.fields['password'] = password;
                break;

            case(FORGOT_PASSWORD):
                loginForm = t.struct({
                    email: t.String
                });
                options.fields['email'] = email;
                break;
        } //switch

        return (
            <Form ref="form"
                  type={loginForm}
                  options={options}
                  value={this.props.value}
                  onChange={this.props.onChange}
                />

        );
    }
});

module.exports = LoginForm;

