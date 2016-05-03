
import {Record} from 'immutable';
const {
    LOGIN,REGISTER
    } = require('../../lib/constants').default;
var InitialState = Record({
    formType: LOGIN,
    disabled: false,
    error: null,
    isValid: false,
    isFetching: false,
    fields: new (Record({
        username: '',
        usernameHasError: false,
        email: '',
        emailHasError: false,
        password: '',
        passwordHasError: false,
        passwordAgain: '',
        passwordAgainHasError: false,
        showPassword: false
    }))
});
export default InitialState;


